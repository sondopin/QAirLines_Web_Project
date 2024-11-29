import React, { useState } from "react";
import Ticket from "../components/Ticket";
import { Link } from "react-router-dom";
import SearchedFlightInfo from "../components/SearchedFlightInfo";
import FinalConfirmCancel from "./FinalConfirmCancel";

interface ConfirmCancelBookingProps {
  departureCityCode: string;
  departureCityName: string;
  destinationCityCode: string;
  destinationCityName: string;
  departureDate: string;
  departureTime: string;
  returnDate: string;
  returnTime: string;
  businessTickets: number;
  economyTickets: number;
  totalPrice: number;
}

const ConfirmCancelBooking: React.FC<ConfirmCancelBookingProps> = ({
  departureCityCode,
  departureCityName,
  destinationCityCode,
  destinationCityName,
  departureDate,
  departureTime,
  returnDate,
  returnTime,
  businessTickets,
  economyTickets,
  totalPrice,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancelClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-[83px] py-[43px] bg-[#F6FBFF]">
      <div className="sticky top-0">
        <SearchedFlightInfo
          departureCityCode={departureCityCode}
          departureCityName={departureCityName}
          destinationCityCode={destinationCityCode}
          destinationCityName={destinationCityName}
          departureDate={departureDate}
          departureTime={departureTime}
          returnDate={returnDate}
          returnTime={returnTime}
          businessTickets={businessTickets}
          economyTickets={economyTickets}
        />
      </div>
      <div className="flex flex-col gap-[70px] px-[50px]">
        <Ticket index={1} />
        <Ticket index={2} />
        <Ticket index={3} />
      </div>
      <div className="flex flex-col gap-[33px] px-[94px] py-[56px] items-end">
        <div className="text-[40px]">Total Price</div>
        <div className="font-bold text-[#FF0000] text-[48px]">
          {totalPrice} VND
        </div>
        <div className="text-[24px]">
          Total price for all passengers (including taxes, fees and discounts).
        </div>
        <button
          className="text-[#FF0000] font-semibold text-[32px] rounded-[8px] px-[32px] py-[12px] border-[2px] border-solid border-[#FF0000] bg-white transition-transform duration-200 ease-in-out hover:scale-[1.05] hover:bg-[#FF0000] hover:text-white"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <FinalConfirmCancel />
            <button
              className="mt-4 text-[#FF0000] font-semibold text-[20px] rounded-[8px] px-[16px] py-[8px] border-[2px] border-solid border-[#FF0000] bg-white transition-transform duration-200 ease-in-out hover:scale-[1.05] hover:bg-[#FF0000] hover:text-white"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmCancelBooking;
