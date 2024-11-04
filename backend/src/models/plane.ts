import mongoose from "mongoose";
import { PlaneType } from "./types";
import flightSchema from "./flight";

// Plane schema
const planeSchema = new mongoose.Schema<PlaneType>({
    name: { type: String, required: true },
    type: { type: Number, required: true },
    nums_seat: { type: Number, required: true },
    total_revenue: { type: Number },
    flights: [flightSchema],
  });

const Plane = mongoose.model<PlaneType>("Plane", planeSchema);
export default Plane;   
