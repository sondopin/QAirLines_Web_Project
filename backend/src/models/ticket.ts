import mongoose from "mongoose";
import { TicketType } from "./types";

// Ticket schema
const ticketSchema = new mongoose.Schema<TicketType>({
    booking_id: { type: String, required: true },
    seat_id: { type: String, required: true },
    passenger_name: { type: String, required: true },
    price: { type: Number, required: true },
  });

const Ticket = mongoose.model<TicketType>('Ticket', ticketSchema);
export default Ticket;