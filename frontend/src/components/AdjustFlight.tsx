import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { updateFlight } from "../apis/admin.api";
import { useQueryClient } from "@tanstack/react-query";

interface AdjustFlightProps {
  oldDepartureDate: string;
  oldReturnDate: string | undefined;
  flightId: string;
  aircraftId: string;
  handleClose: () => void;
}

interface ScheduleChange {
  actual_departure: undefined | string;
  actual_arrival: undefined | string;
}

const AdjustFlight: React.FC<AdjustFlightProps> = ({
  oldDepartureDate,
  oldReturnDate,
  flightId,
  aircraftId,
  handleClose,
}) => {
  const [schedule, setSchedule] = useState<ScheduleChange>({
    actual_departure: undefined,
    actual_arrival: undefined,
  });

  const queryClient = useQueryClient();

  const handleChange =
    (name: keyof ScheduleChange) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setSchedule((prev) => ({ ...prev, [name]: e.target.value }));
    };

  const handleConfirm = async () => {
    try {
      await updateFlight(flightId, aircraftId, schedule);
      queryClient.invalidateQueries({
        queryKey: ["flights", aircraftId],
        exact: true,
      });
      handleClose();
      console.log("Flight updated");
    } catch (error) {
      console.error(error);
    }
  };

  const getMinDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <div className="flex md:flex-row flex-col items-center justify-between bg-[#FBFF00] bg-opacity-[20%] rounded-[14px] gap-[10px] md:mx-[75px] mx-[25px] px-[30px] py-[20px] hover:scale-[1.03] transform transition-transform duration-200 shadow-lg">
      <div className="flex flex-col gap-[10px]">
        <div className="flex  md:flex-row flex-col gap-[10px]">
          <div className="text-[16px] font-semibold">Departure Date:</div>
          <div className="italic text-[16px]">{oldDepartureDate}</div>
        </div>
        <div className="flex  md:flex-row flex-col gap-[20px]">
          <div className="text-[16px] font-semibold">Change to:</div>
          <div className="flex flex-row">
            <div className="bg-[#D9D9D9] bg-opacit-[50%] rounded-tl-[6px] rounded-bl-[6px] px-[10px] py-[5px]">
              🗓️
            </div>
            <input
              type="datetime-local"
              min={getMinDate()}
              value={schedule.actual_departure}
              onChange={handleChange("actual_departure")}
              className="bg-[#D9D9D9] bg-opacit-[50%] rounded-tr-[6px] rounded-br-[6px] px-[10px] py-[5px] text-[16px] md:w-full w-[50%]"
            />
          </div>
        </div>

        {oldReturnDate && (
          <>
            <div className="flex md:flex-row flex-col gap-[10px]">
              <div className="text-[16px] font-semibold">Arrival Date:</div>
              <div className="italic text-[16px]">{oldReturnDate}</div>
            </div>
            <div className="flex  md:flex-row flex-col gap-[20px]">
              <div className="text-[16px] font-semibold">Change to:</div>
              <div className="flex flex-row items-center">
                <div className="bg-[#D9D9D9] bg-opacit-[50%] rounded-tl-[6px] rounded-bl-[6px] px-[10px] py-[5px]">
                  🗓️
                </div>
                <input
                  type="datetime-local"
                  value={schedule.actual_arrival}
                  min={getMinDate()}
                  onChange={handleChange("actual_arrival")}
                  className="bg-[#D9D9D9] bg-opacit-[50%] rounded-tr-[6px] rounded-br-[6px] px-[10px] py-[5px] text-[16px] md:w-full w-[50%]"
                />
              </div>
            </div>
          </>
        )}
      </div>
      <img src="./QAirline_Logo.png" alt="Logo" className="self-center" />
      <div
        onClick={handleConfirm}
        className=" cursor-pointer flex flex-row gap-[10px] items-center bg-red-500 rounded-[20px] px-2 hover:bg-red-600"
      >
        <img
          src="./confirm.png"
          className="w-[25px] h-[25px]"
          alt="Adjust icon"
        />
        <button className=" p-3 text-white">Confirm</button>
      </div>
    </div>
  );
};

export default AdjustFlight;
