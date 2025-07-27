import React from "react";

export default function Login() {
    return (
        <div className="min-h-screen bg-white font-dm relative">

            {/* Logo at Top Left */}
            <div className="absolute top-8 left-8">
                <img src="/caremall.png" alt="Care Mall" className="h-8" />
            </div>

            {/* Centered Login Box */}
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-[392px] p-8 rounded">
                    <h2 className="text-2xl font-semibold text-left">Login</h2>
                    <p className="text-sm text-gray-600 text-left mb-4">
                        Welcome back! please enter your details.
                    </p>

                    <form>
                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Email here"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Enter Password here"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">
                                    👁️
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <label className="flex items-center text-sm">
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <a href="#" className="text-sm text-red-500 hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-sm text-[#FF0000] mt-4">or OTP Login</p>

                    <div className="flex items-center gap-4 my-4">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="text-gray-500 text-sm">Or</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    <div className="flex justify-between gap-2 mt-4">
                        <button className="flex-1 border py-2 rounded-md flex justify-center items-center gap-2 hover:bg-gray-100">
                            <img src="/google-logo.png" alt="Google" className="w-5" />
                            Google
                        </button>
                        <button className="flex-1 border py-2 rounded-md flex justify-center items-center gap-2 hover:bg-gray-100">
                            <img src="/facebook-logo.png" alt="Facebook" className="w-5" />
                            Facebook
                        </button>
                    </div>

                    <p className="flex justify-center mt-20 text-sm text-gray-700">
                        Don't have an account?{" "}
                        <a href="/signup" className="ml-1 text-[#FF0000] hover:underline">
                            Sign Up?
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
