import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AirplaneCard from "../components/AirplaneCard";

interface AirplaneManagementProps {
  something?: string;
}

const AirplaneManagement: React.FC<AirplaneManagementProps> = ({
  something,
}) => {
  console.log(something);

  return (
    <div className="flex flex-col bg-[#F6FBFF]">
      <Header />
      <img src="./airplane_background.png" alt="Background" />
      <div className=" relative top-[-70px] flex flex-col gap-[150px] items-center mt-[20px]">
        <div className="flex flex-row gap-[150px]">
          <AirplaneCard
            airplaneNumber="QA01"
            name="Airplane QAirline 01"
            manufacturer="The Boeing Company"
            yearOfManufacture="August 2022"
            model="Boeing 787-10 Dreamliner"
            numberOfSeats={336}
          />
          <AirplaneCard
            airplaneNumber="QA01"
            name="Airplane QAirline 01"
            manufacturer="The Boeing Company"
            yearOfManufacture="August 2022"
            model="Boeing 787-10 Dreamliner"
            numberOfSeats={336}
          />
          <AirplaneCard
            airplaneNumber="QA01"
            name="Airplane QAirline 01"
            manufacturer="The Boeing Company"
            yearOfManufacture="August 2022"
            model="Boeing 787-10 Dreamliner"
            numberOfSeats={336}
          />
        </div>
        <div className="flex flex-row gap-[150px]">
          <AirplaneCard
            airplaneNumber="QA01"
            name="Airplane QAirline 01"
            manufacturer="The Boeing Company"
            yearOfManufacture="August 2022"
            model="Boeing 787-10 Dreamliner"
            numberOfSeats={336}
          />
          <AirplaneCard
            airplaneNumber="QA01"
            name="Airplane QAirline 01"
            manufacturer="The Boeing Company"
            yearOfManufacture="August 2022"
            model="Boeing 787-10 Dreamliner"
            numberOfSeats={336}
          />
          <AirplaneCard
            airplaneNumber="QA01"
            name="Airplane QAirline 01"
            manufacturer="The Boeing Company"
            yearOfManufacture="August 2022"
            model="Boeing 787-10 Dreamliner"
            numberOfSeats={336}
          />
        </div>
        <div className="flex flex-row gap-[150px]">
          <AirplaneCard
            airplaneNumber="QA01"
            name="Airplane QAirline 01"
            manufacturer="The Boeing Company"
            yearOfManufacture="August 2022"
            model="Boeing 787-10 Dreamliner"
            numberOfSeats={336}
          />
          <AirplaneCard
            airplaneNumber="QA01"
            name="Airplane QAirline 01"
            manufacturer="The Boeing Company"
            yearOfManufacture="August 2022"
            model="Boeing 787-10 Dreamliner"
            numberOfSeats={336}
          />
          <AirplaneCard
            airplaneNumber="QA01"
            name="Airplane QAirline 01"
            manufacturer="The Boeing Company"
            yearOfManufacture="August 2022"
            model="Boeing 787-10 Dreamliner"
            numberOfSeats={336}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AirplaneManagement;
