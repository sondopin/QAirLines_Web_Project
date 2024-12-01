import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlightCard from "../components/FlightCard";
import AdjustFlight from "../components/AdjustFlight";

interface ViewFlightProps {
  flightNumber: string;
}

const ViewFlight: React.FC<ViewFlightProps> = ({ flightNumber }) => {
  return (
    <div className="flex flex-col bg-[#F6FBFF]">
      <Header />
      <img src="airplane_background.png" alt="Background" />
      <div className="flex flex-row mt-[50px] px-[50px] gap-[20px]">
        <h1 className="text-[56px] font-bold">List Flights Using</h1>
        <h1 className="text-[56px] text-[#00A3FF] font-bold">{flightNumber}</h1>
      </div>
      <hr className="ml-[50px] border-[3px] border-[#283841] opacity-[50%] w-[200px]" />
      <div className="flex flex-col gap-[50px] mt-[100px] mb-[100px]">
        <FlightCard
          flightNumber="QAF0001"
          status="Up Coming"
          departureCityCode="HAN"
          destinationCityCode="SGN"
          departureCityName="Ha Noi"
          destinationCityName="Ho Chi Minh City"
          departureDate="Tue, 22/11/2024, 10:30 AM"
          returnDate="Sat, 25/12/2024, 08:15 PM"
          passengers={250}
        />
        <AdjustFlight
          oldDepartureDate="Tue, 22/11/2024, 10:30 AM"
          oldReturnDate="Sat, 25/12/2024, 08:15 PM"
        />
        <FlightCard
          flightNumber="QAF0001"
          status="Up Coming"
          departureCityCode="HAN"
          destinationCityCode="SGN"
          departureCityName="Ha Noi"
          destinationCityName="Ho Chi Minh City"
          departureDate="Tue, 22/11/2024, 10:30 AM"
          returnDate="Sat, 25/12/2024, 08:15 PM"
          passengers={250}
        />
        <FlightCard
          flightNumber="QAF0001"
          status="Up Coming"
          departureCityCode="HAN"
          destinationCityCode="SGN"
          departureCityName="Ha Noi"
          destinationCityName="Ho Chi Minh City"
          departureDate="Tue, 22/11/2024, 10:30 AM"
          returnDate="Sat, 25/12/2024, 08:15 PM"
          passengers={250}
        />
        <FlightCard
          flightNumber="QAF0001"
          status="Up Coming"
          departureCityCode="HAN"
          destinationCityCode="SGN"
          departureCityName="Ha Noi"
          destinationCityName="Ho Chi Minh City"
          departureDate="Tue, 22/11/2024, 10:30 AM"
          returnDate="Sat, 25/12/2024, 08:15 PM"
          passengers={250}
        />
        <FlightCard
          flightNumber="QAF0001"
          status="Up Coming"
          departureCityCode="HAN"
          destinationCityCode="SGN"
          departureCityName="Ha Noi"
          destinationCityName="Ho Chi Minh City"
          departureDate="Tue, 22/11/2024, 10:30 AM"
          returnDate="Sat, 25/12/2024, 08:15 PM"
          passengers={250}
        />
        <FlightCard
          flightNumber="QAF0001"
          status="Completed"
          departureCityCode="HAN"
          destinationCityCode="SGN"
          departureCityName="Ha Noi"
          destinationCityName="Ho Chi Minh City"
          departureDate="Tue, 22/11/2024, 10:30 AM"
          returnDate="Sat, 25/12/2024, 08:15 PM"
          passengers={250}
        />
        <FlightCard
          flightNumber="QAF0001"
          status="Completed"
          departureCityCode="HAN"
          destinationCityCode="SGN"
          departureCityName="Ha Noi"
          destinationCityName="Ho Chi Minh City"
          departureDate="Tue, 22/11/2024, 10:30 AM"
          returnDate="Sat, 25/12/2024, 08:15 PM"
          passengers={250}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ViewFlight;
