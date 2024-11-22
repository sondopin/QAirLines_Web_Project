
 interface FlightCardProps {
    departureTime: string;
    departureCode: string;
    departureAirport: string;
    arrivalTime: string;
    arrivalCode: string;
    arrivalAirport: string;
    flightNumber: string;
    flightDuration: string;
    seatsAvailable: number;
    price: number;
  }
  



export function SearchResultCard({
  departureTime,
  departureCode,
  departureAirport,
  arrivalTime,
  arrivalCode,
  arrivalAirport,
  flightNumber,
  flightDuration,
  seatsAvailable,
  price
}: FlightCardProps) {
  return (
    <div className="flex flex-wrap gap-20 items-center w-full bg-blue-400 bg-opacity-20 rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-1.5 justify-center items-center self-stretch my-auto leading-none text-center basis-10 min-w-[320px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
            <div>{departureTime}</div>
            <div className="mt-6">{departureCode}</div>
            <div className="mt-6">{departureAirport}</div>
        </div>
        <div className="flex flex-col flex-1 shrink self-stretch my-auto text-sm tracking-wider leading-6 basis-0">
          <div>Direct flight</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22e3f78078444bf5e87a20a46f14d94c1212060e113a5fabe132d6bcdced02f4?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
            className="object-contain mt-2.5 w-44 aspect-[58.82]"
            alt="Flight path visualization"
          />
        </div>
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
            <div>{arrivalTime}</div>
            <div className="mt-6">{arrivalCode}</div>
            <div className="mt-6">{arrivalAirport}</div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cde8e1d4d67a499da977782f3a7f50e542ba7622b8c1496f516a5c8aed316e6?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
        className="object-contain shrink-0 self-stretch my-auto aspect-[0.04] w-[3px]"
        alt=""
      />
      {/* End general information */}
      <div className="flex flex-col flex-1 shrink justify-center self-stretch p-5 my-auto text-base tracking-wider basis-0 min-w-[320px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-2.5 items-center p-2.5 w-full max-md:max-w-full">
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3db00017a28f7d67a260c2432db14c06fe232ab32e3fb03b6c2c8a3cdb20e62?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt=""
            />
            <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
            Plane number: {flightNumber} Operated by QAirline
            </div>
        </div>
        <div className="flex overflow-hidden flex-wrap gap-2.5 items-center p-2.5 w-full max-md:max-w-full">
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/adcfc2be6780760f8b2928f5ee292f3689e7dc2398414a40b4f95dcf453afb77?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt=""
            />
            <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
            Flight time {flightDuration}
            </div>
        </div>
        <div className="overflow-hidden flex-wrap flex-1 shrink gap-2.5 self-stretch p-2.5 w-full max-md:max-w-full">
            {seatsAvailable} seats available
        </div>
      </div>
      {/*End detail information */}
      <div className="flex flex-1 overflow-hidden flex-col shrink justify-center self-stretch bg-yellow-50 rounded-r-[20px] basis-0 min-w-[320px] max-md:max-w-full">
        <div className="font-medium max-md:max-w-full">Price from only</div>
        <div className="mt-2.5 text-4xl font-bold italic text-center tracking-[2.16px] max-md:max-w-full">
          {price.toLocaleString()}
        </div>
        <div className="mt-2.5 text-right max-md:max-w-full">VND</div>
      </div>
    </div>
  );
}

export default SearchResultCard;