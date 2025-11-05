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
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };

  return (
    <div className="text-black w-full max-w-2xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 tracking-wide">
        Employee Registration
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
              className="w-full rounded px-3 sm:px-4 py-2.5 sm:py-3 text-black placeholder-gray-400 focus:outline-none border border-gray-300"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded px-3 sm:px-4 py-2.5 sm:py-3 text-black placeholder-gray-400 focus:outline-none border border-gray-300"
            />
          </div>
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
              className="flex-1 rounded-l sm:rounded-l-md sm:rounded-r-none px-3 sm:px-4 py-2.5 sm:py-3 text-black placeholder-gray-400 focus:outline-none border border-gray-300"
            />
            <button
              type="button"
              className="bg-blue-500 rounded sm:rounded-r-md sm:rounded-l-none px-4 py-2.5 sm:py-3 text-white hover:bg-blue-600 w-full sm:w-auto transition"
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
                className="w-full sm:w-40 rounded px-3 sm:px-4 py-2.5 sm:py-3 text-black placeholder-gray-400 focus:outline-none border border-gray-300"
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
              className="flex-1 rounded-l sm:rounded-l-md sm:rounded-r-none px-3 sm:px-4 py-2.5 sm:py-3 text-black placeholder-gray-400 focus:outline-none border border-gray-300"
            />
            <button
              type="button"
              className="bg-blue-500 rounded sm:rounded-r-md sm:rounded-l-none px-4 py-2.5 sm:py-3 text-white hover:bg-blue-600 w-full sm:w-auto transition"
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
                className="w-full sm:w-40 rounded px-3 sm:px-4 py-2.5 sm:py-3 text-black placeholder-gray-400 focus:outline-none border border-gray-300"
              />
            </div>
          )}
        </div>

        {/* Upload Resume */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Upload Resume
          </label>
          <label className="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between sm:justify-start bg-gray-100 hover:bg-gray-200 cursor-pointer transition">
            <div className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-blue-700" />
              <span className="text-black text-sm sm:text-base">
                {selectedFile ? selectedFile : "Upload your Resume"}
              </span>
            </div>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            type="button"
            onClick={onNext}
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
