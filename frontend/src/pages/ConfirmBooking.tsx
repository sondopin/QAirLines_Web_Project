import React from "react";
import { formatCurrency, formatDate, formatTime } from "../utils/utils";

interface ConfirmBookingProps {
  flight_depart_info: any;
  flight_return_info?: any;
  numberOfTickets: [number, number];
  onClose: () => void;
  onConfirm: () => void;
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
  flight_depart_info,
  flight_return_info,
  numberOfTickets,
  onClose,
  onConfirm,
}) => {
  const depart_departure_date = formatDate(flight_depart_info.actual_departure);
  const depart_depature_time = formatTime(flight_depart_info.actual_departure);
  const depart_arrival_date =  formatDate(flight_depart_info.actual_arrival);
  const depart_arrival_time = formatTime(flight_depart_info.actual_arrival);
  const depart_departure = flight_depart_info.ori_city;
  const depart_destination = flight_depart_info.des_city;

  let return_departure_date, return_depature_time, return_arrival_date, return_arrival_time, return_departure, return_destination;

  if (flight_return_info) {
    return_departure_date = formatDate(flight_return_info.actual_departure);
    return_depature_time = formatTime(flight_return_info.actual_departure);
    return_arrival_date =  formatDate(flight_return_info.actual_arrival);
    return_arrival_time = formatTime(flight_return_info.actual_arrival);
    return_departure = flight_return_info.ori_city;
    return_destination = flight_return_info.des_city;
  }

  return (
    <div className="flex flex-col gap-[17px] bg-[#D8EBFE] rounded-[14px] shadow-lg w-[730px] self-center px-[42px] py-[27px] scale-[0.85]">
      <h1 className="font-bold text-[#223A60] text-[40px] self-center">
        Your Ticket
      </h1>
      <h1 className="text-4xl">Departure Flight</h1>
      <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
        <div className="font-bold">Departure Place:</div>
        <div className="opacity-[60%]">{depart_departure}</div>
      </div>
      <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
        <div className="font-bold">Departure Date:</div>
        <div className="opacity-[60%]">
          {depart_depature_time + " " + depart_departure_date}
        </div>
      </div>
      <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
        <div className="font-bold">Destination:</div>
        <div className="opacity-[60%]">{depart_destination}</div>
      </div>
      <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
        <div className="font-bold">Arrival Date:</div>
        <div className="opacity-[60%]">{depart_arrival_time + " " + depart_arrival_date}</div>
      </div>
      <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
        <div className="font-bold">Plane Number:</div>
        <div className="opacity-[60%]">{flight_depart_info.number}</div>
      </div>

      {flight_return_info  ? (
        <>
          <h1 className="text-4xl">Return Flight</h1>
          <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
            <div className="font-bold">Departure Place:</div>
            <div className="opacity-[60%]">{return_departure}</div>
          </div>
          <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
            <div className="font-bold">Departure Date:</div>
            <div className="opacity-[60%]">
              {return_depature_time + " " + return_departure_date}
            </div>
          </div>
          <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
            <div className="font-bold">Destination:</div>
            <div className="opacity-[60%]">{return_destination}</div>
          </div>
          <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
            <div className="font-bold">Arrival Date:</div>
            <div className="opacity-[60%]">{return_arrival_time + " " + return_arrival_date}</div>
          </div>
          <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
            <div className="font-bold">Plane Number:</div>
            <div className="opacity-[60%]">{flight_return_info.number}</div>
          </div>
        </>
      ) : null}


      <div className="flex flex-row gap-[10px] w-full text-[20px] text-[#223A60] justify-start">
        <div className="font-bold">Number of Tickets:</div>
        <div className="opacity-[60%]">
          {numberOfTickets[0]} Business Tickets, {numberOfTickets[1]} Economy
          Tickets
        </div>
      </div>
      <div className="flex flex-row gap-[10px] w-full text-[20px] justify-start font-bold">
        <div className="text-[#223A60]">Total Price:</div>
        <div className="text-[#FF0000]">{formatCurrency(flight_depart_info.base_price + (flight_return_info ? flight_return_info.base_price : 0) * (numberOfTickets[0] * 1.5 + numberOfTickets[1]))}</div>
      </div>
      <div className="flex flex-row gap-[150px] w-full justify-center">
        <button
          onClick={() => onClose()}
          className="shadow-lg bg-[#FFFFFF] text-[20px] font-bold rounded-[8px] text-[#223A60] px-[60px] py-[5px] transform transition-transform duration-200 hover:scale-[1.05]"
        >
          Back
        </button>
        <button
          onClick={() => onConfirm()}
          className="shadow-lg bg-[#223A60] text-[20px] font-bold rounded-[8px] text-[#FFFFFF] px-[60px] py-[5px] transform transition-transform duration-200 hover:scale-[1.05]"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default ConfirmBooking;
