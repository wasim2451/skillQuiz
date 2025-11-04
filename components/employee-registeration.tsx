"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

interface EmployeeRegistrationProps {
  onNext: () => void;
}

export default function EmployeeRegistration({
  onNext,
}: EmployeeRegistrationProps) {
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);

  return (
    <div className="text-black ">
      <h1 className="text-3xl font-bold text-center mb-8">
        Employee Registration
      </h1>

      <div className="space-y-6">
        {/* Name Fields */}
        <div>
          <label className="block mb-2 font-semibold">Name</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full  rounded px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full  rounded px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block mb-2 font-semibold">Email</label>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 rounded-l px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
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
                className="w-40  rounded px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
              />
            </div>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label className="block mb-2 font-semibold">Phone</label>
          <div className="flex">
            <input
              type="tel"
              placeholder="Enter Phone No."
              className="flex-1  rounded-l px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
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
                className="w-40  rounded px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
              />
            </div>
          )}
        </div>

        {/* Upload Resume */}
        <div>
          <label className="block mb-2 font-semibold">Upload Resume</label>
          <label className="w-full rounded px-4 py-3 text-white bg-slate-200 border-2 border-slate-200 flex items-center cursor-pointer hover:border-2 hover:border-slate-300">
            <Upload className="w-5 h-5 mr-2 text-blue-800" />
            <span className="text-black">Upload your Resume</span>
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={onNext}
            className="px-10 py-2 rounded bg-green-500 hover:bg-green-600 text-white hover:opacity-90"
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
