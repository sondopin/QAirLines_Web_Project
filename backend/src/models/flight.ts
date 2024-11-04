import mongoose from "mongoose";
import { FlightType } from "./types";
import { PlaneType } from "./types";    

// Flight schema
const flightSchema = new mongoose.Schema<FlightType>({
    time_start: { type: Number, required: true },
    time_end: { type: Number, required: true },
    departure: { type: String, required: true },
    destination: { type: String, required: true },
    revenue: { type: Number },
    nums_seat_avail: { type: Number, required: true },
  });
const Flight = mongoose.model<FlightType>("Flight", flightSchema);

export default flightSchema;