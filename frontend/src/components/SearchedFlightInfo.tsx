import React from "react";

interface SearchedFlightInfoProps {
  departureCityCode: string;
  destinationCityCode: string;
  departureCityName: string;
  destinationCityName: string;
  departureDate: string;
  departureTime?: string;
  returnDate: string;
  returnTime?: string;
  businessTickets: number;
  economyTickets: number;
}

const SearchedFlightInfo: React.FC<SearchedFlightInfoProps> = ({
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
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-[20px] md:gap-[52px] px-[20px] md:px-[61px] py-[11px] shadow-lg rounded-[20px] bg-[#EAF0F0]">
      {/* Place */}
      <div className="flex flex-row gap-auto items-center w-full justify-center items-center">
        <div className="flex flex-col w-full items-center">
          <div className="font-bold text-[32px]">{departureCityCode}</div>
          <div className="font-semibold text-[20px]">{departureCityName}</div>
        </div>
        <img
          src="./arrow_switch_horizontal.png"
          alt=""
          className="w-[40px] h-[24px]"
        />
        <div className="flex flex-col w-full items-center">
          <div className="font-bold text-[32px]">{destinationCityCode}</div>
          <div className="font-semibold text-[20px]">{destinationCityName}</div>
        </div>
      </div>
      <img
        src="./verticle_line.png"
        alt="Line"
        className="hidden md:block scale-[0.8]"
      />
      {/* Schedule */}
      <div className="flex flex-col md:flex-row gap-[18px] w-full text-[20px] font-semibold justify-center items-center">
        <div className="flex flex-col gap-[10px] w-full items-center">
          <div>Departure Date</div>
          <div>{departureDate}</div>
          <div>{departureTime}</div>
        </div>
        <div className="flex flex-col gap-[10px] w-full items-center">
          <div>Return Date</div>
          <div>{returnDate}</div>
          <div>{returnTime}</div>
        </div>
      </div>
      <img
        src="./verticle_line.png"
        alt="Line"
        className="hidden md:block scale-[0.8]"
      />
      {/* Tickets */}
      <div className="flex flex-col w-full gap-[10px] justify-center items-center font-semibold text-[20px]">
        <div>Business Tickets: {businessTickets}</div>
        <div>Economy Tickets: {economyTickets}</div>
      </div>
    </div>
  );
};

export default SearchedFlightInfo;
