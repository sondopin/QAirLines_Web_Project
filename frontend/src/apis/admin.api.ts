import { Aircrafts } from "../types/flight.type";
import http from "../utils/http";

export const getAirCrafts = async () =>
  http.get<Aircrafts>("/my-aircrafts/get-all");

export const getAllFlights = async ({ aircraft_id }: { aircraft_id: string }) =>
  http.get(`/my-aircrafts/${aircraft_id}/get-flights`);

export const updateFlight = async (
  flight_id: string,
  aircraft_id: string,
  data: object
) => http.put(`/my-aircrafts/${aircraft_id}/update-flight/${flight_id}`, data);
