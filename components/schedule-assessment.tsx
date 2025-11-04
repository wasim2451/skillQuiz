"use client";

import { useState } from "react";
import { Info, Calendar, Clock } from "lucide-react";
import Swal from "sweetalert2";
export default function ScheduleAssessment() {
    const [selectedCompany, setSelectedCompany] = useState<string>("microsoft");
    function handleSubmit() {
        Swal.fire({
            title: "✅ Thank You !",
            text: `Your assessment for ${selectedCompany} has been successfully scheduled.`,
            icon: "success",
            confirmButtonColor: "#2563eb", // blue
        });
    }

    return (
        <div className="text-black">
            <h1 className="text-3xl font-semibold text-center mb-2">
                Schedule Assessment
            </h1>
            <p className="text-center text-gray-500 mb-6">
                Register for your preferred skill assessment slot
            </p>

            <div className="space-y-8">
                {/* Message */}
                <p className="text-center text-lg">
                    Great!! multiple employers have authorised you to take a skin
                    assessment with SkillKwizz . Choose one. You can revisit this page to
                    schedule for others
                </p>

                {/* Company Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                        className={`flex items-center justify-center gap-2 bg-blue-200 rounded px-4 py-3 text-black hover:bg-blue-300 ${selectedCompany === "microsoft" ? "border-2 border-green-500" : ""
                            }`}
                        onClick={() => setSelectedCompany("microsoft")}
                    >
                        <span
                            className={`w-4 h-4 rounded-full ${selectedCompany === "microsoft" ? "bg-green-500" : "bg-gray-500"
                                }`}
                        ></span>
                        Microsoft
                    </button>
                    <button
                        className={`flex items-center justify-center gap-2 bg-blue-100 rounded px-4 py-3 text-black hover:bg-blue-300 ${selectedCompany === "google" ? "border-2 border-green-500" : ""
                            }`}
                        onClick={() => setSelectedCompany("google")}
                    >
                        <span
                            className={`w-4 h-4 rounded-full ${selectedCompany === "google" ? "bg-green-500" : "bg-gray-500"
                                }`}
                        ></span>
                        Google
                    </button>
                    <button
                        className={`flex items-center justify-center gap-2 bg-blue-100 rounded px-4 py-3 text-black hover:bg-blue-300 ${selectedCompany === "amazon" ? "border-2 border-green-500" : ""
                            }`}
                        onClick={() => setSelectedCompany("amazon")}
                    >
                        <span
                            className={`w-4 h-4 rounded-full ${selectedCompany === "amazon" ? "bg-green-500" : "bg-gray-500"
                                }`}
                        ></span>
                        Amazon
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        className={`flex items-center justify-center gap-2 bg-blue-100 rounded px-4 py-3 text-black hover:bg-blue-300 ${selectedCompany === "facebook1" ? "border-2 border-green-500" : ""
                            }`}
                        onClick={() => setSelectedCompany("facebook1")}
                    >
                        <span
                            className={`w-4 h-4 rounded-full ${selectedCompany === "facebook1" ? "bg-green-500" : "bg-gray-500"
                                }`}
                        ></span>
                        Facebook
                    </button>
                    <button
                        className={`flex items-center justify-center gap-2 bg-blue-100 rounded px-4 py-3 text-black hover:bg-blue-300 ${selectedCompany === "facebook2" ? "border-2 border-green-500" : ""
                            }`}
                        onClick={() => setSelectedCompany("facebook2")}
                    >
                        <span
                            className={`w-4 h-4 rounded-full ${selectedCompany === "facebook2" ? "bg-green-500" : "bg-gray-500"
                                }`}
                        ></span>
                        Facebook
                    </button>
                </div>

                {/* Info Box */}
                <div className="bg-slate-300 rounded-lg p-4 flex items-center justify-start gap-3">
                    <Info className="w-6 h-6 text-black mt-1" />
                    <p className="text-black">
                        Microsoft has authorized you to take an assessment for C#, SQL
                        Server, Web2.0, and React.
                    </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2">Select Country</label>
                        <div className="relative">
                            <select className="w-full  rounded px-4 py-3 text-black appearance-none focus:outline-none">
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

                    <div>
                        <label className="block mb-2">Select Zip Code</label>
                        <div className="relative">
                            <select className="w-full  rounded px-4 py-3 text-black appearance-none focus:outline-none">
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

                    <div>
                        <label className="block mb-2">Select Testing Centre</label>
                        <div className="relative">
                            <select className="w-full  rounded px-4 py-3 text-black appearance-none focus:outline-none">
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

                    <div>
                        <label className="block mb-2">Select Testing Centre</label>
                        <div className="relative">
                            <select className="w-full  rounded px-4 py-3 text-black appearance-none focus:outline-none">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2">Select a Date</label>
                            <div className="flex items-center  rounded px-4 py-3 text-black border-4 border-slate-300 hover:border-slate-400">
                                <input
                                    type="date"
                                    placeholder="DD/MM/YYYY"
                                    className="w-full bg-transparent focus:outline-none text-center"
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Select Time</label>
                            <div className="flex items-end rounded px-4 py-3 text-black border-4 border-slate-300 hover:border-slate-400">
                                <input
                                    type="time"
                                    className="w-full bg-transparent text-black text-center focus:outline-none"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-8 ">
                    <button className="px-20 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold w-[300px] text-lg"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
