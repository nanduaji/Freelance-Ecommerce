import React from "react";

const SetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 font-dm py-10 relative">
      
      {/* Logo in a fixed safe position */}
      <div className="absolute top-6 left-6">
        <img src="/caremall.png" alt="Care Mall" className="h-8" />
      </div>

      {/* Card */}
      <div className="w-full max-w-md rounded-md  p-6 bg-white z-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Set Password?</h2>
        <p className="text-sm text-gray-600 mb-6">Set your New Password.</p>

        {/* Form */}
        <form className="space-y-6">
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">
                key
              </span>
              <input
                type="password"
                placeholder="Enter New Password here"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <p className="text-xs text-gray-500 opacity-70 mt-1">
              Passwords must be at least 8 characters long.
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative mt-1">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">
                key
              </span>
              <input
                type="password"
                placeholder="Confirm Password here"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetPassword;
