import React from "react";

export default function OTP() {
    return (
        <div className="min-h-screen bg-gray-100 font-dm relative">

            {/* Logo Top Left */}
            <div className="absolute top-8 left-8">
                <img src="/caremall.png" alt="Care Mall" className="h-8" />
            </div>

            {/* OTP Card */}
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-[392px] p-8 rounded-md">
                    <h2 className="text-2xl font-semibold text-left">OTP Verification</h2>
                    <p className="text-sm text-gray-600 text-left mb-6">
                        Enter the 6 digit code sent to +91 xxxxxxxx75
                    </p>

                    <form id="otp-form">
                        <div className="flex items-center justify-between gap-2 mb-6">
                            {[...Array(6)].map((_, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    placeholder="0"
                                    maxLength="1"
                                    pattern="\d*"
                                    className="w-12 h-12 border border-gray-300 text-center text-2xl font-bold text-slate-900 bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                                />
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 opacity-70 text-left mb-5">
                            Resend Code in <span className="text-red-500">00:25</span>
                        </p>
                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
                        >
                            Verify OTP
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-3">
                        Wrong Number?{" "}
                        <a href="/login" className="text-[#FF0000] font-medium hover:underline">
                            Edit Mobile Number
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
