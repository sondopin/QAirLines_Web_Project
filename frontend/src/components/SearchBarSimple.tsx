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

export const SearchBarSimple: React.FC = () => {
  const navigate = useNavigate();
  const [searchForm, setSearchForm] =
    useState<searchFormType>(intialSearchForm);
  const [isRoundTrip, setIsRoundTrip] = useState(true);
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
      state: {search_query: searchForm, isReturn: 0},
    });
  };

  return (
    <div className="container mx-auto scale-[0.8] w-max">
      {/* Selection */}
      <div className="flex flex-row">
        {/* Form Section */}
        <section className="w-full pb-[10px] bg-gray-200 rounded-bl-[70px] rounded-br-[70px] shadow-lg border-b-[10px] border-[#223A60]">
          <div className="flex flex-row bg-gradient-to-r from-[#223A60] to-blue-700 px-[20px] items-center py-[10px]">
            <div className="text-[16px] font-medium italic text-white flex items-center">
              Explore everywhere you want with QAirline!
            </div>

            <div className="flex flex-row gap-[15px] text-[16px] font-bold text-white justify-center ml-auto items-center">
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
          </div>

          <form className="flex flex-col gap-[15px]" onSubmit={handleSubmit}>
            <div className="flex flex-row gap-[10px] items-center px-[30px]">
              {/* Departure Point */}
              <div className="w-full">
                <div className="flex flex-row gap-[10px] px-[5px] py-[5px] items-center">
                  <label className="text-[16px] text-[#223A60] font-bold">
                    Departure Point
                  </label>
                </div>
                <select
                  onChange={handleChange("ori_airport")}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 h-[50px]"
                >
                  {airport_list?.data.map((airport) => (
                    <option key={airport._id} value={airport._id}>
                      {airport.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Departure Date */}
              <div className="w-full">
                <div className="flex flex-row gap-[10px] px-[5px] py-[5px] items-center">
                  <label className="text-[16px] font-bold text-[#223A60]">
                    Departure Date
                  </label>
                </div>
                <input
                  type="date"
                  value={searchForm.departure_time}
                  onChange={handleChange("departure_time")}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 h-[50px]"
                  required
                />
              </div>

              {/* Destination Point */}
              <div className="w-full">
                <div className="flex flex-row gap-[10px] px-[5px] py-[5px] items-center">
                  <label className="text-[16px] font-bold text-[#223A60]">
                    Destination Point
                  </label>
                </div>
                <select
                  onChange={handleChange("des_airport")}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 h-[50px]"
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
                <div className="w-full">
                  <div className="flex flex-row gap-[10px] px-[5px] py-[5px] items-center">
                    <label className="text-[16px] font-bold text-[#223A60]">
                      Return date
                    </label>
                  </div>
                  <input
                    type="date"
                    value={searchForm.return_time}
                    onChange={handleChange("return_time")}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 h-[50px]"
                    required
                  />
                </div>
              )}

              {/* Economy Class Tickets */}
              <div className="md:col-span-2 w-full">
                <label className="block text-[16px] font-bold mb-2 text-[#223A60]">
                  Economy Tickets
                </label>
                <input
                  type="number"
                  value={searchForm.nums_eco}
                  onChange={handleChange("nums_eco")}
                  min={0}
                  placeholder="Choose Number Of Tickets"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 h-[50px]"
                />
              </div>

              {/* Business Class Tickets */}
              <div className="md:col-span-2 w-full">
                <label className="block text-[16px] font-bold mb-2 text-[#223A60]">
                  Business Tickets
                </label>
                <input
                  type="number"
                  value={searchForm.nums_busi}
                  onChange={handleChange("nums_busi")}
                  min={0}
                  placeholder="Choose Number Of Tickets"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 h-[50px]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center">
              <button
                type="submit"
                className="bg-[#223A60] rounded-[14px] px-[50px] py-[10px] text-[#FFFFFF] font-bold text-[16px] transition-transform duration-200 ease-in-out hover:scale-[1.05]"
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

export default SearchBarSimple;
