import Ticket from "../components/Ticket";
import { useQueryForm } from "../hooks/useQueryForm";
import { Tickets } from "../types/flight.type";
import { useState } from "react";
import SearchedFlightInfo from "../components/SearchedFlightInfo";
import { makeBooking } from "../apis/flight.api";
import ConfirmBooking from "./ConfirmBooking";
import { PATH } from "../constants/path";
import { formatCurrency } from "../utils/utils";
import Loading from "../components/Loading";
import Successful from "../components/Successful";

const Booking = () => {
  const {
    flight_depart_info,
    flight_return_info,
    nums_busi_book,
    nums_eco_book,
  } = useQueryForm();
  const [confirm, setConfirm] = useState(false);
  const busi_tickets = parseInt(nums_busi_book);
  const eco_tickets = parseInt(nums_eco_book);
  const [discount, setDiscount] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [errors, setErrors] = useState<{
    [key: number]: { [key: string]: string };
  }>({});

  const [booking, setBooking] = useState<Tickets>(
    Array.from({ length: busi_tickets + eco_tickets }, (_, index) => ({
      dob: null,
      name: "",
      nationality: "",
      email: "",
      phone: "",
      passport: "",
      price:
        index < busi_tickets
          ? flight_depart_info.base_price * 1.5
          : flight_depart_info.base_price,
    }))
  );

  const [returnBooking, setReturnBooking] = useState<Tickets>(
    Array.from({ length: busi_tickets + eco_tickets }, (_, index) => ({
      dob: null,
      name: "",
      nationality: "",
      email: "",
      phone: "",
      passport: "",
      price:
        index < busi_tickets
          ? flight_return_info?.base_price * 1.5
          : flight_return_info?.base_price,
    }))
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setBooking((prev) =>
      prev.map((ticket, i) =>
        i === index ? { ...ticket, [name]: value } : ticket
      )
    );
    setReturnBooking((prev) =>
      prev.map((ticket, i) =>
        i === index ? { ...ticket, [name]: value } : ticket
      )
    );
  };

  const handleError = () => {
    let hasError = false;
    const newErrors: { [key: number]: { [key: string]: string } } = {};
    booking.forEach((ticket, index) => {
      const ticketErrors: { [key: string]: string } = {};
      if (!ticket.dob) ticketErrors.dob = "Date of Birth is required";
      if (!ticket.name) ticketErrors.name = "Name is required";
      if (!ticket.nationality)
        ticketErrors.nationality = "Nationality is required";
      if (!ticket.phone) ticketErrors.phone = "Phone number is required";
      if (!ticket.passport)
        ticketErrors.passport = "Passport number is required";

      if (Object.keys(ticketErrors).length > 0) {
        newErrors[index] = ticketErrors;
        hasError = true;
      }
    });
    setErrors(newErrors);
    return hasError;
  };

  const handleClose = () => {
    setConfirm(false);
  };

  const hanldeConfirm = async () => {
    const departDataForm = {
      flight_id: flight_depart_info?._id,
      busi_tickets,
      eco_tickets,
      tickets: booking,
      discount_code: discount,
    };
    const returnDataForm = {
      flight_id: flight_return_info?._id,
      busi_tickets,
      eco_tickets,
      tickets: returnBooking,
      discount_code: discount,
    };
    setIsLoading(true);
    try {
      await makeBooking(departDataForm);
      if (flight_return_info) await makeBooking(returnDataForm);
      setIsLoading(false);
      setConfirm(false);
      setIsSuccessful(true);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasError = handleError();
    if (hasError) return;
    setConfirm(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-7 mb-3">
        Departure Flight
      </h1>
      <SearchedFlightInfo
        {...flight_depart_info}
        nums_eco_book={eco_tickets}
        nums_busi_book={busi_tickets}
      />
      {flight_return_info ? (
        <h1 className="text-3xl font-bold text-center mt-7 mb-3">
          Return Flight
        </h1>
      ) : null}
      {flight_return_info ? (
        <SearchedFlightInfo
          {...flight_return_info}
          nums_eco_book={eco_tickets}
          nums_busi_book={busi_tickets}
        />
      ) : null}
      <div className="italic mx-10 my-10">
        <p className="text-sm">
          Please fill in these feilds neccessary information for us. We commits
          in protecting your information and only use for the flight.
        </p>
        <p className="text-sm">
          Feild marked with <span className="text-red-500">*</span> are
          compulsory.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        {busi_tickets > 0 ? (
          <div className="px-10">
            <h2 className="text-bold text-3xl">Business Tickets</h2>
            {Array.from({ length: busi_tickets }, (_, index) => (
              <div key={index} className="my-5">
                <Ticket
                  data={booking[index]}
                  index={index + 1}
                  id={index}
                  change={handleChange}
                  errors={errors[index]}
                />
              </div>
            ))}
          </div>
        ) : null}
        {eco_tickets > 0 ? (
          <div className="px-10">
            <h2 className="text-bold text-3xl">Economy Tickets</h2>
            {Array.from({ length: eco_tickets }, (_, index) => (
              <div key={index} className="my-5">
                <Ticket
                  data={booking[index + busi_tickets]}
                  index={index + 1}
                  id={index + busi_tickets}
                  change={handleChange}
                  errors={errors[index + busi_tickets]}
                />
              </div>
            ))}
          </div>
        ) : null}

        <section className="flex overflow-hidden flex-col justify-center px-24 py-14 text-right text-black max-md:px-5">
          <div className="w-1/6 self-end mb-5 flex flex-col">
            <label className="text-bold mb-3">Discount Code</label>
            <input
              placeholder="Enter your discount code"
              name="discount"
              type="text"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 p-2.5"
            />
          </div>

          <h2 className="text-2xl tracking-[2.4px] max-md:max-w-full">
            Total price:
          </h2>
          <p className="mt-8 text-5xl font-bold tracking-[2.88px] max-md:max-w-full max-md:text-4xl">
            {formatCurrency(
              (flight_depart_info.base_price +
                (flight_return_info ? flight_return_info.base_price : 0)) *
                (busi_tickets * 1.5 + eco_tickets)
            )}
          </p>
          <p className="mt-8 text-xl tracking-widest max-md:max-w-full">
            Total price for all passengers (including taxes, fees and
            discounts).
          </p>
          <button className="gap-2.5 self-end px-8 py-6 mt-8 text-3xl font-bold tracking-widest text-center text-white whitespace-nowrap rounded-lg bg-slate-700 max-w-[300px] min-h-[93px] w-[300px] max-md:px-5">
            Next
          </button>
        </section>
      </form>
      {confirm && (
        <div
          className={`fixed inset-0 bg-slate-500 z-50 flex items-center justify-center transition-transform duration-500 ease-out transform bg-opacity-50
          }`}
        >
          <ConfirmBooking
            flight_depart_info={flight_depart_info}
            flight_return_info={flight_return_info}
            numberOfTickets={[busi_tickets, eco_tickets]}
            onClose={handleClose}
            onConfirm={hanldeConfirm}
          />
        </div>
      )}
      {isLoading && <Loading />}
      {isSuccessful && (
        <Successful message="Suceessful" to_path={PATH.user.mybooking} />
      )}
    </div>
  );
};

export default Booking;
