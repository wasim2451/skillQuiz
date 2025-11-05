"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import LoginForm from "@/components/login-form";
import EmployeeRegistration from "@/components/employee-registeration";
import ScheduleAssessment from "@/components/schedule-assessment";
import EmployerRegistration from "@/components/employer-registeration";
import EmployerProfile from "@/components/employer-profile";
import EmployerAssessmentRequest from "@/components/employer-assessment-request";
import EmployerCandidateList from "@/components/employer-candidate-list";
import SuccessMessage from "@/components/success-message";

export default function ServicesPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"employer" | "employee" | null>(
    null
  );

  const [employeeRegistrationSuccess, setEmployeeRegistrationSuccess] =
    useState(false);
  const [employerRegistrationSuccess, setEmployerRegistrationSuccess] =
    useState(false);

  const [employeeScreen, setEmployeeScreen] = useState<
    "registration" | "assessment"
  >("registration");
  const [employerScreen, setEmployerScreen] = useState<
    "registration" | "profile" | "assessment" | "candidates"
  >("registration");

  const handleLogin = (type: "employer" | "employee") => {
    setIsLoggedIn(true);
    setUserType(type);

    if (type === "employer") {
      setEmployerScreen("registration");
    } else {
      setEmployeeScreen("registration");
    }
  };

  const handleEmployeeRegistrationComplete = () => {
    setEmployeeRegistrationSuccess(true);
  };

  const handleEmployerRegistrationComplete = () => {
    setEmployerRegistrationSuccess(true);
  };

  const continueToEmployeeAssessment = () => {
    setEmployeeRegistrationSuccess(false);
    setEmployeeScreen("assessment");
  };

  const continueToEmployerProfile = () => {
    setEmployerRegistrationSuccess(false);
    setEmployerScreen("profile");
  };

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <div className="relative z-10 pt-20 sm:pt-24">
        <div className="container mx-auto px-3 sm:px-6 lg:px-10 max-w-6xl py-6 sm:py-10 text-sm sm:text-base">
          {!isLoggedIn ? (
            <div className="bg-slate-100 rounded-lg p-4 sm:p-8 backdrop-blur-sm max-w-sm sm:max-w-md md:max-w-lg mx-auto shadow-md">
              <LoginForm onLogin={handleLogin} />
            </div>
          ) : (
            <>
              {userType === "employee" && employeeScreen === "assessment" && (
                <button
                  onClick={() => setEmployeeScreen("registration")}
                  className="text-white mb-3 sm:mb-5 bg-[#1753d4] p-2 rounded-full hover:bg-blue-600 transition"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              )}

              {userType === "employee" ? (
                <div className="bg-slate-100 rounded-lg p-4 sm:p-8 shadow-md">
                  {employeeRegistrationSuccess ? (
                    <SuccessMessage
                      title="Registration Successful!"
                      message="Your employee account has been created successfully. You can now proceed to schedule your assessment."
                      buttonText="Continue to Assessment"
                      onContinue={continueToEmployeeAssessment}
                    />
                  ) : employeeScreen === "registration" ? (
                    <EmployeeRegistration
                      onNext={handleEmployeeRegistrationComplete}
                    />
                  ) : (
                    <ScheduleAssessment />
                  )}
                </div>
              ) : (
                <>
                  {employerRegistrationSuccess ? (
                    <div className="bg-slate-100 rounded-lg p-4 sm:p-8 backdrop-blur-sm shadow-md">
                      <SuccessMessage
                        title="Registration Successful!"
                        message="Your employer account has been created successfully. You can now access all employer features."
                        buttonText="Continue to Profile"
                        onContinue={continueToEmployerProfile}
                      />
                    </div>
                  ) : employerScreen === "registration" ? (
                    <div className="bg-slate-200 rounded-lg p-4 sm:p-8 backdrop-blur-sm shadow-md">
                      <EmployerRegistration
                        onSubmit={handleEmployerRegistrationComplete}
                      />
                    </div>
                  ) : (
                    <>
                      {/* Responsive Tabs */}
                      <div className="bg-slate-100 rounded-lg mb-3 sm:mb-6 shadow-sm overflow-hidden">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 text-center">
                          <button
                            onClick={() => setEmployerScreen("profile")}
                            className={`py-2 sm:py-3 px-2 sm:px-4 font-semibold transition ${
                              employerScreen === "profile"
                                ? "bg-[#1753d4] text-white text-lg sm:text-xl rounded-md"
                                : "hover:bg-blue-100 text-black"
                            }`}
                          >
                            Profile
                          </button>
                          <button
                            onClick={() => setEmployerScreen("assessment")}
                            className={`py-2 sm:py-3 px-2 sm:px-4 font-semibold transition ${
                              employerScreen === "assessment"
                                ? "bg-[#1753d4] text-white text-lg sm:text-xl rounded-md"
                                : "hover:bg-blue-100 text-black"
                            }`}
                          >
                            Assessment Request
                          </button>
                          <button
                            onClick={() => setEmployerScreen("candidates")}
                            className={`py-2 sm:py-3 px-2 sm:px-4 font-semibold transition ${
                              employerScreen === "candidates"
                                ? "bg-[#1753d4] text-white text-lg sm:text-xl rounded-md"
                                : "hover:bg-blue-100 text-black"
                            }`}
                          >
                            Candidate List
                          </button>
                        </div>
                      </div>

                      {/* Employer Content */}
                      <div className="bg-slate-100 rounded-lg p-4 sm:p-6 lg:p-8 mt-4 sm:mt-8 backdrop-blur-sm shadow-md">
                        {employerScreen === "profile" && <EmployerProfile />}
                        {employerScreen === "assessment" && (
                          <EmployerAssessmentRequest />
                        )}
                        {employerScreen === "candidates" && (
                          <EmployerCandidateList />
                        )}
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
