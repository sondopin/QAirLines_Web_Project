import mongoose from "mongoose";
import { BookingType } from "./types";
import ticketSchema from "./ticket";

const bookingSchema = new mongoose.Schema<BookingType>({
  user_id: { type: String, required: true },
  flight_id: { type: String, required: true },
  busi_tickets: { type: Number, required: true },
  eco_tickets: { type: Number, required: true },
  booking_date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["Delayed", "Confirmed", "Cancelled"],
    required: true,
  },
  total_amount: { type: Number, required: true },
  cancellation_deadline: { type: Date, required: true },
});

const Booking = mongoose.model<BookingType>("Booking", bookingSchema);
export default Booking;
