import Hero from "../components/Hero";
import SearchResultCard from "../components/SearchResultCard";


const flightData = [
    {
      departureTime: "05:00",
      departureCode: "HAN",
      departureAirport: "Noi bai",
      arrivalTime: "7:10",
      arrivalCode: "SGN",
      arrivalAirport: "Tan Son nhat",
      flightNumber: "QA 205",
      flightDuration: "2 hours 10 minutes",
      seatsAvailable: 22,
      price: 11250000
    },
    {
      departureTime: "05:00",
      departureCode: "HAN",
      departureAirport: "Noi bai",
      arrivalTime: "7:10",
      arrivalCode: "SGN",
      arrivalAirport: "Tan Son nhat",
      flightNumber: "QA 205",
      flightDuration: "2 hours 10 minutes",
      seatsAvailable: 22,
      price: 11250000
    },
    {
      departureTime: "05:00",
      departureCode: "HAN",
      departureAirport: "Noi bai",
      arrivalTime: "7:10",
      arrivalCode: "SGN",
      arrivalAirport: "Tan Son nhat",
      flightNumber: "QA 205",
      flightDuration: "2 hours 10 minutes",
      seatsAvailable: 22,
      price: 11250000
    },
    {
      departureTime: "05:00",
      departureCode: "HAN",
      departureAirport: "Noi bai",
      arrivalTime: "7:10",
      arrivalCode: "SGN",
      arrivalAirport: "Tan Son nhat",
      flightNumber: "QA 205",
      flightDuration: "2 hours 10 minutes",
      seatsAvailable: 22,
      price: 11250000
    },
    {
      departureTime: "05:00",
      departureCode: "HAN",
      departureAirport: "Noi bai",
      arrivalTime: "7:10",
      arrivalCode: "SGN",
      arrivalAirport: "Tan Son nhat",
      flightNumber: "QA 205",
      flightDuration: "2 hours 10 minutes",
      seatsAvailable: 22,
      price: 11250000
    }
  ];



const Search = () => {
    const locations = [
        { code: "HAN", city: "Ha Noi" },
        { code: "SGN", city: "Ho Chi Minh City" }
      ];
    
      const dates = ["Tue, 22/11/2024","Sat, 25/12/2024"];
    
      const tickets = [2,3];

return (
    <div>
        <Hero />
        <section className="flex flex-row text-center mx-auto mt-2 overflow-hidden flex-wrap gap-14 justify-center items-center py-7 w-full font-bold text-black rounded-3xl bg-slate-200 bg-opacity-90 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
            <div className="flex flex-row flex-wrap flex-1 shrink justify-between items-center self-stretch my-auto basis-0 max-w-[452px] min-w-[320px] max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 max-w-[200px] min-w-[200px]">
                    <h2 className="text-3xl tracking-widest">{locations[0].code}</h2>
                    <p className="mt-4 text-xl tracking-wider">{locations[0].city}</p>
                </div>
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/86c8eaeaaf632188c747159665b41f690effb9db85d1ba6debed68d88ac936c6?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
                alt=""
                className="object-contain shrink self-stretch aspect-[2.16] basis-0 w-[52px]"
                />
                <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 max-w-[200px] min-w-[200px]">
                    <h2 className="text-3xl tracking-widest">{locations[1].code}</h2>
                    <p className="mt-4 text-xl tracking-wider">{locations[1].city}</p>
                </div>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81e762ee6663a4186273daa6127fc4a9dbe66ef847afd8d79aa1a5fd7098b606?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-[0.04] w-[3px]"
            />
            <div className="flex flex-wrap flex-1 shrink gap-5 items-start justify-center self-stretch my-auto text-xl tracking-wider basis-0 max-w-[449px] min-w-[320px] max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink items-start basis-0 max-w-[209px] min-w-[209px]">
                    <h3>Departure Date</h3>
                    <p className="mt-2.5">{dates[0]}</p>
                </div>
                <div className="flex flex-col flex-1 shrink items-start basis-0 max-w-[209px] min-w-[209px]">
                    <h3>Return Date</h3>
                    <p className="mt-2.5">{dates[1]}</p>
                </div>
                
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81e762ee6663a4186273daa6127fc4a9dbe66ef847afd8d79aa1a5fd7098b606?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-[0.04] w-[3px]"
            />
            <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto text-xl tracking-wider basis-0 max-w-[369px] min-w-[369px]">
                <div className="flex items-start w-full">
                    <div className="flex-1 shrink basis-0">Business Tickets</div>
                    <div className="flex-1 shrink basis-0">{tickets[0]}</div>
                </div>
                <div className="flex items-start w-full">
                    <div className="flex-1 shrink basis-0">Economy Tickets</div>
                    <div className="flex-1 shrink basis-0">{tickets[1]}</div>
                </div>
            </div>
        </section>
        {/* End general information */}
        <section 
        role="alert" 
        aria-label="Important notice about pricing"
        className="flex-1 mt-5 shrink gap-2.5 self-stretch px-24 py-7 text-base font-bold tracking-wider leading-6 bg-blue-400 bg-opacity-20 text-slate-800 max-md:px-5 max-md:max-w-full"
        >
            Note: Prices below include taxes, fees
            <br />+ <span className="text-sky-500 underline">Special Service Charges</span>
            <br />+ <span className="text-sky-500 underline">Taxes, Fees, Charges & Surcharges</span>
            <br />
            The payment currency is displayed according to the selected "Country/Region", please check the currency carefully before paying.
        </section>
        {/* End note */}
        <h1 className="pt-10 text-5xl font-bold text-center text-black tracking-[3.12px] max-md:max-w-full max-md:text-4xl mb-10">
            <span className="leading-[61px]">Flights from </span>
            <span className="text-sky-500 leading-[61px]">{locations[0].city}</span>
            <span className="leading-[61px]"> to </span>
            <span className="text-sky-500 leading-[61px]">{locations[1].city}</span>
        </h1>

        <div className="flex overflow-hidden flex-col text-black mt-5">
            <section className="flex overflow-hidden flex-wrap gap-2.5 items-start px-44 py-2.5 w-full max-md:px-5 max-md:max-w-full">
                <p className="flex-1 shrink text-base tracking-wider leading-6 basis-12 min-w-[320px] max-md:max-w-full">
                ❗Flights are displayed in the default order selected by QAirline.
                Please select the feature (Sort) to change the display order as
                needed.
                <br />
                Price displayed is the lowest and can be varied from business class
                economy ticket classes.
                </p>
                <button className="flex flex-1 shrink gap-0.5 items-center px-6 text-4xl font-bold leading-none text-center whitespace-nowrap rounded-2xl basis-0 bg-zinc-300 max-w-[233px] min-h-[59px] min-w-[233px] tracking-[2.16px] max-md:px-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca1eec3470f3ad5337fde2e7d0f8cf792d49a1a34dcb69a9706146b15b4e0240?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
                    className="object-contain flex-1 shrink self-stretch my-auto aspect-[1.74] basis-0 w-[92px]"
                    alt=""
                />
                <span className="flex-1 shrink self-stretch my-auto basis-0">Sort</span>
                </button>
            </section>
            <section className="flex overflow-hidden flex-col px-16 py-16 w-full text-2xl tracking-widest max-md:px-5 max-md:max-w-full">
                {flightData.map((flight, index) => (
                <div key={index} className={index > 0 ? "mt-24 max-md:mt-10" : ""}>
                    <SearchResultCard {...flight} />
                </div>
                ))}
            </section>
        </div>
    
    </div>
);

};

export default Search;