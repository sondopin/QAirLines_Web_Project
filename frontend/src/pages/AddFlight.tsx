import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AddFlight: React.FC = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      <Header />

      <img
        src="./add_flight_background.png"
        alt="Background"
        className="absolute top-0 left-0 -z-10 h-[1080px] w-full object-cover"
      />

      {/* Form container */}

      <div className="flex flex-col rounded-[24px] shadow-lg w-[90%] max-w-[1000px] scale-[0.85] self-center w-full">
        {/* Flight number */}

        <div className="flex flex-row bg-[#F6FBFF] bg-opacity-[85%] rounded-tl-[24px] rounded-tr-[24px] items-center px-[33px] py-[24px] w-max">
          <div className="flex flex-row items-center justify-center gap-[22px] px-[17px] py-[5px] bg-[#223A60] rounded-[6px] transition-transform duration-200 hover:scale-[1.05]">
            <img src="./airplane_icon_white.png" alt="Airplane icon" />
            <div className="text-[#FFFFFF] text-[16px] font-bold">QAF0001</div>
          </div>
        </div>

        {/* Form part */}

        <div className="flex flex-col md:flex-row gap-[50px] md:gap-[100px] px-[20px] md:px-[50px] py-[50px] w-full bg-[#F6FBFF] bg-opacity-[85%] rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px]">
          {/* Left part */}

          <div className="flex flex-col gap-[20px] w-full">
            {/* Departure part */}

            <div className="text-[#223a60] text-2xl font-bold font-['DM Sans'] tracking-wider">
              Departure Information
            </div>

            {/* Departure place field */}

            <div className="flex flex-col gap-[10px] w-full">
              <div className="text-black text-lg font-medium font-['DM Sans'] tracking-wide">
                Departure Place
              </div>
              <div className="flex flex-row w-full bg-[#FFFFFF] rounded-[6px]">
                <div className="flex flex-row gap-[10px] px-[10px] py-[10px] w-full border-[0.5px] border-[#000000] border-opacity-[50%] rounded-tl-[6px] rounded-bl-[6px]">
                  <img src="./location_icon_black.png" alt="Location icon" />
                  <select
                    name="abc"
                    id="departure-place"
                    className="text-black text-base font-medium font-['DM Sans'] tracking-wide w-full focus:outline-none"
                  >
                    <option value=""></option>
                    <option value="Ha Noi">Ha Noi</option>
                    <option value="Ho Chi Minh City">Ho Chi Minh City</option>
                  </select>
                </div>

                <div className="flex flex-row text-[16px] w-[100px] md:w-[136px] font-medium text-center justify-center items-center border-[0.5px] border-[#000000] border-opacity-[50%] rounded-tr-[6px] rounded-br-[6px]">
                  HAN
                </div>
              </div>
            </div>

            {/* Departure Date field */}

            <div className="flex flex-col gap-[10px] w-full">
              <div className="text-black text-lg font-medium font-['DM Sans'] tracking-wide">
                Departure Date
              </div>
              <div className="flex flex-row w-full bg-[#FFFFFF] rounded-[6px]">
                <div className="flex flex-row gap-[10px] px-[10px] py-[10px] w-full border-[0.5px] border-[#000000] border-opacity-[50%] rounded-tl-[6px] rounded-bl-[6px]">
                  <img src="./calendar_icon_black.png" alt="Location icon" />
                  <input
                    type="date"
                    className="text-black text-base font-medium font-['DM Sans'] tracking-wide w-full focus:outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="08:15 AM"
                  className="flex flex-row text-[16px] w-[100px] md:w-[136px] font-medium text-center justify-center items-center border-[0.5px] border-[#000000] border-opacity-[50%] rounded-tr-[6px] rounded-br-[6px]"
                  maxLength={8}
                />
              </div>
            </div>

            {/* Departure Airport field */}

            <div className="flex flex-col gap-[10px] w-full">
              <div className="text-black text-lg font-medium font-['DM Sans'] tracking-wide">
                Departure Airport
              </div>
              <div className="flex flex-row w-full bg-[#FFFFFF] rounded-[6px]">
                <div className="flex flex-row gap-[10px] px-[10px] py-[10px] w-full border-[0.5px] border-[#000000] border-opacity-[50%] rounded-[6px]">
                  <img src="./airport_icon_black.png" alt="Location icon" />
                  <input
                    type="text"
                    placeholder="Noi Bai"
                    className="text-black text-base font-medium font-['DM Sans'] tracking-wide w-full focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Destination part */}

            <div className="text-[#223a60] text-2xl font-bold font-['DM Sans'] tracking-wider">
              Destination Information
            </div>

            {/* Destination place field */}

            <div className="flex flex-col gap-[10px] w-full">
              <div className="text-black text-lg font-medium font-['DM Sans'] tracking-wide">
                Destination Place
              </div>
              <div className="flex flex-row w-full bg-[#FFFFFF] rounded-[6px]">
                <div className="flex flex-row gap-[10px] px-[10px] py-[10px] w-full border-[0.5px] border-[#000000] border-opacity-[50%] rounded-tl-[6px] rounded-bl-[6px]">
                  <img src="./location_icon_black.png" alt="Location icon" />
                  <select
                    name="abc"
                    id="departure-place"
                    className="text-black text-base font-medium font-['DM Sans'] tracking-wide w-full focus:outline-none"
                  >
                    <option value=""></option>
                    <option value="Ha Noi">Ha Noi</option>
                    <option value="Ho Chi Minh City">Ho Chi Minh City</option>
                  </select>
                </div>

                <div className="flex flex-row text-[16px] w-[100px] md:w-[136px] font-medium text-center justify-center items-center border-[0.5px] border-[#000000] border-opacity-[50%] rounded-tr-[6px] rounded-br-[6px]">
                  SGN
                </div>
              </div>
            </div>

            {/* Destination Date field */}

            <div className="flex flex-col gap-[10px] w-full">
              <div className="text-black text-lg font-medium font-['DM Sans'] tracking-wide">
                Destination Date
              </div>
              <div className="flex flex-row w-full bg-[#FFFFFF] rounded-[6px]">
                <div className="flex flex-row gap-[10px] px-[10px] py-[10px] w-full border-[0.5px] border-[#000000] border-opacity-[50%] rounded-tl-[6px] rounded-bl-[6px]">
                  <img src="./calendar_icon_black.png" alt="Location icon" />
                  <input
                    type="date"
                    className="text-black text-base font-medium font-['DM Sans'] tracking-wide w-full focus:outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="05:45 PM"
                  className="flex flex-row text-[16px] w-[100px] md:w-[136px] font-medium text-center justify-center items-center border-[0.5px] border-[#000000] border-opacity-[50%] rounded-tr-[6px] rounded-br-[6px]"
                  maxLength={8}
                />
              </div>
            </div>

            {/* Destination Airport field */}

            <div className="flex flex-col gap-[10px] w-full">
              <div className="text-black text-lg font-medium font-['DM Sans'] tracking-wide">
                Destination Airport
              </div>
              <div className="flex flex-row w-full bg-[#FFFFFF] rounded-[6px]">
                <div className="flex flex-row gap-[10px] px-[10px] py-[10px] w-full border-[0.5px] border-[#000000] border-opacity-[50%] rounded-[6px]">
                  <img src="./airport_icon_black.png" alt="Location icon" />
                  <input
                    type="text"
                    placeholder="Tan Son Nhat"
                    className="text-black text-base font-medium font-['DM Sans'] tracking-wide w-full focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Part */}

          <div className="flex flex-col gap-[20px] w-full">
            <div className="text-[#223a60] text-2xl font-bold font-['DM Sans'] tracking-wider w-full">
              Tickets and Airplane
            </div>

            {/* Business Ticket Price field */}

            <div className="flex flex-col gap-[10px] w-full">
              <div className="text-black text-lg font-medium font-['DM Sans'] tracking-wide w-full">
                Business Ticket Price
              </div>
              <div className="flex flex-row w-full bg-[#FFFFFF] rounded-[6px]">
                <div className="flex flex-row gap-[10px] px-[10px] py-[10px] w-full border-[0.5px] border-[#000000] border-opacity-[50%] rounded-tl-[6px] rounded-bl-[6px]">
                  <img src="./price_icon_black.png" alt="Location icon" />
                  <input
                    type="text"
                    placeholder="2,500,000"
                    className="text-black text-base font-medium font-['DM Sans'] tracking-wide w-full focus:outline-none"
                  />
                </div>

                <div className="flex flex-row text-[16px] w-full max-w-[136px] font-medium text-center justify-center items-center border-[0.5px] border-[#000000] border-opacity-[50%] rounded-tr-[6px] rounded-br-[6px]">
                  VND
                </div>
              </div>
            </div>

            {/* Economy Ticket Price field */}

            <div className="flex flex-col gap-[10px] w-full">
              <div className="text-black text-lg font-medium font-['DM Sans'] tracking-wide w-full">
                Economy Ticket Price
              </div>
              <div className="flex flex-row w-full bg-[#FFFFFF] rounded-[6px]">
                <div className="flex flex-row gap-[10px] px-[10px] py-[10px] w-full border-[0.5px] border-[#000000] border-opacity-[50%] rounded-tl-[6px] rounded-bl-[6px]">
                  <img src="./calendar_icon_black.png" alt="Location icon" />
                  <input
                    type="number"
                    placeholder="1,200,000"
                    className="text-black text-base font-medium font-['DM Sans'] tracking-wide w-full focus:outline-none"
                  />
                </div>

                <div className="flex flex-row text-[16px] w-full max-w-[136px] font-medium text-center justify-center items-center border-[0.5px] border-[#000000] border-opacity-[50%] rounded-tr-[6px] rounded-br-[6px]">
                  VND
                </div>
              </div>
            </div>

            {/* Airplane Field */}

            <div className="flex flex-col gap-[10px] w-full">
              <div className="text-black text-lg font-medium font-['DM Sans'] tracking-wide w-full">
                Airplane
              </div>
              <div className="flex flex-row w-full bg-[#FFFFFF] rounded-[6px]">
                <div className="flex flex-row gap-[10px] px-[10px] py-[10px] w-full border-[0.5px] border-[#000000] border-opacity-[50%] rounded-[6px]">
                  <img src="./airplane_icon_black.png" alt="Location icon" />
                  <input
                    type="text"
                    placeholder="QA01"
                    className="text-black text-base font-medium font-['DM Sans'] tracking-wide w-full focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Number of Ticket Sold */}

            <div className="flex flex-col gap-[10px] w-full">
              <div className="text-black text-lg font-medium font-['DM Sans'] tracking-wide w-full">
                Number of Tickets Sold
              </div>

              {/* Business */}

              <div className="flex flex-row">
                <div className="flex flex-row gap-[10px] items-center justify-center w-full">
                  <div className="text-[16px] font-medium">Business:</div>
                  <input
                    type="number"
                    className="bg-[#FFFFFF] rounded-[6px] w-[65px] border-[#000000] border-[0.5px] border-opacity-[50%] pl-[10px] font-medium"
                  />
                </div>

                {/* Economy */}

                <div className="flex flex-row gap-[10px] items-center justify-center w-full">
                  <div className="text-[16px] font-medium">Economy:</div>
                  <input
                    type="number"
                    className="bg-[#FFFFFF] rounded-[6px] w-[65px] border-[#000000] border-[0.5px] border-opacity-[50%] pl-[10px] font-medium"
                  />
                </div>
              </div>
            </div>

            <button className="w-full bg-[#223A60] text-[18px] text-[#FFFFFF] font-bold px-[10px] py-[10px] rounded-[14px] shadow-lg transition-transform duration-200 hover:scale-[1.05] mt-[50px]">
              Add flight
            </button>

            <img
              src="./QAirline_Logo.png"
              alt="Logo"
              className="self-center mt-[60px]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddFlight;
