import React from "react";
import AirplaneCard from "../components/AirplaneCard";
import { useQuery } from "@tanstack/react-query";
import { getAirCrafts } from "../apis/admin.api";
import { useNavigate } from "react-router-dom";

const AirplaneManagement: React.FC = () => {
  const { data: aircrafts } = useQuery({
    queryKey: ["aircrafts"],
    queryFn: () => getAirCrafts(),
  });

  const navigate = useNavigate();
  const aircraft_list = [];
  if (aircrafts) {
    for (let i = 0; i < aircrafts.data.length; i += 3) {
      aircraft_list.push(aircrafts.data.slice(i, i + 3));
    }
  }

  console.log(aircraft_list);

  return (
    <div className="flex flex-col bg-[#F6FBFF]">
      <div className="relative flex justify-center">
        <img src="./airplane_background.png" alt="Background" />
        <div
          onClick={() => {
            navigate("/add-airplane");
          }}
          className="flex flex-row cursor-pointer absolute top-10 right-3 transform transition-transform duration-200 hover:scale-[1.05] -translate-y-1/2 bg-[#223A60] bg-opacity-75 text-white p-5 rounded-[20px] hover:bg-opacity-100"
        >
          <img src="./add.png" className="w-[25px] h-[25px]" alt="Add icon" />
          <div className="ml-2">Add new airplane</div>
        </div>
      </div>
      <div className=" relative top-[-70px] flex flex-col gap-[150px] items-center mt-[20px]">
        {aircraft_list.map((chunk, rowIndex) => (
          <div className="flex md:flex-row flex-col gap-[150px]" key={rowIndex}>
            {chunk.map((aircraft) => (
              <AirplaneCard
                key={aircraft._id} // Sử dụng _id làm key thay vì index
                aircraftId={aircraft._id}
                airplaneNumber={aircraft.code}
                name={aircraft.name}
                manufacturer={aircraft.manufacturer}
                yearOfManufacture={aircraft.manufactured_year}
                model={aircraft.model}
                numberOfSeats={aircraft.nums_seat}
              />
            ))}
          </div>
        ))}
        <div className="flex flex-row gap-[150px]"></div>
      </div>
    </div>
  );
};

export default AirplaneManagement;
