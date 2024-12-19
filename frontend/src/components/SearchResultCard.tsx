import { useNavigate } from "react-router-dom";
import { formatTime, getTimeDifference } from "../utils/utils";
interface SearchResultCardProps {
  _id: string;
  actual_departure: Date;
  actual_arrival: Date;
  ori_airport: string;
  ori_code: string;
  ori_city: string;
  des_airport: string;
  des_code: string;
  des_city: string;
  number: string;
  base_price: number;
  nums_busi_seat_avail: number;
  nums_eco_seat_avail: number;
  nums_busi_book: number;
  nums_eco_book: number;
  onClick?: () => void;
}

const SearchResultCard = ({
  actual_departure,
  actual_arrival,
  ori_airport,
  des_airport,
  number,
  base_price,
  nums_busi_seat_avail,
  nums_eco_seat_avail,
  onClick
}: SearchResultCardProps) => {


  return (
    <div className="flex flex-wrap gap-6 items-center bg-blue-400 bg-opacity-20 rounded-xl shadow-md p-4 max-w-full transition-transform duration-300 hover:scale-105">
      {/* General Information */}
      <div className="flex flex-1 flex-wrap gap-4 items-center text-center min-w-[320px] max-md:max-w-full">
        {/* Departure Info */}
        <div className="flex flex-col flex-1">
          <div className="text-lg font-medium">
            {formatTime(actual_departure)}
          </div>
          <div className="mt-2 text-sm text-gray-600">{ori_airport}</div>
        </div>

        {/* Flight Info */}
        <div className="flex flex-col flex-1 text-sm text-gray-700">
          <div>Direct Flight</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22e3f78078444bf5e87a20a46f14d94c1212060e113a5fabe132d6bcdced02f4"
            alt="Flight path visualization"
            className="object-contain mt-2 w-32 mx-auto"
          />
        </div>

        {/* Arrival Info */}
        <div className="flex flex-col flex-1">
          <div className="text-lg font-medium">
            {actual_arrival ? formatTime(actual_arrival) : ""}
          </div>
          <div className="mt-2 text-sm text-gray-600">{des_airport}</div>
        </div>
      </div>

      {/* Separator */}
      <div className="w-[2px] h-auto bg-gray-300"></div>

      {/* Flight Details */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Plane Info */}
        <div className="flex items-center gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3db00017a28f7d67a260c2432db14c06fe232ab32e3fb03b6c2c8a3cdb20e62"
            alt="Plane Icon"
            className="w-6"
          />
          <span className="text-sm">
            Plane number: {number} Operated by QAirline
          </span>
        </div>

        {/* Flight Time */}
        <div className="flex items-center gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/adcfc2be6780760f8b2928f5ee292f3689e7dc2398414a40b4f95dcf453afb77"
            alt="Clock Icon"
            className="w-6"
          />
          <span className="text-sm">Flight time: {getTimeDifference(actual_departure, actual_arrival)}</span>
        </div>

        {/* Seat Availability */}
        <div className="text-sm text-gray-700">
          {nums_busi_seat_avail} business seats available and{" "}
          {nums_eco_seat_avail} economy seats available
        </div>
      </div>

      {/* Price Section */}

      <div className="flex flex-1 flex-col justify-between items-center">
        {/* Phần giá */}
        <div className="bg-yellow-50 rounded-xl p-4 text-center min-w-[320px]">
          <div className="text-sm font-medium">Price from only</div>
          <div className="mt-2 text-3xl font-bold italic text-blue-400">
            {base_price}
          </div>
          <div className="text-gray-500">VND</div>
        </div>
        {/* Nút Book now */}
        <div className="mt-4">
          <button
            className="bg-red-500 text-white rounded-full px-6 py-3 hover:bg-red-600 transition-all shadow-md"
            onClick= {onClick}
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
