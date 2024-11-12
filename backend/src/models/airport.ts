import { count, time } from "console";
import mongoose from "mongoose";

// Airport schema
const airportSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    timezone: { type: String, required: true }
});
const Airport = mongoose.model("Airport", airportSchema);
export default Airport;