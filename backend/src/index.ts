import express, { Request, Response } from 'express';   
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import User from './models/user';
import Plane from './models/plane';
import flightSchema from './models/flight';
import Ticket from './models/ticket';
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import cookie from 'cookie-parser';


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookie());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(7000, () => {    
  console.log(`Server is running on port 7000`);
});

