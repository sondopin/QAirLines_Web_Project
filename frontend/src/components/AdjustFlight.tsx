import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface AdjustFlightProps {
  oldDepartureDate: string;
  oldReturnDate: string;
}

const AdjustFlight: React.FC<AdjustFlightProps> = ({
  oldDepartureDate,
  oldReturnDate,
}) => {
  const [selectedDepartureDate, setDepartureDate] = useState<Date | null>(null);
  const [selectedReturnDate, setReturnDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col bg-[#FBFF00] bg-opacity-[20%] rounded-[14px] gap-[10px] mx-[75px] px-[30px] py-[20px] hover:scale-[1.03] transform transition-transform duration-200 shadow-lg">
      <div className="flex flex-row gap-[10px]">
        <div className="text-[16px] font-semibold">Departure Date:</div>
        <div className="italic text-[16px]">{oldDepartureDate}</div>
      </div>
      <div className="flex flex-row gap-[20px] items-center">
        <div className="text-[16px] font-semibold">Change to:</div>
        <div className="flex flex-row">
          <div className="bg-[#D9D9D9] bg-opacit-[50%] rounded-tl-[6px] rounded-bl-[6px] px-[10px] py-[5px]">
            🗓️
          </div>
          <DatePicker
            selected={selectedDepartureDate}
            onChange={(date: Date | null) => setDepartureDate(date)}
            dateFormat="dd-MM-yyy"
            placeholderText="Select a date"
            className="bg-[#D9D9D9] bg-opacit-[50%] rounded-tr-[6px] rounded-br-[6px] px-[10px] py-[5px] text-[16px]"
          />
        </div>
      </div>

      <div className="flex flex-row gap-[10px]">
        <div className="text-[16px] font-semibold">Return Date:</div>
        <div className="italic text-[16px]">{oldReturnDate}</div>
      </div>
      <div className="flex flex-row gap-[20px]">
        <div className="text-[16px] font-semibold">Change to:</div>
        <div className="flex flex-row items-center">
          <div className="bg-[#D9D9D9] bg-opacit-[50%] rounded-tl-[6px] rounded-bl-[6px] px-[10px] py-[5px]">
            🗓️
          </div>
          <DatePicker
            selected={selectedReturnDate}
            onChange={(date: Date | null) => setReturnDate(date)}
            dateFormat="dd-MM-yyy"
            placeholderText="Select a date"
            className="bg-[#D9D9D9] bg-opacit-[50%] rounded-tr-[6px] rounded-br-[6px] px-[10px] py-[5px] text-[16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AdjustFlight;
