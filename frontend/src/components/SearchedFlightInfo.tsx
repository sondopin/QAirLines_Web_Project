import React from "react";
import { formatDate, formatTime } from "../utils/utils";

interface SearchedFlightInfoProps {
  _id?: string;
  actual_departure: Date;
  actual_arrival: Date;
  ori_airport: string;
  ori_code: string;
  ori_city: string;
  des_airport: string;
  des_code: string;
  des_city: string;
  number: string;
  base_price?: number;
  nums_busi_seat_avail?: number;
  nums_eco_seat_avail?: number;
  nums_busi_book: number;
  nums_eco_book: number;
}

const SearchedFlightInfo: React.FC<SearchedFlightInfoProps> = ({
  actual_departure,
  actual_arrival,
  ori_code,
  des_code,
  ori_city,
  des_city,
  nums_busi_book,
  nums_eco_book,
}) => {
  const departure_date = formatDate(actual_departure);
  const depature_time = formatTime(actual_departure);
  const arrival_date = formatDate(actual_arrival);
  const arrival_time = formatTime(actual_arrival);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-evenly p-6 w-full bg-gray-200 bg-opacity-90 rounded-3xl shadow-md font-sans gap-6">
      {/* Airport Information */}
      <div className="flex items-center space-x-4">
        {/* Departure Airport */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">{ori_code}</h2>
          <p className="text-gray-600">{ori_city}</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-8 w-[1px] bg-gray-300"></div>

        {/* Icon */}
        <div>
          <span className="text-2xl">⇆</span>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-8 w-[1px] bg-gray-300"></div>

        {/* Arrival Airport */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">{des_code}</h2>
          <p className="text-gray-600">{des_city}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-16 w-[1px] bg-gray-300"></div>

      {/* Dates Information */}
      <div className="text-center">
        <div>
          <h3 className="text-lg font-semibold">Departure Date</h3>
          <p className="text-gray-600">
            {depature_time + " " + departure_date}
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Return Date</h3>
          <p className="text-gray-600">{arrival_time + " " + arrival_date}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-16 w-[1px] bg-gray-300"></div>

      {/* Ticket Information */}
      <div className="text-center space-y-4">
        <div className="flex justify-between space-x-4">
          <span className="text-lg font-semibold">Business Tickets</span>
          <span className="text-lg">{nums_busi_book}</span>
        </div>
        <div className="flex justify-between space-x-4">
          <span className="text-lg font-semibold">Economy Tickets</span>
          <span className="text-lg">{nums_eco_book}</span>
        </div>
      </div>
    </section>
  );
};

export default SearchedFlightInfo;
