import React from "react";

export default function SignUp() {
    return (
        <div className="min-h-screen bg-white font-dm relative">
            {/* Logo at Top Left */}
            <div className="absolute top-8 left-8">
                <img src="/caremall.png" alt="Care Mall" className="h-8" />
            </div>

            {/* Centered Login Box */}
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-[392px] p-8 rounded">
                    <h2 className="text-2xl font-semibold text-left">Create an Account</h2>
                    <p className="text-sm text-gray-600 text-left mb-4">
                        Welcome! please enter your details.
                    </p>

                    <form>
                        {/* Full Name Field */}
                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700">Full Name</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">person</span>
                                <input
                                    type="text"
                                    placeholder="Enter Name here"
                                    className="w-full pl-10 pr-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">mail</span>
                                <input
                                    type="email"
                                    placeholder="Enter Email here"
                                    className="w-full pl-10 pr-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">key</span>
                                <input
                                    type="password"
                                    placeholder="Enter Password here"
                                    className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <span className="material-symbols-outlined absolute right-3 top-2.5 text-gray-500 cursor-pointer">
                                    visibility
                                </span>
                            </div>
                            <p className="lead mt-1 text-gray-500 text-sm">
                                Passwords must be 8 characters in length
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-4">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="text-gray-500 text-sm">Or</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    {/* Social Buttons */}
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

                    {/* Redirect */}
                    <p className="flex justify-center mt-20 text-sm text-gray-700">
                        Already have an account?{" "}
                        <a href="/login" className="ml-1 text-[#FF0000] hover:underline">
                            Login?
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
