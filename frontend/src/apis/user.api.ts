import { Tickets } from "../types/flight.type";
import http from "../utils/http";

export const getMyBookings = () => http.get("/my-bookings/get");

export const getTickets = (data) =>
  http.post<Tickets>("/my-bookings/get-tickets", data);

export const cancelBooking = (data) =>
  http.delete(`/my-bookings/cancel/${data}`);
