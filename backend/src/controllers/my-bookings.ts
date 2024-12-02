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
import Ticket from "../models/ticket";

const myBookingController = {
  getMyBookings: async (req: Request, res: Response) => {
    try {
      const { user_id } = req;

      const bookings = await Booking.find({ user_id });
      if (!bookings) {
        res.status(404).json({ message: "No bookings found for this user" });
        return;
      }
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving bookings" });
    }
  },
  getBookingById: async (req: Request, res: Response) => {
    try {
      const { user_id } = req;
      const { booking_id } = req.params;

      const booking = await Booking.findOne({ _id: booking_id, user_id });
      if (!booking) {
        res.status(404).json({ message: "Booking not found" });
        return;
      }
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving booking" });
    }
  },
  cancelBooking: async (req: Request, res: Response) => {
    try {
      const { user_id } = req;
      const { booking_id } = req.params;

      const booking = await Booking.findOne({ _id: booking_id, user_id });
      if (!booking) {
        res.status(404).json({ message: "Booking not found" });
        return;
      }

      const currentDate = new Date();
      if (currentDate > booking.cancellation_deadline) {
        res.status(400).json({ message: "Cancellation deadline has passed" });
        return;
      }

      booking.status = "Cancelled";
      await booking.save();

      const tickets = await Ticket.find({ booking_id });
      const seatIds = tickets.map((ticket) => ticket.seat_id);

      await Seat.updateMany({ _id: { $in: seatIds } }, { is_available: true });

      await Ticket.deleteMany({ booking_id });

      const flight = await Flight.findById(booking.flight_id);
      if (flight) {
        const newRevenue = flight.revenue - booking.total_amount;
        flight.updateOne({ total_revenue: newRevenue });
        await flight.save();
      }

      res.status(200).json({ message: "Booking successfully cancelled" });
    } catch (error) {
      res.status(500).json({ message: "Error cancelling booking" });
    }
  },
};

export default myBookingController;
