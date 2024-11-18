import express, { Request, Response } from "express";

import flightController from "../controllers/flights";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.post("/search", flightController.searchFlights);
router.post("/make-booking", verifyToken, flightController.makeBooking);

export default router;
