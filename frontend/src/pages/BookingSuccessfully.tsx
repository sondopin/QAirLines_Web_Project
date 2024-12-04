import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface BookingSuccessfullyProps {
  backgrouDeparture: string;
  backgroundDestination: string;
}

/**
 * BookingSuccessfully component displays a success message after a booking is completed
 * and redirects the user to the booking list page after a short delay.
 *
 * @component
 * @param {BookingSuccessfullyProps} props - The properties passed to the component.
 * @param {string} props.backgrouDeparture - The URL of the background image for the departure location.
 * @param {string} props.backgroundDestination - The URL of the background image for the destination location.
 *
 * @returns {JSX.Element} The rendered BookingSuccessfully component.
 *
 * @example
 * <BookingSuccessfully
 *   backgrouDeparture="path/to/departure.jpg"
 *   backgroundDestination="path/to/destination.jpg"
 * />
 *
 * @remarks
 * This component uses the `useNavigate` hook from `react-router-dom` to navigate to the booking list page
 * after a 2-second delay. It also applies various Tailwind CSS classes for styling and animations.
 */

const BookingSuccessfully: React.FC<BookingSuccessfullyProps> = ({
  backgrouDeparture,
  backgroundDestination,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/my-booking");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full h-screen">
      <img
      src={backgrouDeparture}
      alt="Departure Background"
      className="absolute left-0 w-full sm:w-1/2 h-1/2 sm:h-full -z-20 object-cover"
      />
      <img
      src={backgroundDestination}
      alt="Destination Background"
      className="absolute right-0 w-full sm:w-1/2 h-1/2 sm:h-full -z-20 object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 backdrop-blur-[2px] -z-10"></div>
      <div className="flex items-center justify-center w-full h-full p-4">
      <div className="text-[8vw] sm:text-[40px] text-[#D8EBFE] font-bold text-center scale-[0.8] animate-bounce">
        Booking successfully! <br />
        Redirecting to your booking list...
      </div>
      </div>
    </div>
  );
};

export default BookingSuccessfully;
