import React from "react";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white-100 px-4 font-dm py-10">
      <div className="w-full max-w-sm px-6 py-5 min-h-[85vh] flex flex-col">
        
        {/* Logo with minimal bottom margin */}
        <div className="absolute top-8 left-8">
                <img src="/caremall.png" alt="Care Mall" className="h-8" />
            </div>

        {/* Main Content - Vertically centered */}
        <div className="flex flex-col justify-center flex-grow">
          <h2 className="text-2xl font-semibold mb-2">Forgot Password?</h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your Mobile number to receive OTP
          </p>

          <form>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter Mobile Number here"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
