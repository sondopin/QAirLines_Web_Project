import React from "react";
import { Link } from "react-router-dom";

interface ConfirmBookingProps {
  departurePlace: string;
  departureDate: string;
  destination: string;
  returnDate: string;
  numberOfTickets: number[];
  planeNumber: string;
  totalPrice: number;
}

/**
 * ConfirmBooking component displays the booking confirmation details.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.departurePlace - The place of departure.
 * @param {string} props.departureDate - The date of departure.
 * @param {string} props.destination - The destination place.
 * @param {string} props.returnDate - The date of return.
 * @param {Array<number>} props.numberOfTickets - The number of tickets, where the first element is the number of business tickets and the second element is the number of economy tickets.
 * @param {string} props.planeNumber - The plane number.
 * @param {string} props.totalPrice - The total price of the booking in VND.
 *
 * @returns {JSX.Element} The JSX element representing the booking confirmation details.
 */

const ConfirmBooking: React.FC<ConfirmBookingProps> = ({
  departurePlace,
  departureDate,
  destination,
  returnDate,
  numberOfTickets,
  planeNumber,
  totalPrice,
}) => {
  return (
    <div className="flex flex-col gap-[17px] bg-[#D8EBFE] rounded-[14px] shadow-lg w-[730px] self-center px-[42px] py-[27px]">
      <h1 className="font-bold text-[#223A60] text-[40px] self-center">
        Your Ticket
      </h1>
      <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
        <div className="font-bold">Departure Place:</div>
        <div className="opacity-[60%]">{departurePlace}</div>
      </div>
      <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
        <div className="font-bold">Departure Date:</div>
        <div className="opacity-[60%]">{departureDate}</div>
      </div>
      <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
        <div className="font-bold">Destination:</div>
        <div className="opacity-[60%]">{destination}</div>
      </div>
      <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
        <div className="font-bold">Return Date:</div>
        <div className="opacity-[60%]">{returnDate}</div>
      </div>
      <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
        <div className="font-bold">Number of Tickets:</div>
        <div className="opacity-[60%]">
          {numberOfTickets[0]} Business Tickets, {numberOfTickets[1]} Economy
          Tickets
        </div>
      </div>
      <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
        <div className="font-bold">Plane Number:</div>
        <div className="opacity-[60%]">{planeNumber}</div>
      </div>
      <div className="flex flex-row gap-[10px] w-full text-[20px] justify-start font-bold">
        <div className="text-[#223A60]">Total Price:</div>
        <div className="text-[#FF0000]">{totalPrice} VND</div>
      </div>
      <div className="flex flex-row gap-[150px] w-full justify-center">
        <Link to="/buy-tickets">
          <button className="shadow-lg bg-[#FFFFFF] text-[20px] font-bold rounded-[8px] text-[#223A60] px-[60px] py-[5px] transform transition-transform duration-200 hover:scale-[1.05]">
            Back
          </button>
        </Link>
        <Link to="/my-booking">
          <button className="shadow-lg bg-[#223A60] text-[20px] font-bold rounded-[8px] text-[#FFFFFF] px-[60px] py-[5px] transform transition-transform duration-200 hover:scale-[1.05]">
            Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmBooking;