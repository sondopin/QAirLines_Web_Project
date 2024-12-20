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
  const { aircraftId, airplaneNumber } = useQueryForm();
  const airports = useGetAirports();

  const { data: flights } = useQuery({
    queryKey: ["flights", aircraftId],
    queryFn: () => getAllFlights({ aircraft_id: aircraftId }),
  });
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#F6FBFF] m-5 rounded-[20px]">
      <div className="fixed inset-0 -z-10 h-screen">
        <video
          src="./cloud_animation_2.mp4"
          loop
          autoPlay
          muted
          className="w-full h-full object-cover"
        ></video>
      </div>
      <img
        src="airplane_background.png"
        className="rounded-[20px]"
        alt="Background"
      />
      <div className="flex md:flex-row flex-col mt-[50px] px-[50px] gap-[20px] items-center">
        <div>
          <h1 className="text-[56px] font-bold">
            List Flights Using{" "}
            <span className="text-[56px] text-[#00A3FF] font-bold">
              {airplaneNumber}
            </span>
          </h1>
        </div>
        <div
          onClick={() => {
            navigate("/add-flight", {
              state: {
                aircraft_id: aircraftId,
                airplane_number: airplaneNumber,
              },
            });
          }}
          className="flex h-[80%] flex-row gap-[20px] justify-center items-center ml-auto transform transition-transform duration-200 hover:scale-[1.05] bg-[#223A60] bg-opacity-75 text-white p-5 rounded-[20px] hover:bg-opacity-100"
        >
          <img src="./add.png" className="w-[25px] h-[25px]" alt="Add icon" />
          <button>Add Flight</button>
        </div>
      </div>

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
