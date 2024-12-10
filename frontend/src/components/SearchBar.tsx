import { useEffect, useState } from "react";
import { getAirports } from "../apis/flight.api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

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
      <div className="flex flex-col items-center text-base tracking-wider" style={{position: "relative"}}>
        {/* Header Section */}
        <header className="flex gap-5 justify-center items-center self-start p-7 font-medium text-white whitespace-nowrap rounded-t-3xl bg-slate-200 max-md:px-5">
          <div className="flex overflow-hidden gap-6 justify-center items-center self-stretch px-4 py-1.5 my-auto rounded-md bg-slate-700 min-h-[41px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00ac9e86fa260b6d84ff4fa8b950ea35a52fa989420022f2153547a5a928f465"
              alt="QAF Logo"
              className="w-6 h-6"
            />
            <span className="font-semibold">QAF0001</span>
          </div>
        </header>

        {/* Form Section */}
        <section className="w-full p-6 sm:p-8 bg-slate-200 rounded-3xl rounded-tl-none shadow-lg text-slate-800">
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
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <div className={`grid ${isRoundTrip ? "grid-cols-4" : "grid-cols-3"} gap-6 items-center`}>
              {/* Departure Point */}
              <div className="grid-cols-1">
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
              <div className="grid-cols-1">
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
              <div className="grid-cols-1">
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
              {isRoundTrip && (
                <div className="grid-cols-1">
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
            </div>
            

            <div className="grid grid-cols-4 gap-6">
              <div></div>
              {/* Business Class Tickets */}
              <div className="col-span-1">
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
              <div className="col-span-1">
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
              <div></div>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-slate-700 text-white rounded-md shadow-lg hover:bg-blue-700"
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
