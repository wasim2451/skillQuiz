"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";

export default function EmployerCandidateList() {
  const [selectedGender, setSelectedGender] = useState<
    "male" | "female" | "both"
  >("male");
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["C#"]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const candidates = [
    {
      id: 1,
      name: "K. Pradeep Kishor",
      initial: "P",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-green-600",
    },
    {
      id: 2,
      name: "Manoj",
      initial: "M",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-yellow-600",
    },
    {
      id: 3,
      name: "Kasiro",
      initial: "K",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-teal-600",
    },
    {
      id: 4,
      name: "Ravi",
      initial: "R",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-blue-800",
    },
  ];

  return (
    <div className="text-black w-full max-w-6xl mx-auto p-4 sm:p-6">
      {/* Search Bar */}
      <div className="bg-slate-200 rounded-xl overflow-hidden mb-6 shadow-sm">
        <div className="flex flex-col sm:grid sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
          <div className="flex items-center px-4 py-3">
            <Search className="w-5 h-5 mr-2 text-gray-600" />
            <input
              type="text"
              placeholder="Candidate Email ID / Phone / Skill"
              className="bg-transparent w-full focus:outline-none text-sm sm:text-base"
            />
          </div>
          <div className="flex items-center px-4 py-3">
            <MapPin className="w-5 h-5 mr-2 text-gray-600" />
            <input
              type="text"
              placeholder="Location"
              className="bg-transparent w-full focus:outline-none text-sm sm:text-base"
            />
          </div>
          <div className="flex items-center px-4 py-3">
            <div className="relative w-full">
              <select className="w-full bg-transparent appearance-none focus:outline-none text-gray-600 text-sm sm:text-base p-2 cursor-pointer">
                <option value="" disabled>
                  Job Family
                </option>
                <option>Software Development</option>
                <option>Data Science</option>
                <option>Design</option>
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
          <div className="flex items-center justify-between px-4 py-3">
            <button className="text-gray-500 text-sm hover:text-gray-700 transition">
              Clear
            </button>
            <button className="bg-blue-500 text-white font-medium px-4 py-2 text-sm sm:text-base rounded-full hover:bg-blue-600 transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Layout: Filters + List */}
      <div className="flex flex-col md:grid md:grid-cols-4 gap-5 sm:gap-6">
        {/* Filters */}
        <div className="col-span-1">
          <div className="bg-blue-200 rounded-lg overflow-hidden shadow">
            <div className="bg-blue-400 p-3 sm:p-4 text-lg sm:text-xl font-semibold text-white">
              Filter
            </div>

            {/* Gender Filter */}
            <div className="border-t border-blue-400 p-3 sm:p-4">
              <h3 className="text-base sm:text-lg mb-3 font-medium">Gender</h3>
              <div className="space-y-2">
                <label className="flex items-center text-sm sm:text-base">
                  <input
                    type="checkbox"
                    checked={
                      selectedGender === "male" || selectedGender === "both"
                    }
                    onChange={() =>
                      setSelectedGender(
                        selectedGender === "female" ? "both" : "male"
                      )
                    }
                    className="w-4 h-4 mr-2"
                  />
                  Male
                </label>
                <label className="flex items-center text-sm sm:text-base">
                  <input
                    type="checkbox"
                    checked={
                      selectedGender === "female" || selectedGender === "both"
                    }
                    onChange={() =>
                      setSelectedGender(
                        selectedGender === "male" ? "both" : "female"
                      )
                    }
                    className="w-4 h-4 mr-2"
                  />
                  Female
                </label>
              </div>
            </div>

            {/* Skills Filter */}
            <div className="border-t border-blue-400 p-3 sm:p-4">
              <h3 className="text-base sm:text-lg mb-3 font-medium">Skills</h3>
              <div className="space-y-2 text-sm sm:text-base">
                {["C#", "Java", "SQL", "Python"].map((skill) => (
                  <label key={skill} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedSkills.includes(skill)}
                      onChange={() => toggleSkill(skill)}
                      className="w-4 h-4 mr-2"
                    />
                    {skill}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Candidate Cards */}
        <div className="col-span-3 space-y-4">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-blue-100 rounded-lg p-4 sm:p-5 shadow hover:shadow-md transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Left - Candidate Info */}
                <div className="flex items-start sm:items-center gap-4">
                  {/* Fix: make profile icon always circular */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ${candidate.color} flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0`}
                    style={{ aspectRatio: "1 / 1" }}
                  >
                    {candidate.initial}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                      {candidate.name}
                    </h3>
                    <p className="text-green-700 font-medium text-sm sm:text-base">
                      {candidate.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs sm:text-sm text-gray-700">
                      <p>Skills: {candidate.skills.join(", ")}</p>
                      <span className="hidden sm:inline">|</span>
                      <p>Percentile: {candidate.percentile}</p>
                      <span className="hidden sm:inline">|</span>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-gray-600" />
                        {candidate.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Action */}
                <div>
                  <a
                    href="dummy/dummy.pdf"
                    download
                    className="inline-block bg-green-700 text-white text-sm sm:text-base font-semibold px-4 sm:px-5 py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    View Report
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
