import React from "react";

const SetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white-100 px-4 font-dm py-10">
      <div className="w-full max-w-md rounded-md shadow-sm p-6">
        {/* Logo inside the card */}
        <div className="absolute top-8 left-8">
                <img src="/caremall.png" alt="Care Mall" className="h-8" />
            </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Set Password?</h2>
        <p className="text-sm text-gray-600 mb-6">Set your New Password.</p>

        {/* Form */}
        <form className="space-y-12">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter New Password here"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <p className="text-xs text-gray-500 opacity-70 mt-1">
              Passwords must be at least 8 characters long.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password here"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

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
