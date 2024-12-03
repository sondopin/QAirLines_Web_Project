import React from "react";
import type { Ticket } from "../types/flight.type";

interface TicketProps {
  data: Ticket;
  index: number;
  id?: number;
  change?: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  errors?: { [key: string]: string };
}

const Ticket: React.FC<TicketProps> = ({ data, index, id, change, errors }) => {
  let isView = false;
  if (!change) {
    isView = true;
  }

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
              value={
                data.dob ? new Date(data.dob).toISOString().split("T")[0] : ""
              }
              name="dob"
              disabled={isView}
              type="date"
              placeholder="Choose A Date"
              onChange={(e) => change && change(e, id ?? 0)}
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
              value={data.name}
              type="text"
              disabled={isView}
              placeholder="Enter your name"
              onChange={(e) => change && change(e, id ?? 0)}
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
              value={data.nationality}
              disabled={isView}
              placeholder="Enter your nationality"
              onChange={(e) => change && change(e, id ?? 0)}
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
              value={data.phone}
              disabled={isView}
              placeholder="Enter your phone number"
              onChange={(e) => change && change(e, id ?? 0)}
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
              value={data.email}
              placeholder="Enter your email"
              disabled={isView}
              onChange={(e) => change && change(e, id ?? 0)}
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
              value={data.passport}
              disabled={isView}
              placeholder="Enter your passport number"
              onChange={(e) => change && change(e, id ?? 0)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors?.passport && (
              <p className="text-red-500 text-sm mt-1">{errors.passport}</p>
            )}
          </div>
        </div>

        {/* Clear Button */}
        {change && (
          <div className="text-center">
            <button
              type="button"
              className="px-6 py-3 bg-slate-800 text-white font-medium rounded-lg shadow hover:bg-red-500 transition"
            >
              Clear
            </button>
          </div>
        )}
        {/* Price */}
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Price:</div>
          <div className="text-lg font-semibold">{data.price} VND</div>
        </div>
      </fieldset>
    </div>
  );
};
export default Ticket;
