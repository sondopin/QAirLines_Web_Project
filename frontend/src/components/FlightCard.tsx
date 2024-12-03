import React, { useState } from "react";
import { formatDate, formatTime } from "../utils/utils";
import AdjustFlight from "./AdjustFlight";

interface FlightCardProps {
  aircraftId: string;
  flightId: string;
  flightNumber: string;
  status: string;
  departureCityCode: string;
  destinationCityCode: string;
  departureCityName: string;
  destinationCityName: string;
  departureDate: Date;
  returnDate: Date;
  passengers: number;
}

/**
 * FlightCard component displays detailed information about a flight.
 *
 * @component
 * @param {FlightCardProps} props - The properties for the FlightCard component.
 * @param {string} props.flightNumber - The flight number.
 * @param {string} props.status - The status of the flight (e.g., "Up Coming").
 * @param {string} props.departureCityCode - The IATA code of the departure city.
 * @param {string} props.destinationCityCode - The IATA code of the destination city.
 * @param {string} props.departureCityName - The name of the departure city.
 * @param {string} props.destinationCityName - The name of the destination city.
 * @param {string} props.departureDate - The departure date of the flight.
 * @param {string} props.returnDate - The return date of the flight.
 * @param {number} props.passengers - The number of passengers.
 * @returns {JSX.Element} The rendered FlightCard component.
 */

const FlightCard: React.FC<FlightCardProps> = ({
  aircraftId,
  flightId,
  flightNumber,
  status,
  departureCityCode,
  destinationCityCode,
  departureCityName,
  destinationCityName,
  departureDate,
  returnDate,
  passengers,
}) => {
  const departure_date = formatDate(departureDate);
  const depature_time = formatTime(departureDate);
  const return_date = returnDate ? formatDate(returnDate) : undefined;
  const return_time = returnDate ? formatTime(returnDate) : undefined;

  const [isAdjust, setIsAdjust] = useState(false);

  return (
    <div>
      <div className="flex flex-col rounded-[20px] scale-[0.9] hover:scale-[0.93] transform transition-transform duration-200">
        {/* Flight number and status */}
        <div
          className={`flex flex-row gap-[10px] text-[#FFFFFF] text-[16px] font-medium rounded-tl-[20px] rounded-tr-[20px] px-[20px] py-[20px] items-center justify-center self-start ${
            status === "Up Coming" ? "bg-[#DFEEFE]" : "bg-[#CCCCCC]"
          }`}
        >
          <div className="bg-[#223A60] rounded-[6px] text-center px-[17px] py-[5px] hover:scale-[1.05] transform transition-transform duration-200">
            {flightNumber}
          </div>
          <div className="text-[#000000] scale-[1.2] opacity-[60%]">|</div>
          <div className="bg-[#223A60] rounded-[6px] text-center px-[17px] py-[5px] hover:scale-[1.05] transform transition-transform duration-200">
            {status}
          </div>
        </div>
        {/* Flight Info */}
        <div
          className={`flex flex-col md:flex-row rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] gap-[27px] px-[27px] py-[10px] ${
            status === "Up Coming" ? "bg-[#DFEEFE]" : "bg-[#CCCCCC]"
          }`}
        >
          {/* Place */}
          <div className="flex flex-col md:flex-row gap-auto w-full justify-center items-center max-w-[500px]">
            <div className="flex flex-col w-full items-center">
              <div className="font-bold text-[32px]">{departureCityCode}</div>
              <div className="font-semibold text-[20px]">
                {departureCityName}
              </div>
            </div>
            <img
              src="./arrow_switch_horizontal.png"
              alt=""
              className="w-[40px] h-[24px] my-[10px] md:my-0"
            />
            <div className="flex flex-col w-full items-center">
              <div className="font-bold text-[32px]">{destinationCityCode}</div>
              <div className="font-semibold text-[20px]">
                {destinationCityName}
              </div>
            </div>
          </div>
          <img
            src="./verticle_line.png"
            alt="Line"
            className="hidden md:block scale-[0.8]"
          />
          {/* Schedule */}
          <div className="flex flex-col justify-center gap-[5px] px-[10px] py-[10px] w-full max-w-[350px]">
            <div>Departure Date: {depature_time + " " + departure_date}</div>
            {return_date && (
              <div>Return Date: {return_time + " " + return_date}</div>
            )}
          </div>
          <img
            src="./verticle_line.png"
            alt="Line"
            className="hidden md:block scale-[0.8]"
          />
          <div className="flex flex-row gap-[10px] w-full max-w-[200px] items-center">
            <img
              src="./passenger_icon.png"
              alt="Passenger Icon"
              className="w-[24px] py-[24px]"
            />
            <div className="text-[16px]">{passengers} passengers</div>
          </div>
          <img
            src="./verticle_line.png"
            alt="Line"
            className="hidden md:block scale-[0.8]"
          />
          <button
            onClick={() => setIsAdjust(!isAdjust)}
            className="bg-[#223A60] rounded-[14px] text-[#FFFFFF] text-[16px] font-medium w-full md:w-[170px] h-[40px] self-center hover:scale-[1.05] transform transition-transform duration-200 hover:bg-[#5681C6]"
          >
            Adjust
          </button>
        </div>
      </div>
      {isAdjust && (
        <AdjustFlight
          aircraftId={aircraftId}
          flightId={flightId}
          oldDepartureDate={depature_time + " " + departure_date}
          oldReturnDate={
            return_date ? return_time + " " + return_date : undefined
          }
        />
      )}
    </div>
  );
};

export default FlightCard;
