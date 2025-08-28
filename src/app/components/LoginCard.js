"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoginCard() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Please enter valid mobile number");
    } else {
      setError("");
      alert("OTP Sent!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[400px]">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-blue-600">Just</span>
          <span className="text-2xl font-bold text-orange-500">dial</span>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800">Welcome</h2>
        <p className="text-gray-500 text-sm mb-6">
          Login for a seamless experience
        </p>

        {/* Mobile Input */}
        <div className="mb-2">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <span className="text-gray-500 pr-2">+91</span>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter Mobile Number*"
              className="flex-1 outline-none text-gray-700"
            />
          </div>
        </div>
        <p className="text-xs text-gray-400">* Indicates mandatory fields</p>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        {/* Checkbox */}
        <div className="flex items-center mt-4 space-x-2">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 rounded"
            defaultChecked
          />
          <p className="text-sm text-gray-700">
            I Agree to <span className="text-blue-600">Terms and Conditions</span>
          </p>
        </div>
        <p className="text-sm text-gray-500 underline cursor-pointer">
          T&C's Privacy Policy
        </p>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700"
        >
          Login with OTP
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-sm text-gray-500">Or Login Using</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50">
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          <span className="text-gray-700 font-medium">Google</span>
        </button>

        {/* Skip */}
        <p className="text-center text-gray-500 text-sm mt-4 cursor-pointer hover:underline">
          Skip
        </p>
      </div>
    </div>
  );
}
