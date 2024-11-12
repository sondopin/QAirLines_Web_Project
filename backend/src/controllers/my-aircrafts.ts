import Aircraft from "../models/aircraft";
import { AircraftType } from "../models/types";
import express, { Request, Response } from "express";
import Flight from "../models/flight";
import mongoose from "mongoose";
import { FlightType } from "../models/types";
import Seat from "../models/seat";

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
        const updatedAircraft: AircraftType = req.body;
        updatedAircraft.last_updated = new Date();
  
        const aircraft = await Aircraft.findOneAndUpdate(
          {
            _id: req.params.aircraft_id,
            user_id: req.user_id,
          },
          updatedAircraft,
          { new: true }
        );
        if (!aircraft) {
           res.status(404).json({ message: "Aircraft not found" });
           return;
        }

        await aircraft.save();
        res.status(201).json(aircraft);
      } catch (error) {
        res.status(500).json({ message: "Something went throw" });
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

        // Tạo flight mới với dữ liệu từ req.body và các thông tin đã tính toán
        const newFlight = new Flight({
            ...req.body,
            aircraft_id,
            nums_busi_seat_avail,
            nums_eco_seat_avail,
        });
        await newFlight.save();

        // Tạo ghế cho chuyến bay mới
        const seats = [];
        for (let i = 0; i < aircraft.nums_seat; i++) {
            seats.push({
                flight_id: newFlight._id,
                seat_number: `S${i + 1}`,
                seat_class: i < nums_busi_seat_avail ? "Business" : "Economy",
                is_available: true
            });
        }

        // Lưu ghế vào database
        await Seat.insertMany(seats);

        res.status(201).json({ message: "Flight and seats created successfully", flight: newFlight });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
      }
      },
    'getFlights': async (req: Request, res: Response) => {
      try {
          const { aircraft_id } = req.params;
  
          // Tìm tất cả các chuyến bay liên quan đến aircraft_id
          const flights = await Flight.find({ aircraft_id });
          res.status(200).json(flights);
      } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Something went wrong" });
      }
    }

};

export default myAircraftController;   