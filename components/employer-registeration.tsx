"use client";

import { useState } from "react";

interface EmployerRegistrationProps {
  onSubmit: () => void;
}

export default function EmployerRegistration({
  onSubmit,
}: EmployerRegistrationProps) {
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [authorized, setAuthorized] = useState<"yes" | "no" | null>(null);

  return (
    <div className="text-black w-full max-w-2xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 tracking-wide">
        Employer Registration
      </h1>

      <div className="space-y-5 sm:space-y-6">
        {/* Name Fields */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Name
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded px-3 sm:px-4 py-2.5 sm:py-3 text-black focus:outline-none border border-gray-300"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded px-3 sm:px-4 py-2.5 sm:py-3 text-black focus:outline-none border border-gray-300"
            />
          </div>
        </div>

        {/* Company Field */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Company
          </label>
          <input
            type="text"
            placeholder="Enter Company Name"
            className="w-full rounded px-3 sm:px-4 py-2.5 sm:py-3 text-black focus:outline-none border border-gray-300"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Email
          </label>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 rounded-l sm:rounded-l-md sm:rounded-r-none px-3 sm:px-4 py-2.5 sm:py-3 text-black focus:outline-none border border-gray-300"
            />
            <button
              type="button"
              className="bg-blue-500 rounded sm:rounded-r-md sm:rounded-l-none px-4 py-2.5 sm:py-3 text-white hover:bg-blue-600 w-full sm:w-auto"
              onClick={() => setEmailOtpSent(true)}
            >
              Get OTP
            </button>
          </div>
          {emailOtpSent && (
            <div className="mt-2">
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full sm:w-40 rounded px-3 sm:px-4 py-2.5 sm:py-3 text-black focus:outline-none border border-gray-300"
              />
            </div>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Phone
          </label>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <input
              type="tel"
              placeholder="Enter Phone No."
              className="flex-1 rounded-l sm:rounded-l-md sm:rounded-r-none px-3 sm:px-4 py-2.5 sm:py-3 text-black focus:outline-none border border-gray-300"
            />
            <button
              type="button"
              className="bg-blue-500 rounded sm:rounded-r-md sm:rounded-l-none px-4 py-2.5 sm:py-3 text-white hover:bg-blue-600 w-full sm:w-auto"
              onClick={() => setPhoneOtpSent(true)}
            >
              Get OTP
            </button>
          </div>
          {phoneOtpSent && (
            <div className="mt-2">
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full sm:w-40 rounded px-3 sm:px-4 py-2.5 sm:py-3 text-black focus:outline-none border border-gray-300"
              />
            </div>
          )}
        </div>

        {/* Authorization */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Are you Authorized to Pay?
          </label>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-3 sm:mb-4 space-y-2 sm:space-y-0">
            <label className="flex items-center">
              <input
                type="radio"
                id="auth-yes"
                name="authorized"
                className="mr-2"
                onChange={() => setAuthorized("yes")}
                checked={authorized === "yes"}
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                id="auth-no"
                name="authorized"
                className="mr-2"
                onChange={() => setAuthorized("no")}
                checked={authorized === "no"}
              />
              No
            </label>
          </div>
          {authorized === "yes" && (
            <input
              type="text"
              placeholder="Authorization Details"
              className="w-full rounded px-3 sm:px-4 py-2.5 sm:py-3 text-black focus:outline-none border border-gray-300"
            />
          )}
        </div>

        {/* Department */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Department
          </label>
          <div className="relative">
            <select className="w-full rounded px-3 sm:px-4 py-2.5 sm:py-3 text-black border border-gray-300 appearance-none focus:outline-none">
              <option>Human Resources</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Sales</option>
              <option>Finance</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            type="button"
            onClick={onSubmit}
            className="px-8 sm:px-10 py-2.5 sm:py-3 rounded bg-green-500 text-white font-medium hover:bg-green-600 w-full sm:w-auto transition"
          >
            Submit
          </button>
          <button
            type="reset"
            className="px-8 sm:px-10 py-2.5 sm:py-3 rounded bg-red-500 text-white font-medium hover:bg-red-600 w-full sm:w-auto transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
