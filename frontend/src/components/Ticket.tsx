import React from "react";

interface TicketProps {
  index: number;
  id: number;
  change: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  errors?: { [key: string]: string };
}

const Ticket: React.FC<TicketProps> = ({ index, id, change, errors }) => {
  return (
    <div className="flex flex-col p-6 bg-blue-100 rounded-lg shadow-md max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex gap-4 items-center text-white font-semibold text-lg rounded-t-lg p-4">
        <div className="bg-slate-700 text-center px-4 py-2 rounded-md">
          Ticket {index}
        </div>
      </div>

      {/* Form */}
      <fieldset className="flex flex-col gap-6 bg-blue-100 p-6 rounded-b-lg">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Date of Birth */}
          <div>
            <label className="block font-medium text-gray-700">
              <span className="text-red-500">*</span> Date Of Birth
            </label>
            <input
              name="dob"
              type="date"
              placeholder="Choose A Date"
              onChange={(e) => change(e, id)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors?.dob && (
              <p className="text-red-500 text-sm mt-1">{errors.dob}</p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block font-medium text-gray-700">
              <span className="text-red-500">*</span> Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => change(e, id)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors?.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Nationality */}
          <div>
            <label className="block font-medium text-gray-700">
              <span className="text-red-500">*</span> Nationality
            </label>
            <input
              name="nationality"
              type="text"
              placeholder="Enter your nationality"
              onChange={(e) => change(e, id)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors?.nationality && (
              <p className="text-red-500 text-sm mt-1">{errors.nationality}</p>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone Number */}
          <div>
            <label className="block font-medium text-gray-700">
              <span className="text-red-500">*</span> Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              onChange={(e) => change(e, id)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors?.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => change(e, id)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors?.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Passport Number */}
          <div>
            <label className="block font-medium text-gray-700">
              <span className="text-red-500">*</span> Passport Number
            </label>
            <input
              name="passport"
              type="text"
              placeholder="Enter your passport number"
              onChange={(e) => change(e, id)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors?.passport && (
              <p className="text-red-500 text-sm mt-1">{errors.passport}</p>
            )}
          </div>
        </div>

        {/* Clear Button */}
        <div className="text-center">
          <button
            type="button"
            className="px-6 py-3 bg-slate-800 text-white font-medium rounded-lg shadow hover:bg-red-500 transition"
          >
            Clear
          </button>
        </div>
      </fieldset>
    </div>
  );
};
export default Ticket;
