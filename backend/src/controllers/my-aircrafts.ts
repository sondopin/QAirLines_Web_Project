import Aircraft from "../models/aircraft";
import { AircraftType } from "../models/types";
import express, { Request, Response } from "express";
import Flight from "../models/flight";
import mongoose from "mongoose";
import { FlightType } from "../models/types";
import Seat from "../models/seat";
import { SeatType } from "../models/types";
import User from "../models/user";
import Booking from "../models/booking";

const myAircraftController = {
    'addAircrapt': async (req: Request, res: Response) => {
        try {
          const newAircraft: AircraftType = req.body;
    
          newAircraft.last_updated = new Date();
          newAircraft.user_id = req.user_id;
    
          const aircraft = new Aircraft(newAircraft);
          await aircraft.save();
    
          res.status(201).send(aircraft);
        } catch (e) {
          console.log(e);
          res.status(500).json({ message: "Something went wrong" });
        }
      },
    'getAircrafts': async (req: Request, res: Response) => {
        try {
          const aircrafts = await Aircraft.find({ user_id: req.user_id });
          res.send(aircrafts);
        } catch (e) {
          console.log(e);
          res.status(500).json({ message: "Error fetching aircrafts" });
        }
      },
    'getAircraftById': async (req: Request, res: Response) => {
      const aircraft_id = req.params.aircraft_id.toString();
      try {
        const aircraft = await Aircraft.findOne({
          _id: aircraft_id,
          user_id: req.user_id,
        });
        res.json(aircraft);
      } catch (error) {
        res.status(500).json({ message: "Error fetching aircrafts" });
      }
      },
    'updateAircraft': async (req: Request, res: Response) => {
      try {
        const { aircraft_id } = req.params;
        const updatedData = req.body;
        updatedData.last_updated = new Date();
        
        const aircraft = await Aircraft.findById(aircraft_id);
        if (!aircraft) {
           res.status(404).json({ message: "Aircraft not found" });
           return;
        }
    
        const originalSeats = aircraft.nums_seat;
    
        const seatChange = updatedData.nums_seat - originalSeats;
        if (seatChange !== 0) {
          await updateAircraftSeats(aircraft_id, seatChange);
        }
    
        const updatedAircraft = await Aircraft.findOneAndUpdate(
          { _id: aircraft_id, user_id: req.user_id },
          updatedData,
          { new: true }
        );
    
        res.status(200).json(updatedAircraft);
      } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
      }
    },
    'deleteAircraft': async (req: Request, res: Response) => {
      const aircraft_id = req.params.aircraft_id.toString();
      try {
        const aircraft = await Aircraft.findOneAndDelete({
          _id: aircraft_id,
          user_id: req.user_id,
        });
    
        if (!aircraft) {
           res.status(404).json({ message: "Aircraft not found" });
           return;
        }
    
        res.status(200).json({ message: "Aircraft removed successfully" });
      } catch (error) {
        res.status(500).json({ message: "Error removing Aircraft" });
      }
      },
    'addFlight': async (req: Request, res: Response) => {
      const aircraft_id = req.params.aircraft_id.toString();
      try {
        const aircraft = await Aircraft.findOne({
          _id: aircraft_id,
          user_id: req.user_id,
        });
    
        if (!aircraft) {
          res.status(404).json({ message: "Aircraft not found" });
          return;
        }
        
        const nums_busi_seat_avail = Math.floor(aircraft.nums_seat * 0.25);
        const nums_eco_seat_avail = aircraft.nums_seat - nums_busi_seat_avail;

        const newFlight = new Flight({
            ...req.body,
            aircraft_id,
            nums_busi_seat_avail,
            nums_eco_seat_avail,
        });
        newFlight.actual_departure = newFlight.scheduled_departure;
        newFlight.actual_arrival = newFlight.scheduled_arrival;
        await newFlight.save();

        const seats = [];
        for (let i = 0; i < aircraft.nums_seat; i++) {
            seats.push({
                flight_id: newFlight._id,
                seat_number: `S${i + 1}`,
                seat_class: i < nums_busi_seat_avail ? "Business" : "Economy",
                is_available: true
            });
        }

        await Seat.insertMany(seats);

        res.status(201).json({ message: "Flight and seats created successfully", flight: newFlight });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
      }
      },
    'getFlights': async (req: Request, res: Response) => {
      try {
          const { aircraft_id } = req.params;
          const flights = await Flight.find({ aircraft_id });
          res.status(200).json(flights);
      } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Something went wrong" });
      }
    },
    'updateFlight': async (req: Request, res: Response) => {
      try {
        const { aircraft_id, flight_id } = req.params;
        const { actual_departure, actual_arrival } = req.body;
    
        const flight = await Flight.findOneAndUpdate(
          { _id: flight_id, aircraft_id },
          { actual_departure, actual_arrival },
          { new: true }
        );
    
        if (!flight) {
           res.status(404).json({ message: "Flight not found" });
           return;
        }
    
        const bookings = await Booking.find({ flight_id: flight._id });
        await Booking.updateMany({ flight_id: flight._id }, { status: "Delayed" });
    
        const userIds = bookings.map((booking) => booking.user_id);
        
        await User.updateMany(
          { _id: { $in: userIds } },
          { $inc: { nums_booking_changed: 1 } }
        );

        res.status(200).json({ message: "Flight updated successfully", flight });
      } catch (error) {
        console.error("Error updating flight:", error);
        res.status(500).json({ message: "Something went wrong" });
      }
    }
};

async function updateAircraftSeats(aircraftId: string, seatChange: number) {
  const flights = await Flight.find({ aircraft_id: aircraftId });

  for (const flight of flights) {
    const seatsToAdd: Partial<SeatType>[] = [];
    const currentSeatCount = flight.nums_busi_seat_avail + flight.nums_eco_seat_avail;
    const numNewBusinessSeats = Math.floor(Math.abs(seatChange) * 0.25);
    const numNewEconomySeats = Math.abs(seatChange) - numNewBusinessSeats;

    if (seatChange > 0) {
      for (let i = 0; i < numNewBusinessSeats; i++) {
        seatsToAdd.push({
          flight_id: flight._id,
          seat_number: `B${currentSeatCount + i + 1}`,
          seat_class: "Business",
          is_available: true,
        });
      }

      for (let i = 0; i < numNewEconomySeats; i++) {
        seatsToAdd.push({
          flight_id: flight._id,
          seat_number: `E${currentSeatCount + numNewBusinessSeats + i + 1}`,
          seat_class: "Economy",
          is_available: true,
        });
      }

      await Seat.insertMany(seatsToAdd);
      flight.nums_busi_seat_avail += numNewBusinessSeats;
      flight.nums_eco_seat_avail += numNewEconomySeats;
    } else {
      const businessSeatsToRemove = await Seat.find({
        flight_id: flight._id,
        seat_class: "Business",
        is_available: true,
      })
        .limit(numNewBusinessSeats)
        .select("_id");

      const economySeatsToRemove = await Seat.find({
        flight_id: flight._id,
        seat_class: "Economy",
        is_available: true,
      })
        .limit(numNewEconomySeats)
        .select("_id");

      const seatsToRemove = [...businessSeatsToRemove, ...economySeatsToRemove];
      const seatIdsToRemove = seatsToRemove.map((seat) => seat._id);

      await Seat.deleteMany({ _id: { $in: seatIdsToRemove } });
      flight.nums_busi_seat_avail -= businessSeatsToRemove.length;
      flight.nums_eco_seat_avail -= economySeatsToRemove.length;
    }

    await flight.save();
  }
}



export default myAircraftController;   