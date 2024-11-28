import React from "react";

interface AdjustedFlightNotificationProps {
  oldDepartureDate: string;
  newDepartureDate: string;
  oldReturnDate: string;
  newReturnDate: string;
  reason: string;
}

const AdjustedFlightNotification: React.FC<AdjustedFlightNotificationProps> = ({
  oldDepartureDate,
  newDepartureDate,
  oldReturnDate,
  newReturnDate,
  reason,
}) => {
  return (
    <div className="flex flex-col gap-[5px] py-[2px] text-[16px]">
      <div>Schedule for this flight has been changed by the admin!</div>
      <div>Reason: {reason}</div>
      <div className="flex flex-col md:flex-row gap-[22px] items-center">
        <div>Adjusted Departure Date:</div>
        <div className="font-semibold text-[#0066FF] italic">
          {oldDepartureDate}
        </div>
        <div className="scale-x-[2] text-[20px]">→</div>
        <div className="font-semibold text-[#0066FF] italic">
          {newDepartureDate}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[22px] items-center">
        <div>Adjusted Return Date:</div>
        <div className="font-semibold text-[#0066FF] italic">
          {oldReturnDate}
        </div>
        <div className="scale-x-[2] text-[20px]">→</div>
        <div className="font-semibold text-[#0066FF] italic">
          {newReturnDate}
        </div>
      </div>
      <div className="italic">
        If the adjusted schedule is not suitable for your demand, you can cancel
        it. Otherwise, you do not need to do anything.
      </div>
    </div>
  );
};

export default AdjustedFlightNotification;
