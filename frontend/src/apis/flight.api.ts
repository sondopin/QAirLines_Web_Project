import { AxiosRequestConfig } from "axios";
import { Airports, Flights } from "../types/flight.type";
import http from "../utils/http";

export const getAirports = async () =>
  http.get<Airports>("/flights/get-airports");

export const getFlights = async (
  data: AxiosRequestConfig<unknown> | undefined
) => http.post<Flights>("/flights/search", data);
