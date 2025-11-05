"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

interface LoginFormProps {
  onLogin: (userType: "employer" | "employee") => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"employer" | "employee">("employee");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(userType);
  };

  return (
    <div className="text-black p-4 sm:p-6 md:p-8 w-full max-w-md mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 tracking-wide">
        Login
      </h1>
      <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
        Sign in to access your account
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        {/* User Type Selection */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <button
            type="button"
            onClick={() => setUserType("employee")}
            className={`flex items-center justify-center py-2.5 sm:py-3 px-2 sm:px-4 rounded-md font-medium text-sm sm:text-base transition ${
              userType === "employee"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                : "border-2 border-blue-500 text-black hover:border-blue-600"
            }`}
          >
            Employee
          </button>
          <button
            type="button"
            onClick={() => setUserType("employer")}
            className={`flex items-center justify-center py-2.5 sm:py-3 px-2 sm:px-4 rounded-md font-medium text-sm sm:text-base transition ${
              userType === "employer"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                : "border-2 border-blue-500 text-black hover:border-blue-600"
            }`}
          >
            Employer
          </button>
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-semibold text-slate-600 text-sm sm:text-base"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-white rounded-md pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 font-semibold text-slate-600 text-sm sm:text-base"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-white rounded-md pl-10 pr-10 py-2.5 sm:py-3 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              ) : (
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm transition"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2.5 sm:py-3 rounded-md bg-green-500 hover:bg-green-600 font-semibold text-white text-sm sm:text-base transition"
        >
          Login
        </button>

        {/* Sign Up Link */}
        <div className="text-center mt-3 sm:mt-4">
          <p className="text-gray-500 text-sm sm:text-base">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium transition"
            >
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}