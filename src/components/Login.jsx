import React, { useState } from "react";
import axios from "axios";

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setError("Please fill in both fields.");
            return;
        }

        try {
            const response = await axios.post("https://api.caremall.in/login", formData);
            console.log("response", response.data);
            if (response.status === 200) {
                alert("Login successful!");
            } else {
                setError("Invalid credentials. Please try again.");
            }
        } catch (err) {
            console.error("Login failed:", err);
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="min-h-screen bg-white font-dm relative">
            <div className="absolute top-8 left-8">
                <img src="/caremall.png" alt="Care Mall" className="h-8" />
            </div>

            <div className="flex items-center justify-center min-h-screen pt-16">
                <div className="w-full max-w-[392px] p-8 rounded">
                    <h2 className="text-2xl font-semibold text-left">Login</h2>
                    <p className="text-sm text-gray-600 text-left mb-4">
                        Welcome back! please enter your details.
                    </p>

                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 mt-1">
                                    <span className="material-symbols-outlined">mail</span>
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email here"
                                    className="w-full pl-10 pr-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 mt-1">
                                    <span className="material-symbols-outlined">key</span>
                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password here"
                                    className="w-full pl-10 pr-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

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
                        Don't have an account?
                        <a href="/signup" className="ml-1 text-[#FF0000] hover:underline">
                            Sign Up?
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
