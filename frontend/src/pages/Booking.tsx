import Ticket from "../components/Ticket";
import InputField from "../components/InputFeild";
import { useQueryForm } from "../hooks/useQueryForm";
import { Tickets } from "../types/flight.type";
import { useState } from "react";
import SearchedFlightInfo from "../components/SearchedFlightInfo";

const Booking = () => {
  const { flight_infor, nums_busi_book, nums_eco_book } = useQueryForm();
  const busi_tickets = parseInt(nums_busi_book);
  const eco_tickets = parseInt(nums_eco_book);
  const [errors, setErrors] = useState<{
    [key: number]: { [key: string]: string };
  }>({});

  const [booking, setBooking] = useState<Tickets>(
    Array.from({ length: busi_tickets + eco_tickets }, () => ({
      dob: null,
      name: "",
      nationality: "",
      email: "",
      phone: "",
      passport: "",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasError = handleError();
    if (hasError) return;
    console.log(booking);
  };

  return (
    <div>
      <SearchedFlightInfo
        {...flight_infor}
        nums_eco_book={eco_tickets}
        nums_busi_book={busi_tickets}
      />
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
          <div className="w-1/5 self-end mb-5">
            <label className="text-bold">Discount Code</label>
            <InputField
              placeholder="Enter your discount code"
              name="discount"
              type="text"
            />
          </div>

          <h2 className="text-2xl tracking-[2.4px] max-md:max-w-full">
            Total price:
          </h2>
          <p className="mt-8 text-5xl font-bold tracking-[2.88px] max-md:max-w-full max-md:text-4xl">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(
              busi_tickets * flight_infor.base_price * 1.5 +
                eco_tickets * flight_infor.base_price
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
    </div>
  );
};

export default Booking;
