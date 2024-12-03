import React from "react";
import Booking from "../components/Booking";
import { useQuery } from "@tanstack/react-query";
import { getMyBookings } from "../apis/user.api";
import { useGetAirports } from "../hooks/useGetAirports";

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
 * @returns {JSX.Element} The rendered MyBooking component.
 */

const MyBooking: React.FC<MyBookingProps> = () => {
  const airports = useGetAirports();
  const booking_list = [];
  const { data: bookings } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getMyBookings(),
  });

  if (bookings) {
    for (let i = 0; i < bookings.data.length; i++) {
      const booking = bookings.data[i].booking;
      const flight = bookings.data[i].flight;

      booking_list.push({
        bookingId: booking._id,
        flightId: flight._id,
        bookingDate: booking.booking_date,
        status:
          booking.status === "Cancelled"
            ? "Cancelled"
            : booking.status === "Delayed"
            ? "Delayed"
            : flight.actual_departure < new Date().toDateString() &&
              flight.actual_arrival < new Date().toDateString()
            ? "Up Coming"
            : "Completed",
        departureCityCode: airports[flight.ori_airport].code,
        destinationCityCode: airports[flight.des_airport].code,
        departureCityName: airports[flight.ori_airport].city,
        destinationCityName: airports[flight.des_airport].city,
        departureDate: flight.actual_departure,
        departureTime: flight.actual_departure,
        returnDate: flight.actual_arrival,
        returnTime: flight.actual_arrival,
        businessTickets: booking.busi_tickets,
        economyTickets: booking.eco_tickets,
        totalPrice: booking.total_amount,
        cancelAvailableUntil: booking.cancellation_deadline,
      });
    }
  }

  console.log(booking_list);

  return (
    <div className="bg-[#F6FBFF]">
      <div className="flex flex-col gap-[30px] w-full px-[20px] py-[30px]">
        {booking_list.map((booking, index) => (
          <Booking key={index} {...booking} />
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
