import { useEffect, useState } from "react";
import { getAirports } from "../apis/flight.api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useGetAirports } from "../hooks/useGetAirports";

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-base tracking-wider">
        {/* Header Section */}
        <header className="flex justify-start items-center w-full p-5 text-white rounded-t-3xl shadow-lg">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-md">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/00ac9e86fa260b6d84ff4fa8b950ea35a52fa989420022f2153547a5a928f465"
                alt="QAF Logo"
                className="w-6 h-6"
              />
            </div>
            <span className="font-semibold">QAF0001</span>
          </div>
        </header>

        {/* Form Section */}
        <section className="w-full p-6 sm:p-8 mt-4 bg-gray-100 rounded-3xl shadow-lg">
          <form
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            onSubmit={handleSubmit}
          >
            {/* Departure Point */}
            <div>
              <label className="block text-sm font-bold mb-2">
                Departure Point
              </label>
              <select
                onChange={handleChange("ori_airport")}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                {airport_list?.data.map((airport) => (
                  <option key={airport._id} value={airport._id}>
                    {airport.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Departure Date */}
            <div>
              <label className="block text-sm font-bold mb-2">
                Departure Date
              </label>
              <input
                type="date"
                value={searchForm.departure_time}
                onChange={handleChange("departure_time")}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Destination Point */}
            <div>
              <label className="block text-sm font-bold mb-2">
                Destination Point
              </label>
              <select
                onChange={handleChange("des_airport")}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                {airport_list?.data.map((airport) => (
                  <option key={airport._id} value={airport._id}>
                    {airport.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Return Date */}
            <div>
              <label className="block text-sm font-bold mb-2">
                Return Date
              </label>
              <input
                type="date"
                value={searchForm.arrival_time}
                onChange={handleChange("arrival_time")}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Business Class Tickets */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold mb-2">
                Business Class Tickets
              </label>
              <input
                type="number"
                value={searchForm.nums_busi}
                onChange={handleChange("nums_busi")}
                min={0}
                placeholder="Choose Number Of Tickets"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Economy Class Tickets */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold mb-2">
                Economy Class Tickets
              </label>
              <input
                type="number"
                value={searchForm.nums_eco}
                onChange={handleChange("nums_eco")}
                min={0}
                placeholder="Choose Number Of Tickets"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700"
              >
                Search
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchBar;
