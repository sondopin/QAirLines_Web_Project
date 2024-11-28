import React from "react";
import { Link } from "react-router-dom";

interface BookingProps {
  bookingDate: string;
  status: string;
  departureCityCode: string;
  destinationCityCode: string;
  departureCityName: string;
  destinationCityName: string;
  departureDate: string;
  departureTime: string;
  returnDate: string;
  returnTime: string;
  businessTickets: number;
  economyTickets: number;
  totalPrice: number;
  cancelAvailableUntil: string;
}

/**
 * Booking component displays the details of a booking including the booking date, status,
 * departure and destination information, travel dates, ticket information, and total price.
 * It also provides an option to cancel the booking if it is within the allowed cancellation period.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.bookingDate - The date when the booking was made (dd/mm/yyy).
 * @param {string} props.status - The current status of the booking ("Up Coming", "Completed", "Cancelled").
 * @param {string} props.departureCityCode - The code of the departure city.
 * @param {string} props.destinationCityCode - The code of the destination city.
 * @param {string} props.departureCityName - The name of the departure city.
 * @param {string} props.destinationCityName - The name of the destination city.
 * @param {string} props.departureDate - The date of departure (date, dd/mm/yyy).
 * @param {string} props.departureTime - The time of departure (Time format 12 hours. Ex. "08:15 AM").
 * @param {string} props.returnDate - The date of return (date, dd/mm/yyy).
 * @param {string} props.returnTime - The time of return (Time format 12 hours. Ex. "08:15 AM").
 * @param {number} props.businessTickets - The number of business class tickets booked.
 * @param {number} props.economyTickets - The number of economy class tickets booked.
 * @param {number} props.totalPrice - The total price of the booking in VND.
 * @param {string} props.cancelAvailableUntil - The date until which the booking can be canceled.
 * @returns {JSX.Element} The Booking component.
 */

const Booking: React.FC<BookingProps> = ({
  bookingDate,
  status,
  departureCityCode,
  destinationCityCode,
  departureCityName,
  destinationCityName,
  departureDate,
  departureTime,
  returnDate,
  returnTime,
  businessTickets,
  economyTickets,
  totalPrice,
  cancelAvailableUntil,
}) => {
  return (
    <div className="flex flex-col w-full shadow-lg rounded-[20px] scale-[0.8] hover:scale-[0.82] transform transition-transform duration-200">
      {/* Booking date and Status */}
      <div
        className={`flex flex-col md:flex-row items-center rounded-tl-[20px] rounded-tr-[20px] gap-[20px] px-[28px] py-[28px] self-start w-auto text-[#FFFFFF] font-semibold text-[16px] ${
          status === "Up Coming" ? "bg-[#D8EBFE]" : "bg-[#D5D5D5]"
        }`}
      >
        <div className="bg-[#223A60] rounded-[6px] px-[17px] py-[5px] hover:scale-[1.05] transform transition-transform duration-200">
          Booking {bookingDate}
        </div>
        <div className="text-[#283841] text-[22px] hidden md:block">|</div>
        <div
          className={`rounded-[6px] px-[17px] py-[5px] hover:scale-[1.05] transform transition-transform duration-200 ${
            status === "Up Coming"
              ? "bg-[#223A60]"
              : status === "Completed"
              ? "bg-[#00A78E]"
              : "bg-[#FF0000]"
          }`}
        >
          {status}
        </div>
      </div>
      <div
        className={`flex flex-col w-full gap-[10px] px-[20px] md:px-[44px] py-[20px] rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] ${
          status === "Up Coming" ? "bg-[#D8EBFE]" : "bg-[#D5D5D5]"
        }`}
      >
        {/* Flight info container */}
        <div className="flex flex-col md:flex-row w-full gap-[20px] md:gap-[52px] px-[20px] md:px-[61px] py-[11px]">
          {/* Place */}
          <div className="flex flex-row gap-auto items-center w-full justify-center items-center">
            <div className="flex flex-col w-full items-center">
              <div className="font-bold text-[32px]">{departureCityCode}</div>
              <div className="font-semibold text-[20px]">
                {departureCityName}
              </div>
            </div>
            <img
              src="./arrow_switch_horizontal.png"
              alt=""
              className="w-[40px] h-[24px]"
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
          <div className="flex flex-col md:flex-row gap-[18px] w-full text-[20px] font-semibold justify-center items-center">
            <div className="flex flex-col gap-[10px] w-full items-center">
              <div>Departure Date</div>
              <div>{departureDate}</div>
              <div>{departureTime}</div>
            </div>
            <div className="flex flex-col gap-[10px] w-full items-center">
              <div>Return Date</div>
              <div>{returnDate}</div>
              <div>{returnTime}</div>
            </div>
          </div>
          <img
            src="./verticle_line.png"
            alt="Line"
            className="hidden md:block scale-[0.8]"
          />
          {/* Tickets */}
          <div className="flex flex-col w-full gap-[10px] justify-center items-center font-semibold text-[20px]">
            <div>Business Tickets: {businessTickets}</div>
            <div>Economy Tickets: {economyTickets}</div>
          </div>
        </div>
        {/* Total Price and Cancellation */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-[20px] md:px-[61px] py-[11px]">
          <div className="flex flex-row gap-[10px] w-full md:w-auto items-center md:items-start">
            <div className="font-semibold text-[20px] self-center">
              Total Price:
            </div>
            <div className="text-[32px] font-bold text-[#FF0000]">
              {totalPrice} VND
            </div>
          </div>
          <div
            className={`flex flex-col w-full md:w-auto items-center md:items-start text-[16px] gap-[10px] ${
              status === "Up Coming" ? "visible" : "hidden"
            }`}
          >
            You can only cancel this booking before {cancelAvailableUntil}
            <Link to="/confirm-cancel-booking">
              <button className="self-end bg-red-500 text-white px-[20px] py-[10px] rounded-[6px] mt-[10px] md:mt-0 hover:scale-[1.05] transform transition-transform duration-200 shadow-lg">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
