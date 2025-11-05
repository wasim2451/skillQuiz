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
    <div className="text-black">
      <h1 className=" text-2xl md:text-3xl font-bold text-center mb-8 tracking-wider">
        Employer Registration
      </h1>

      <div className="space-y-6">
        {/* Name Fields */}
        <div>
          <label className="block mb-2 font-bold">Name</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded px-4 py-3 text-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full text-black rounded px-4 py-3 focus:outline-none"
            />
          </div>
        </div>

        {/* Company Field */}
        <div>
          <label className="block mb-2 font-bold">Company</label>
          <input
            type="text"
            placeholder="Enter Company Name"
            className="w-full rounded px-4 py-3 text-black focus:outline-none"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block mb-2 font-bold">Email</label>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 rounded-l px-4 py-3 text-black focus:outline-none"
            />
            <button
              className="bg-blue-500 rounded-r px-4 py-3 text-white hover:bg-blue-600"
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
                className="w-40  rounded px-4 py-3 text-black  focus:outline-none"
              />
            </div>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label className="block mb-2 font-bold">Phone</label>
          <div className="flex">
            <input
              type="tel"
              placeholder="Enter Phone No."
              className="flex-1  rounded-l px-4 py-3 text-black  focus:outline-none"
            />
            <button
              className="bg-blue-500 rounded-r px-4 py-3 text-white hover:bg-blue-600"
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
                className="w-40  rounded px-4 py-3 text-black focus:outline-none"
              />
            </div>
          )}
        </div>

        {/* Authorization */}
        <div>
          <label className="block mb-2 font-bold">Are you Authorized to Pay ?</label>
          <div className="flex items-center space-x-6 mb-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="auth-yes"
                name="authorized"
                className="mr-2"
                onChange={() => setAuthorized("yes")}
                checked={authorized === "yes"}
              />
              <label htmlFor="auth-yes">Yes</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="auth-no"
                name="authorized"
                className="mr-2"
                onChange={() => setAuthorized("no")}
                checked={authorized === "no"}
              />
              <label htmlFor="auth-no">No</label>
            </div>
          </div>
          {authorized === "yes" && (
            <input
              type="text"
              placeholder="Authorization Details"
              className="w-full  rounded px-4 py-3 text-black  focus:outline-none"
            />
          )}
        </div>

        {/* Department */}
        <div>
          <label className="block mb-2 font-bold">Department</label>
          <div className="relative">
            <select className="w-full  rounded px-4 py-3 text-black appearance-none focus:outline-none">
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
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={onSubmit}
            className="px-10 py-2 rounded bg-gradient-to-r bg-green-500  text-white hover:bg-green-600"
          >
            Submit
          </button>
          <button className="px-10 py-2 rounded bg-red-500 text-white hover:bg-red-600">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
