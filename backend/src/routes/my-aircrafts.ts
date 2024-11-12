import express, { Request, Response } from "express";
import { AircraftType } from "../models/types";
import verifyToken from "../middleware/auth";
import { body } from "express-validator";
import myAircraftController from "../controllers/my-aircrafts";

const router = express.Router();


router.post("/add", myAircraftController.addAircrapt);
router.get("/get", myAircraftController.getAircrafts);
router.get("/get/:aircraft_id", myAircraftController.getAircraftById);
router.put("/update/:aircraft_id", myAircraftController.updateAircraft);
router.delete("/delete/:aircraft_id", myAircraftController.deleteAircraft);
router.post("/:aircraft_id/add-flight", myAircraftController.addFlight);
router.get("/:aircraft_id/get-flights", myAircraftController.getFlights);

export default router;  