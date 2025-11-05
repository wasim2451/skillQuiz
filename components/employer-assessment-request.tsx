"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

export default function EmployerAssessmentRequest() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "C++",
    "Python",
    "Javascript",
    "Java",
  ]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFile(file.name);
  };

  return (
    <div className="text-black w-full max-w-3xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-1 sm:mb-2">
        Employer Skill
      </h1>
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        Assessment Request
      </h1>

      <div className="space-y-5 sm:space-y-6">
        {/* Candidate Name */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Candidate Name
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-black focus:outline-none"
            />
          </div>
        </div>

        {/* Candidate Email */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Candidate Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full rounded border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-black focus:outline-none"
          />
        </div>

        {/* Candidate Phone */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Candidate Phone
          </label>
          <input
            type="tel"
            placeholder="Enter Phone No."
            className="w-full rounded border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-black focus:outline-none"
          />
        </div>

        {/* Candidate ID */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Candidate ID
          </label>
          <div className="relative">
            <select className="w-full rounded border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-black appearance-none focus:outline-none">
              <option>PAN Card</option>
              <option>Aadhar Card</option>
              <option>Voter ID</option>
              <option>Passport</option>
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

        {/* Upload Resume */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Upload Resume <span className="text-red-500">*</span>
          </label>
          <label className="w-full rounded border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between sm:justify-start bg-gray-100 hover:bg-gray-200 cursor-pointer transition">
            <div className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-blue-700" />
              <span className="text-sm sm:text-base text-black truncate max-w-[180px] sm:max-w-none">
                {selectedFile || "Upload your Resume"}
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

        {/* Skills */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Skills
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
            <select className="w-full rounded border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-black appearance-none focus:outline-none">
              <option value="" disabled>
                Job Family
              </option>
              <option>IT</option>
              <option>Accounting</option>
              <option>Finance</option>
              <option>Law</option>
              <option>Pharmacy</option>
            </select>
            <select className="w-full rounded border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-black appearance-none focus:outline-none">
              <option value="" disabled>
                Skills Family
              </option>
              <option>Programming</option>
              <option>Frameworks</option>
              <option>Databases</option>
            </select>
          </div>

          <div className="bg-slate-50 rounded p-3 sm:p-4">
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className="bg-green-400 text-black font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm hover:bg-green-500 transition"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cost Unit */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Cost Unit
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
            <select className="w-full rounded border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-black appearance-none focus:outline-none">
              <option>HR</option>
              <option>Finance</option>
              <option>Operations</option>
            </select>
            <select className="w-full rounded border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-black appearance-none focus:outline-none">
              <option>Talent Acquisition</option>
              <option>Recruitment</option>
              <option>Staffing</option>
            </select>
          </div>

          <select className="w-full rounded border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-black appearance-none focus:outline-none mb-3 sm:mb-4">
            <option>TA-BU1</option>
            <option>TA-BU2</option>
            <option>TA-BU3</option>
          </select>
        </div>

        {/* Credit Cards */}
        <div>
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Credit Cards
          </label>
          <select className="w-full rounded border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-black appearance-none focus:outline-none">
            <option>ICICI Card</option>
            <option>HDFC Card</option>
            <option>SBI Card</option>
            <option>Axis Card</option>
          </select>
        </div>

        {/* Authorization Text */}
        <div className="text-center text-xs sm:text-sm text-slate-500 italic leading-snug">
          <p>
            I authorize Delos Infosystems Private Limited to debit the above
            credit card account for US $40 as payment for conducting the skill
            assessment of the specified candidate.
          </p>
        </div>
      </div>
    </div>
  );
}
