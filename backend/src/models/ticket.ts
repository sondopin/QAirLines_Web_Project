import mongoose from "mongoose";
import { TicketType } from "./types";

// Ticket schema
const ticketSchema = new mongoose.Schema<TicketType>({
    id_user: { type: String, required: true },
    id_flight: { type: String, required: true },
    idx_seat: { type: Number, required: true },
    price: { type: Number, required: true },
  });

const Ticket = mongoose.model<TicketType>('Ticket', ticketSchema);
export default Ticket;