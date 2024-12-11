import { useEffect, useState } from "react";
import { getAirports } from "../apis/flight.api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Airport } from "../types/flight.type";

interface searchFormType {
  ori_airport: string;
  des_airport: string;
  departure_time: string;
  return_time: string;
  nums_busi: number;
  nums_eco: number;
}

const intialSearchForm: searchFormType = {
  ori_airport: "",
  des_airport: "",
  return_time: "",
  departure_time: "",
  nums_busi: 0,
  nums_eco: 0,
};

export const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [searchForm, setSearchForm] =
    useState<searchFormType>(intialSearchForm);
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [filteredAirports, setFilteredAirports] = useState<Airport[]>([]);
  const [showSuggestions, setShowSuggestions] = useState({
    ori_airport: false,
    des_airport: false,
  });
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

  const airports: { [key: string]: Airport } = {};
  if (airport_list) {
    for (const airport of airport_list.data) {
      airports[airport._id] = airport;
    }
  }

  const handleChange =
    (name: keyof searchFormType) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setSearchForm((prev) => ({ ...prev, [name]: e.target.value }));
      if (e.target.value.trim() !== "") {
        const filtered = airport_list?.data.filter((airport: Airport) =>
          airport.city.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredAirports(filtered || []);
        setShowSuggestions((prev) => ({ ...prev, [name]: true }));
      } else {
        setShowSuggestions((prev) => ({ ...prev, [name]: false }));
      }
    };

  const handleSelectSuggestion = (
    name: keyof searchFormType,
    airport: string
  ) => {
    setSearchForm((prev) => ({ ...prev, [name]: airport }));
    setShowSuggestions((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = () => {
    navigate("/search", {
      state: {search_query: searchForm, isReturn: 0},
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
          <div className="mb-8 flex w-[300px] justify-between">
            <div>
              <input
                type="radio"
                name="way"
                checked={!isRoundTrip}
                onChange={() => setIsRoundTrip(!isRoundTrip)}
              />{" "}
              One-Way
            </div>
            <div>
              <input
                type="radio"
                name="way"
                checked={isRoundTrip}
                onChange={() => setIsRoundTrip(!isRoundTrip)}
              />{" "}
              Round-Trip
            </div>
          </div>
          <form
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            onSubmit={handleSubmit}
          >
            {/* Departure Point */}
            <div className="relative">
              <label className="block text-sm font-bold mb-2">
                Departure Point
              </label>
              <input
                type="text"
                value={airports[searchForm.ori_airport]?.name}
                onChange={handleChange("ori_airport")}
                placeholder="Enter departure point..."
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {showSuggestions.ori_airport && (
                <ul className="absolute z-10 bg-white border rounded-md shadow-lg w-full max-h-40 overflow-y-auto">
                  {filteredAirports.map((airport) => (
                    <li
                      key={airport._id}
                      className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                      onClick={() =>
                        handleSelectSuggestion("ori_airport", airport._id)
                      }
                    >
                      {airport.name + " - " + airport.city}
                    </li>
                  ))}
                </ul>
              )}
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
            <div className="relative">
              <label className="block text-sm font-bold mb-2">
                Destination Point
              </label>
              <input
                type="text"
                value={airports[searchForm.des_airport]?.name}
                onChange={handleChange("des_airport")}
                placeholder="Enter destination point..."
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {showSuggestions.des_airport && (
                <ul className="absolute z-10 bg-white border rounded-md shadow-lg w-full max-h-40 overflow-y-auto">
                  {filteredAirports.map((airport) => (
                    <li
                      key={airport._id}
                      className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                      onClick={() =>
                        handleSelectSuggestion("des_airport", airport._id)
                      }
                    >
                      {airport.name + " - " + airport.city}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Return Date */}
            {isRoundTrip && (
              <div>
                <label className="block text-sm font-bold mb-2">
                  Return Date
                </label>
                <input
                  type="date"
                  value={searchForm.return_time}
                  onChange={handleChange("return_time")}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}

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