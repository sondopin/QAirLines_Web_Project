import React from "react";
import AirplaneCard from "../components/AirplaneCard";
import { useQuery } from "@tanstack/react-query";
import { getAirCrafts } from "../apis/admin.api";

const AirplaneManagement: React.FC = () => {
  const { data: aircrafts } = useQuery({
    queryKey: ["aircrafts"],
    queryFn: () => getAirCrafts(),
  });

  return (
    <div className="flex flex-col bg-[#F6FBFF]">
      <img src="./airplane_background.png" alt="Background" />
      <div className=" relative top-[-70px] flex flex-col gap-[150px] items-center mt-[20px]">
        <div className="flex flex-row gap-[150px]">
          {aircrafts?.data.map((aircraft, index) => (
            <AirplaneCard
              aircraftId={aircraft._id}
              key={index}
              airplaneNumber={aircraft.code}
              name={aircraft.name}
              manufacturer={aircraft.manufacturer}
              yearOfManufacture={aircraft.manufactured_year}
              model={aircraft.model}
              numberOfSeats={aircraft.nums_seat}
            />
          ))}
        </div>
        <div className="flex flex-row gap-[150px]"></div>
        <div className="flex flex-row gap-[150px]"></div>
      </div>
    </div>
  );
};

export default AirplaneManagement;
