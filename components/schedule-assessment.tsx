"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";



export default function ScheduleAssessment() {
  const [selectedCompany, setSelectedCompany] = useState<string>("microsoft");
   const router=useRouter(); 
  function handleSubmit() {
    Swal.fire({
      title: "✅ Thank You!",
      text: `Your assessment for ${selectedCompany} has been successfully scheduled.`,
      icon: "success",
      confirmButtonColor: "#2563eb",
    });
    router.push('/quiz/quizPage');
  }

  return (
    <div className="text-black w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 sm:mb-3">
        Schedule Assessment
      </h1>
      <p className="text-center text-gray-500 mb-5 sm:mb-6 text-sm sm:text-base">
        Register for your preferred skill assessment slot
      </p>

      <div className="space-y-6 sm:space-y-8">
        {/* Message */}
        <p className="text-center text-base sm:text-lg leading-relaxed">
          Great! Multiple employers have authorized you to take a skill
          assessment with <span className="font-semibold">SkillKwizz</span>. Choose one.  
          You can revisit this page to schedule others.
        </p>

        {/* Company Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {["microsoft", "google", "amazon", "facebook1", "facebook2"].map(
            (company) => (
              <button
                key={company}
                className={`flex items-center justify-center gap-2 bg-blue-100 rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-black font-medium hover:bg-blue-300 transition ${
                  selectedCompany === company
                    ? "border-2 border-green-500"
                    : "border border-transparent"
                }`}
                onClick={() => setSelectedCompany(company)}
              >
                <span
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                    selectedCompany === company
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                ></span>
                {company.charAt(0).toUpperCase() + company.slice(1).replace(/\d+/g, "")}
              </button>
            )
          )}
        </div>

        {/* Info Box */}
        <div className="bg-blue-200 rounded-lg p-3 sm:p-4 flex items-start sm:items-center gap-2 sm:gap-3 shadow-sm">
          <Info className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700 shrink-0" />
          <p className="text-sm sm:text-base leading-snug">
            Microsoft has authorized you to take an assessment for C#, SQL
            Server, Web 2.0, and React.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 sm:space-y-5">
          {/* Country */}
          <div>
            <label className="block mb-2 font-semibold text-sm sm:text-base">
              Select Country
            </label>
            <div className="relative">
              <select className="w-full rounded px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 text-black appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Zip Code */}
          <div>
            <label className="block mb-2 font-semibold text-sm sm:text-base">
              Select Zip Code
            </label>
            <div className="relative">
              <select className="w-full rounded px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 text-black appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Enter your area's Zip code</option>
                <option>110001</option>
                <option>110002</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Centre */}
          <div>
            <label className="block mb-2 font-semibold text-sm sm:text-base">
              Select Testing Centre
            </label>
            <div className="relative">
              <select className="w-full rounded px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 text-black appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Enter your Centre</option>
                <option>Centre 1</option>
                <option>Centre 2</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block mb-2 font-semibold text-sm sm:text-base">
                Select Date
              </label>
              <div className="flex items-center border border-gray-300 rounded px-3 sm:px-4 py-2.5 sm:py-3 hover:border-blue-400 transition">
                <input
                  type="date"
                  className="w-full bg-transparent focus:outline-none text-center text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-sm sm:text-base">
                Select Time
              </label>
              <div className="flex items-center border border-gray-300 rounded px-3 sm:px-4 py-2.5 sm:py-3 hover:border-blue-400 transition">
                <input
                  type="time"
                  className="w-full bg-transparent text-center focus:outline-none text-sm sm:text-base"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={handleSubmit}
            className="w-full sm:w-[300px] px-6 sm:px-10 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold text-base sm:text-lg transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
