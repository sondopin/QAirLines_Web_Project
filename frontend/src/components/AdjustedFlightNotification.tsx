import React from "react";

interface AdjustedFlightNotificationProps {
  oldDepartureDate: string;
  newDepartureDate: string;
  oldArrivalDate: string | undefined;
  newArrivalDate: string | undefined;
  reason: string;
}

const AdjustedFlightNotification: React.FC<AdjustedFlightNotificationProps> = ({
  oldDepartureDate,
  newDepartureDate,
  oldArrivalDate,
  newArrivalDate,
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
      {oldArrivalDate && (
        <div className="flex flex-col md:flex-row gap-[22px] items-center">
          <div>Adjusted Arrival Date:</div>
          <div className="font-semibold text-[#0066FF] italic">
            {oldArrivalDate}
          </div>
          <div className="scale-x-[2] text-[20px]">→</div>
          <div className="font-semibold text-[#0066FF] italic">
            {newArrivalDate}
          </div>
        </div>
      )}

      <div className="italic">
        If the adjusted schedule is not suitable for your demand, you can cancel
        it. Otherwise, you do not need to do anything.
      </div>
    </div>
  );
};

export default AdjustedFlightNotification;
