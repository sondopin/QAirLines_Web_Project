import { Request, Response } from "express";
import Flight from "../models/flight";
import Seat from "../models/seat";
import Booking from "../models/booking";
import Ticket from "../models/ticket";
import User from "../models/user";
import { SeatType } from "../models/types";

const flightController = {
  searchFlights: async (req: Request, res: Response) => {
    try {
      const { ori_airport, des_airport, departure, nums_busi, nums_eco } =
        req.body;

      const departureTime = new Date(departure);

      const flights = await Flight.find({
        ori_airport,
        des_airport,
        nums_busi_seat_avail: { $gte: nums_busi },
        nums_eco_seat_avail: { $gte: nums_eco },
      });

      if (flights.length === 0) {
        res.status(404).json({ message: "No flights found matching criteria" });
        return;
      }

      const flights_result = flights.filter(
        (flight) => flight.actual_departure.getDate() == departureTime.getDate()
      );

      res.status(200).json({ flights_result });
    } catch (error) {
      res.status(500).json({ message: "Error searching for flights" });
    }
  },
  makeBooking: async (req: Request, res: Response) => {
    try {
      const { flight_id, listInfo, nums_busi, nums_eco, discount_code } =
        req.body;
      const user_id = req.user_id;

      const flight = await Flight.findById(flight_id);
      if (!flight) {
        res.status(404).json({ message: "Flight not found" });
        return;
      }

      let discount = 1;
      if (discount_code === "QAirLine is the best") {
        discount = 0.9;
      }

      let businessSeats: any = [];
      if (nums_busi != 0) {
        businessSeats = await Seat.find({
          flight_id,
          seat_class: "Business",
          is_available: true,
        }).limit(nums_busi);
      }

      let economySeats: any = [];
      if (nums_eco != 0) {
        economySeats = await Seat.find({
          flight_id,
          seat_class: "Economy",
          is_available: true,
        }).limit(nums_eco);
      }

      if (businessSeats.length < nums_busi || economySeats.length < nums_eco) {
        res.status(400).json({ message: "Not enough seats available" });
        return;
      }

      const booking_date = new Date();
      let cancellation_deadline = new Date(
        booking_date.getTime() + 5 * 24 * 60 * 60 * 1000
      );

      const max_deadline = new Date(
        flight.scheduled_departure.getTime() - 1 * 24 * 60 * 60 * 1000
      );
      if (cancellation_deadline > max_deadline) {
        cancellation_deadline = max_deadline;
      }

      const booking = new Booking({
        user_id,
        flight_id,
        nums_busi,
        nums_eco,
        booking_date: new Date(),
        status: "Confirmed",
        cancellation_deadline,
      });

      let total_amount = 0;
      let seatCounter = 0;

      for (const seat of businessSeats) {
        const price = flight.base_price * 1.5 * discount;
        seat.is_available = false;
        await seat.save();

        const passenger = listInfo[seatCounter];
        const ticket = new Ticket({
          booking_id: booking._id,
          seat_id: seat._id,
          passenger_name: passenger,
          price,
        });
        await ticket.save();

        total_amount += price;
        seatCounter++;
      }

      for (const seat of economySeats) {
        const price = flight.base_price * discount;
        seat.is_available = false;
        await seat.save();

        const passenger = listInfo[seatCounter];
        const ticket = new Ticket({
          booking_id: booking._id,
          seat_id: seat._id,
          passenger_name: passenger,
          price,
        });
        await ticket.save();

        total_amount += price;
        seatCounter++;
      }

      booking.total_ammount = total_amount;
      await booking.save();

      flight.revenue = flight.revenue + booking.total_ammount;

      await flight.save();

      res
        .status(201)
        .json({ message: "Booking created successfully", booking });
    } catch (error) {
      res.status(500).json({ message: "Error creating booking" });
    }
  },
};

export default flightController;
