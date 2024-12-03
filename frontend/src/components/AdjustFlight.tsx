import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { updateFlight } from "../apis/admin.api";
import { useQueryClient } from "@tanstack/react-query";

interface AdjustFlightProps {
  oldDepartureDate: string;
  oldReturnDate: string;
  flightId: string;
  aircraftId: string;
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
      console.log("Flight updated");
    } catch (error) {
      console.error(error);
    }
  };

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
          <input
            type="datetime-local"
            value={schedule.actual_departure}
            onChange={handleChange("actual_departure")}
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
          <input
            type="datetime-local"
            value={schedule.actual_arrival}
            onChange={handleChange("actual_arrival")}
            className="bg-[#D9D9D9] bg-opacit-[50%] rounded-tr-[6px] rounded-br-[6px] px-[10px] py-[5px] text-[16px]"
          />
        </div>
      </div>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default AdjustFlight;
