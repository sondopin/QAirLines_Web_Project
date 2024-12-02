import Hero from "../components/Hero";
import SearchResultCard from "../components/SearchResultCard";
import { useQuery } from "@tanstack/react-query";
import { getFlights } from "../apis/flight.api";
import { formatDate } from "../utils/utils";
import { useQueryForm } from "../hooks/useQueryForm";
import { Flight } from "../types/flight.type";
import { useState } from "react";
import { useGetAirports } from "../hooks/useGetAirports";

type SortType = {
  base_price?: "asc" | "desc";
  actual_departure?: "asc" | "desc";
};

const Search = () => {
  const search_query = useQueryForm();
  const [sort, setSort] = useState<SortType>({});

  const airports = useGetAirports();

  const departure_airport = airports[search_query?.ori_airport];

  const departure_time = formatDate(search_query?.departure_time);

  const arrival_airport = airports[search_query?.des_airport];

  const arrival_time = formatDate(search_query?.arrival_time);

  const { data: flights_query } = useQuery({
    queryKey: ["flights", search_query],
    queryFn: () => getFlights(search_query),
  });

  const flights_list = flights_query?.data?.map((flight: Flight) => {
    return {
      ...flight,
      ori_airport: departure_airport?.name as string,
      ori_city: departure_airport?.city as string,
      ori_code: departure_airport?.code as string,
      des_code: arrival_airport?.code as string,
      des_city: arrival_airport?.city as string,
      des_airport: arrival_airport?.name as string,
      nums_busi_book: search_query?.nums_busi,
      nums_eco_book: search_query?.nums_eco,
    };
  });

  for (const key in sort) {
    const sortOrder = sort[key as keyof SortType];
    flights_list?.sort((a: Flight, b: Flight) => {
      const A = a[key as keyof Flight];
      const B = b[key as keyof Flight];

      if (typeof A === "number" && typeof B === "number") {
        return sortOrder === "asc" ? A - B : B - A;
      } else if (typeof A === "string" && typeof B === "string") {
        return sortOrder === "asc" ? A.localeCompare(B) : B.localeCompare(A);
      } else if (A instanceof Date && B instanceof Date) {
        return sortOrder === "asc"
          ? A.getTime() - B.getTime()
          : B.getTime() - A.getTime();
      } else {
        console.warn("Unsupported data type for sorting:", A, B);
        return 0;
      }
    });
  }

  const handleSort = (type: keyof SortType) => {
    setSort({ [type]: sort[type] === "asc" ? "desc" : "asc" });
  };

  return (
    <div>
      <Hero>
        <section className="flex items-center justify-evenly p-6 w-full bg-white bg-opacity-90 rounded-3xl shadow-md font-sans">
          {/* Airport Information */}
          <div className="flex items-center space-x-4">
            {/* Departure Airport */}
            <div className="text-center">
              <h2 className="text-2xl font-bold">{departure_airport?.name}</h2>
              <p className="text-gray-600">{departure_airport?.city}</p>
            </div>

            {/* Divider */}
            <div className="h-8 w-[1px] bg-gray-300"></div>

            {/* Icon */}
            <div>
              <span className="text-2xl">⇆</span>
            </div>

            {/* Divider */}
            <div className="h-8 w-[1px] bg-gray-300"></div>

            {/* Arrival Airport */}
            <div className="text-center">
              <h2 className="text-2xl font-bold">{arrival_airport?.name}</h2>
              <p className="text-gray-600">{arrival_airport?.city}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-16 w-[1px] bg-gray-300"></div>

          {/* Dates Information */}
          <div className="text-center">
            <div>
              <h3 className="text-lg font-semibold">Departure Date</h3>
              <p className="text-gray-600">{departure_time}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Return Date</h3>
              <p className="text-gray-600">{arrival_time}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-16 w-[1px] bg-gray-300"></div>

          {/* Ticket Information */}
          <div className="text-center space-y-4">
            <div className="flex justify-between space-x-4">
              <span className="text-lg font-semibold">Business Tickets</span>
              <span className="text-lg">{search_query?.nums_busi}</span>
            </div>
            <div className="flex justify-between space-x-4">
              <span className="text-lg font-semibold">Economy Tickets</span>
              <span className="text-lg">{search_query?.nums_eco}</span>
            </div>
          </div>
        </section>
      </Hero>
      {/* End hero */}
      {/* End general information */}
      <section
        role="alert"
        aria-label="Important notice about pricing"
        className="flex-1 mt-5 shrink gap-2.5 self-stretch px-24 py-7 text-base font-bold tracking-wider leading-6 bg-blue-400 bg-opacity-20 text-slate-800 max-md:px-5 max-md:max-w-full"
      >
        Note: Prices below include taxes, fees
        <br />+{" "}
        <span className="text-sky-500 underline">Special Service Charges</span>
        <br />+{" "}
        <span className="text-sky-500 underline">
          Taxes, Fees, Charges & Surcharges
        </span>
        <br />
        The payment currency is displayed according to the selected
        "Country/Region", please check the currency carefully before paying.
      </section>
      {/* End note */}
      <h1 className="pt-10 text-5xl font-bold text-center text-black tracking-[3.12px] max-md:max-w-full max-md:text-4xl mb-10">
        <span className="leading-[61px]">Flights from </span>
        <span className="text-sky-500 leading-[61px]">
          {departure_airport?.city}
        </span>
        <span className="leading-[61px]"> to </span>
        <span className="text-sky-500 leading-[61px]">
          {arrival_airport?.city}
        </span>
      </h1>

      <div className="flex overflow-hidden flex-col text-black mt-5">
        <section className="flex flex-wrap gap-4 items-start px-16 py-4 w-full bg-gray-50 rounded-lg max-md:px-4">
          <p className="flex-1 text-sm italic text-gray-600 tracking-wide leading-6 min-w-[320px] max-md:max-w-full">
            ❗❗❗ Flights are displayed in the default order selected by
            QAirline.
            <br />
            Please select the feature (Sort) to change the display order as
            needed.
            <br />
            Price displayed is the lowest and can be varied from business class
            economy ticket classes.
          </p>

          {/* Button for Sorting by Time */}
          <button
            className="flex items-center gap-2 px-6 py-3 text-xl font-bold text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300 transition-transform transform hover:-translate-y-1 min-w-[233px]"
            onClick={() => handleSort("actual_departure")}
          >
            <img
              loading="lazy"
              src={
                sort.actual_departure === "asc"
                  ? "../../up-arrow.png"
                  : sort.actual_departure === "desc"
                  ? "../../down-arrow.png"
                  : "../../sort.png"
              }
              className="w-6 h-6 object-contain"
              alt="Sort by Time"
            />
            <span>Time</span>
          </button>

          {/* Button for Sorting by Price */}
          <button
            className="flex items-center gap-2 px-6 py-3 text-xl font-bold text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300 transition-transform transform hover:-translate-y-1 min-w-[233px]"
            onClick={() => handleSort("base_price")}
          >
            <img
              loading="lazy"
              src={
                sort.base_price === "asc"
                  ? "../../up-arrow.png"
                  : sort.base_price === "desc"
                  ? "../../down-arrow.png"
                  : "../../sort.png"
              }
              className="w-6 h-6 object-contain"
              alt="Sort by Price"
            />
            <span>Price</span>
          </button>
        </section>
        <section className="flex overflow-hidden flex-col px-16 py-16 w-full text-2xl tracking-widest max-md:px-5 max-md:max-w-full">
          {(flights_list ?? []).length > 0 ? (
            flights_list?.map((flight: Flight, index: number) => (
              <div
                key={index}
                className={index > 0 ? "mt-24 max-md:mt-10" : ""}
              >
                <SearchResultCard {...flight} />
              </div>
            ))
          ) : (
            <>Ko co</>
          )}
        </section>
      </div>
    </div>
  );
};

export default Search;
