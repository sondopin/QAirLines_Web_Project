import mongoose from "mongoose";
import { BookingType } from "./types";  
import ticketSchema from "./ticket";

const bookingSchema = new mongoose.Schema<BookingType>({
    user_id: { type: String, required: true },
    flight_id: { type: String, required: true },
    nums_adult: { type: Number, required: true },
    nums_child: { type: Number, required: true },
    booking_date: { type: Date, required: true },
    status: { type: String, enum: ["Pending", "Confirmed", "Cancelled"], required: true },
    total_ammount: { type: Number, required: true },
    cancellation_deadline: { type: Date, required: true },
});

const Booking = mongoose.model<BookingType>("Booking", bookingSchema);
export default Booking; 