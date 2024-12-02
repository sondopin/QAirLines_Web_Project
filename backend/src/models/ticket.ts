import mongoose from "mongoose";
import { TicketType } from "./types";

// Ticket schema
const ticketSchema = new mongoose.Schema<TicketType>({
  booking_id: { type: String },
  seat_id: { type: String },
  dob: { type: Date },
  name: { type: String },
  nationality: { type: String },
  email: { type: String },
  phone: { type: String },
  passport: { type: String },
});

const Ticket = mongoose.model<TicketType>("Ticket", ticketSchema);
export default Ticket;
