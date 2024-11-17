import mongoose from "mongoose";
import { FlightType } from "./types";
import { AircraftType } from "./types";
import seatSchema from "./seat";
import bookingSchema from "./booking";

// Flight schema
const flightSchema = new mongoose.Schema<FlightType>({
  aircraft_id: { type: String, required: true },
  number: { type: String, required: true, unique: true },
  ori_airport: { type: String, required: true },
  des_airport: { type: String, required: true },
  scheduled_departure: { type: Date, required: true },
  scheduled_arrival: { type: Date, required: true },
  actual_departure: { type: Date },
  actual_arrival: { type: Date },
  nums_busi_seat_avail: { type: Number, required: true },
  nums_eco_seat_avail: { type: Number, required: true },
  base_price: { type: Number, required: true },
  revenue: { type: Number, default: 0 },
});
const Flight = mongoose.model<FlightType>("Flight", flightSchema);

export default Flight;
