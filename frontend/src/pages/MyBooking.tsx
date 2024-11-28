import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Booking from "../components/Booking";
import AdjustedFlightNotification from "../components/AdjustedFlightNotification";

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

const MyBooking: React.FC<MyBookingProps> = ({ something }) => {
  console.log(something);

  return (
    <div className="bg-[#F6FBFF]">
      <Header />
      <div className="flex flex-col gap-[30px] w-full px-[20px] py-[30px]">
        <Booking
          bookingDate="19/11/2024"
          status="Up Coming"
          departureCityCode="HAN"
          departureCityName="Ha Noi"
          destinationCityCode="SGN"
          destinationCityName="Ho Chi Minh City"
          departureDate="Tue, 22/11/2024"
          departureTime="10:30 AM"
          returnDate="Sat, 25/12/2024"
          returnTime="08:15 PM"
          businessTickets={2}
          economyTickets={3}
          totalPrice={361500000}
          cancelAvailableUntil="Monday, 21/11/2024"
        />
        <div className="px-[150px]">
          <AdjustedFlightNotification
            oldDepartureDate="Tue, 22/11/2024, 10:30 AM"
            newDepartureDate="Wed, 23/11/2024, 09:00 AM"
            oldReturnDate="Sat, 25/12/2024, 08:15 PM"
            newReturnDate="Sun, 26/12/2024, 04:30 PM"
            reason="Bad weather conditions"
          />
        </div>
        <Booking
          bookingDate="19/11/2024"
          status="Up Coming"
          departureCityCode="HAN"
          departureCityName="Ha Noi"
          destinationCityCode="SGN"
          destinationCityName="Ho Chi Minh City"
          departureDate="Tue, 22/11/2024"
          departureTime="10:30 AM"
          returnDate="Sat, 25/12/2024"
          returnTime="08:15 PM"
          businessTickets={2}
          economyTickets={3}
          totalPrice={361500000}
          cancelAvailableUntil="Monday, 21/11/2024"
        />
        <Booking
          bookingDate="19/11/2024"
          status="Cancelled"
          departureCityCode="HAN"
          departureCityName="Ha Noi"
          destinationCityCode="SGN"
          destinationCityName="Ho Chi Minh City"
          departureDate="Tue, 22/11/2024"
          departureTime="10:30 AM"
          returnDate="Sat, 25/12/2024"
          returnTime="08:15 PM"
          businessTickets={2}
          economyTickets={3}
          totalPrice={361500000}
          cancelAvailableUntil="Monday, 21/11/2024"
        />
        <Booking
          bookingDate="19/11/2024"
          status="Completed"
          departureCityCode="HAN"
          departureCityName="Ha Noi"
          destinationCityCode="SGN"
          destinationCityName="Ho Chi Minh City"
          departureDate="Tue, 22/11/2024"
          departureTime="10:30 AM"
          returnDate="Sat, 25/12/2024"
          returnTime="08:15 PM"
          businessTickets={2}
          economyTickets={3}
          totalPrice={361500000}
          cancelAvailableUntil="Monday, 21/11/2024"
        />
      </div>
      <Footer />
    </div>
  );
};

export default MyBooking;
