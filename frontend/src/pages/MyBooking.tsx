import React, { useEffect, useState } from "react";
import Booking from "../components/Booking";
import { useQuery } from "@tanstack/react-query";
import { clearNotificationBooking, getMyBookings } from "../apis/user.api";
import { useGetAirports } from "../hooks/useGetAirports";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { Bookings } from "../types/flight.type";
import { Pagination } from "../components/Pagination";

interface MyBookingProps {
  something?: string;
}

/**
 * MyBooking component displays a list of bookings with their details.
 *
 * @component
 * @param {MyBookingProps} props - The properties for the MyBooking component.
 * @param {any} props.something - A prop for demonstration purposes.
 *
 * @example
 * <MyBooking something={value} />
 *
 * @arrivals {JSX.Element} The rendered MyBooking component.
 */

const MyBooking: React.FC<MyBookingProps> = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const airports = useGetAirports();
  const booking_list: Bookings = [];
  const LIMIT_ITEMS = 5;
  let total_page = 1;
  const [page, setPage] = React.useState(1);
  const [bookingOnPage, setBookingOnPage] = React.useState<Bookings>([]);
  useEffect(() => {
    const clearNotification = async () => {
      await clearNotificationBooking();
    };
    clearNotification();
  }, []);

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getMyBookings(),
  });

  if (bookings) {
    total_page = Math.ceil(bookings.data.length / LIMIT_ITEMS);
    for (let i = 0; i < bookings.data.length; i++) {
      const booking = bookings.data[i].booking;
      const flight = bookings.data[i].flight;

      booking_list.push({
        bookingId: booking._id,
        flightId: flight._id,
        bookingDate: booking.booking_date,
        status: booking.status,
        departureCityCode: airports[flight.ori_airport].code,
        destinationCityCode: airports[flight.des_airport].code,
        departureCityName: airports[flight.ori_airport].city,
        destinationCityName: airports[flight.des_airport].city,
        departureTime: flight.actual_departure,
        departureTimeOld: flight.scheduled_departure,
        arrivalTime: flight.actual_arrival,
        arrivalTimeOld: flight.scheduled_arrival,
        businessTickets: booking.busi_tickets,
        economyTickets: booking.eco_tickets,
        totalPrice: booking.total_amount,
        cancelAvailableUntil: booking.cancellation_deadline,
      });
    }
  }
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (booking_list) {
      setBookingOnPage(booking_list.slice(0, LIMIT_ITEMS));
    }
  }, [bookings]);

  const handleChangePage = (page: number) => {
    setPage(page);
    setBookingOnPage(
      booking_list.slice((page - 1) * LIMIT_ITEMS, page * LIMIT_ITEMS)
    );
  };

  const handleNextPage = () => {
    if (page < total_page) {
      setPage(page + 1);
      setBookingOnPage(
        booking_list.slice(page * LIMIT_ITEMS, (page + 1) * LIMIT_ITEMS)
      );
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setBookingOnPage(
        booking_list.slice((page - 2) * LIMIT_ITEMS, (page - 1) * LIMIT_ITEMS)
      );
    }
  };

  return (
    <>
      {isLoading ? <Loading /> : null}
      <div className="bg-[#F6FBFF] flex flex-row">
        <div className="relative">
          {/* Nút mở/đóng sidebar */}
          <button
            onClick={handleToggle}
            className="absolute bg-blue-500 top-[10px] text-[12px] text-white px-4 py-2 rounded-r-lg z-50"
          >
            {isOpen ? "Close" : "Open"}
          </button>

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full bg-blue-100 rounded-r-[20px] border-r-[10px] border-t-[3px] border-b-[3px] border-[#223A60] shadow-lg px-[20px] py-[10px] max-w-[350px] transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col gap-[40px]">
              <div className="text-[18px] text-[#283841] font-medium">
                All your bookings will be displayed here!
              </div>

              <div className="opacity-[80%] text-[16px] text-[#283841] font-medium">
                Please note the cancellation period, you are only allowed to
                cancel your flight within{" "}
                <span className="bg-yellow-200 p-[2px] rounded-[4px] font-bold">
                  5 days
                </span>
                after booking before departure.
              </div>

              <div className="opacity-[80%] text-[16px] text-[#283841] font-medium">
                To cancel your flight, please click on the{" "}
                <span className="bg-[#223A60] text-white font-semibold text-[16px] px-[20px] rounded-[14px]">
                  View details
                </span>
                button on the bookings you want to cancel
              </div>

              <div className="opacity-[80%] text-[16px] text-[#283841] font-medium">
                Want more flights?
                <span
                  className="px-[10px] underline text-[#0066FF] cursor-pointer"
                  onClick={() => alert("Redirect to booking page")}
                >
                  Book a new one!
                </span>
              </div>

              <img
                src="QAirline_Logo.png"
                alt="Logo"
                className="self-center scale-[0.8]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[30px] w-full px-[20px] py-[30px]">
          {bookingOnPage.map((booking, index) => (
            <Booking key={index} {...booking} />
          ))}
        </div>
      </div>
      <Pagination
        total_page={total_page}
        current_page={page}
        changePage={handleChangePage}
        nextPage={handleNextPage}
        prevPage={handlePreviousPage}
      />
    </>
  );
};

export default MyBooking;
