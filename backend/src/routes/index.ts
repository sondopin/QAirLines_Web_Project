import userRoutes from './users';
import authRoutes from './auth';
import myAircraftRoutes from './my-aircrafts';
import { Application } from 'express';
import verifyToken from '../middleware/auth';

const router = (app: Application) => {
    app.use("/auth", authRoutes);
    app.use("/users", userRoutes);
    app.use("/my-aircrafts",verifyToken, myAircraftRoutes);
    app.use("/flights", myAircraftRoutes);
    app.use("/my-bookings",verifyToken, myAircraftRoutes);
}

export default router;