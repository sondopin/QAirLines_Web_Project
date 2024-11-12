import mongoose from "mongoose";
import { AircraftType } from "./types";

// Aircraft schema
const AircraftSchema = new mongoose.Schema<AircraftType>({
  user_id: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  manufacturer: { type: String, required: true },
  manufactured_year: { type: Number, required: true },
  model: { type: String, required: true },
  nums_seat: { type: Number, required: true },
  total_revenue: { type: Number ,default: 0},
  last_updated: { type: Date, default: Date.now },
});

const Aircraft = mongoose.model<AircraftType>("Aircraft", AircraftSchema);
export default Aircraft;   
