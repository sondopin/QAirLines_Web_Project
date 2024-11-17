import mongoose from "mongoose";

// Seat schema  
const seatSchema = new mongoose.Schema({
    flight_id: { type: String, required: true },
    seat_number: { type: String, required: true },
    seat_class: { type: String, required: true },
    is_available: { type: Boolean, required: true },
});
const Seat = mongoose.model("Seat", seatSchema);
export default Seat;