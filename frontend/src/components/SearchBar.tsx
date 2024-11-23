import { useEffect, useState } from "react";
import { getAirports } from "../apis/flight.api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface searchFormType {
  ori_airport: string;
  des_airport: string;
  departure_time: string;
  arrival_time: string;
  nums_busi: number;
  nums_eco: number;
}

const intialSearchForm: searchFormType = {
  ori_airport: "",
  des_airport: "",
  arrival_time: "",
  departure_time: "",
  nums_busi: 0,
  nums_eco: 0,
};

export const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [searchForm, setSearchForm] =
    useState<searchFormType>(intialSearchForm);

  const { data: airport_list } = useQuery({
    queryKey: ["airport"],
    queryFn: () => getAirports(),
  });

  useEffect(() => {
    setSearchForm((prev) => ({
      ...prev,
      ori_airport: airport_list !== undefined ? airport_list?.data[0]._id : "",
      des_airport: airport_list != undefined ? airport_list?.data[0]._id : "",
    }));
  }, [airport_list]);

  const handleChange =
    (name: keyof searchFormType) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setSearchForm((prev) => ({ ...prev, [name]: e.target.value }));
    };

  const handleSubmit = () => {
    navigate("/search", {
      state: searchForm,
    });
  };

  return (
    <div className="container mx-auto mt-[-140px]">
      <div
        className="flex flex-col text-base tracking-wider"
        style={{ position: "relative" }}
      >
        <header className="flex gap-5 justify-center items-center self-start p-7 font-medium text-white whitespace-nowrap rounded-t-3xl bg-slate-200 max-md:px-5">
          <div className="flex overflow-hidden gap-6 justify-center items-center self-stretch px-4 py-1.5 my-auto rounded-md bg-slate-700 min-h-[41px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00ac9e86fa260b6d84ff4fa8b950ea35a52fa989420022f2153547a5a928f465?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[31px]"
            />
            <span className="self-stretch my-auto">QAF0001</span>
          </div>
        </header>

        <section className="flex flex-col justify-center py-5 w-full text-center rounded-3xl rounded-tl-none bg-slate-200 shadow-[0px_5px_5px_rgba(0,0,0,0.25)] text-slate-800 max-md:max-w-full">
          <form className="flex flex-col" onSubmit={() => handleSubmit()}>
            <div className="flex flex-wrap gap-2.5 justify-center items-center w-full max-md:max-w-full">
              <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[280px]">
                <label className="gap-2.5 self-start font-bold">
                  Departure Point
                </label>
                <select
                  onChange={handleChange("ori_airport")}
                  aria-label="Departure Point"
                  className="self-stretch p-3 mt-2 max-w-full font-medium rounded-md bg-slate-800 bg-opacity-10 min-h-[45px] w-[280px]"
                >
                  {airport_list?.data.map((airport) => (
                    <option key={airport._id} value={airport._id}>
                      {airport.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-px h-full bg-gray-300"></div>
              <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[280px]">
                <label className="gap-2.5 self-start font-bold">
                  Departure Date
                </label>
                <input
                  type="date"
                  className="flex gap-10 justify-between items-center px-3 py-1 mt-2 max-w-full font-medium rounded-md bg-slate-800 bg-opacity-10 min-h-[45px] w-[280px]"
                  value={searchForm.departure_time}
                  onChange={handleChange("departure_time")}
                  required
                />
              </div>
              <div className="w-px h-full bg-gray-300"></div>
              <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[280px]">
                <label className="gap-2.5 self-start font-bold">
                  Destination Point
                </label>
                <select
                  onChange={handleChange("des_airport")}
                  aria-label="Destination Point"
                  className="self-stretch p-3 mt-2 max-w-full font-medium rounded-md bg-slate-800 bg-opacity-10 min-h-[45px] w-[280px]"
                >
                  {airport_list?.data.map((airport) => (
                    <option key={airport._id} value={airport._id}>
                      {airport.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-px h-full bg-gray-300"></div>
              <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[280px]">
                <label className="gap-2.5 self-start font-bold">
                  Return Date
                </label>
                <input
                  type="date"
                  className="flex gap-10 justify-between items-center px-3 py-1 mt-2 max-w-full font-medium rounded-md bg-slate-800 bg-opacity-10 min-h-[45px] w-[280px]"
                  value={searchForm.arrival_time}
                  onChange={handleChange("arrival_time")}
                  required
                />
              </div>
            </div>

            <div className="flex overflow-hidden flex-wrap gap-2 justify-center items-center mt-2 w-full max-md:max-w-full">
              <div className="flex gap-2 self-stretch py-px pl-2 my-auto rounded-md min-w-[240px] w-[458px] max-md:max-w-full">
                <label className="grow my-auto font-bold">
                  Business class tickets
                </label>
                <input
                  className="gap-2.5 self-stretch p-3 font-medium rounded-md bg-slate-800 bg-opacity-10"
                  placeholder="Number of Tickets"
                  type="number"
                  value={searchForm.nums_busi}
                  onChange={handleChange("nums_busi")}
                  min={0}
                />
              </div>
              <div className="w-px h-full bg-gray-300"></div>
              <div className="flex gap-2 self-stretch py-px pl-2 my-auto rounded-md min-w-[240px] w-[458px] max-md:max-w-full">
                <label className="grow my-auto font-bold">
                  Economy class tickets
                </label>
                <input
                  className="gap-2.5 self-stretch p-3 font-medium rounded-md bg-slate-800 bg-opacity-10"
                  placeholder="Number of Tickets"
                  type="number"
                  value={searchForm.nums_eco}
                  onChange={handleChange("nums_eco")}
                  min={0}
                />
              </div>
            </div>

            <button
              type="submit"
              className="overflow-hidden gap-2.5 self-center px-10 mt-2 max-w-full font-medium text-white whitespace-nowrap rounded-2xl bg-slate-700 min-h-[40px] shadow-[0px_5px_5px_rgba(0,0,0,0.25)] w-[156px] max-md:px-5"
            >
              Adjust
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchBar;
