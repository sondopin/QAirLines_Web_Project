import React from "react";
import FlightCard from "../components/FlightCard";
import { useQueryForm } from "../hooks/useQueryForm";
import { useQuery } from "@tanstack/react-query";
import { getAllFlights } from "../apis/admin.api";
import { Flight } from "../types/flight.type";
import { useGetAirports } from "../hooks/useGetAirports";
import { useNavigate } from "react-router-dom";

interface ViewFlightProps {
  flightNumber: string;
}

const ViewFlight: React.FC<ViewFlightProps> = () => {
  const aircraft_id = useQueryForm();
  const airports = useGetAirports();

  const { data: flights } = useQuery({
    queryKey: ["flights", aircraft_id],
    queryFn: () => getAllFlights({ aircraft_id }),
  });
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#F6FBFF]">
      <img src="airplane_background.png" alt="Background" />
      <div className="flex flex-row mt-[50px] px-[50px] gap-[20px]">
        <h1 className="text-[56px] font-bold">List Flights Using</h1>
        <h1 className="text-[56px] text-[#00A3FF] font-bold"></h1>
      </div>
      <button
        onClick={() => {
          navigate("/add-flight", {
            state: { aircraft_id: aircraft_id },
          });
        }}
      >
        Add Flight
      </button>
      <hr className="ml-[50px] border-[3px] border-[#283841] opacity-[50%] w-[200px]" />
      <div className="flex flex-col gap-[50px] mt-[100px] mb-[100px]">
        {flights?.data.map((flight: Flight, index: number) => {
          const depature_airport = airports[flight.ori_airport];
          const destination_airport = airports[flight.des_airport];
          const status =
            new Date(flight.actual_departure).getTime() > new Date().getTime()
              ? "Up Coming"
              : "Completed";
          return (
            <FlightCard
              flightId={flight._id}
              aircraftId={flight.aircraft_id}
              key={index}
              flightNumber={flight.number}
              status={status}
              departureCityCode={depature_airport?.code}
              destinationCityCode={destination_airport?.code}
              departureCityName={depature_airport?.city}
              destinationCityName={destination_airport?.city}
              departureDate={flight.actual_departure}
              returnDate={flight.actual_arrival}
              passengers={
                flight.nums_busi_seat_avail + flight.nums_eco_seat_avail
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default ViewFlight;
