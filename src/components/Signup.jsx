import axios from "axios";
import React, { useState } from "react";

export default function SignUp() {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!userDetails.name.trim()) newErrors.name = "Name is required";
        if (!userDetails.email.trim()) newErrors.email = "Email is required";
        else if (!emailRegex.test(userDetails.email)) newErrors.email = "Invalid email format";

        if (!userDetails.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
        else if (userDetails.phoneNumber.length < 10 || userDetails.phoneNumber.length > 15) {
            newErrors.phoneNumber = "Phone number must be 10–15 digits";
        }

        if (!userDetails.password) newErrors.password = "Password is required";
        else if (userDetails.password.length < 8) newErrors.password = "Password must be at least 8 characters";

        if (!userDetails.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
        else if (userDetails.confirmPassword !== userDetails.password)
            newErrors.confirmPassword = "Passwords do not match";

        return newErrors;
    };

    const handleSubmit = async () => {
        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            console.log("Form submitted", userDetails);

            try {
                const signUpResponse = await axios.post("https://api.caremall.in/signup", userDetails);
                console.log("Sign Up Response:", signUpResponse);

                if (signUpResponse.status === 200) {
                    alert("Sign up successful!");
                    // window.location.href = "/login";
                } else {
                    alert("Sign up failed. Please try again.");
                }
            } catch (error) {
                console.error("Sign up error:", error);
                alert("Something went wrong. Please try again.");
            }
        }
    };


    return (
        <div className="min-h-screen bg-white font-dm relative">
            <div className="absolute top-8 left-8">
                <img src="/caremall.png" alt="Care Mall" className="h-8" />
            </div>

            <div className="flex items-center justify-center min-h-screen pt-12 sm:pt-20">
                <div className="w-full max-w-[392px] p-8 rounded">
                    <h2 className="text-2xl font-semibold text-left">Create an Account</h2>
                    <p className="text-sm text-gray-600 text-left mb-4">
                        Welcome! please enter your details.
                    </p>

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>
                        {/* Name */}
                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700">Full Name</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">person</span>
                                <input
                                    type="text"
                                    placeholder="Enter Name here"
                                    className="w-full pl-10 pr-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={userDetails.name}
                                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                />
                            </div>
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">mail</span>
                                <input
                                    type="email"
                                    placeholder="Enter Email here"
                                    className="w-full pl-10 pr-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={userDetails.email}
                                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone Number */}
                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700">Phone Number</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">call</span>
                                <input
                                    type="tel"
                                    placeholder="Enter Phone Number"
                                    className="w-full pl-10 pr-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={userDetails.phoneNumber}
                                    onChange={(e) => setUserDetails({ ...userDetails, phoneNumber: e.target.value })}
                                />
                            </div>
                            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">key</span>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="w-full pl-10 pr-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={userDetails.password}
                                    onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500">key</span>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full pl-10 pr-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={userDetails.confirmPassword}
                                    onChange={(e) => setUserDetails({ ...userDetails, confirmPassword: e.target.value })}
                                />
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="flex items-center gap-4 my-4">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="text-gray-500 text-sm">Or</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    {/* Social */}
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
                        Already have an account?
                        <a href="/login" className="ml-1 text-[#FF0000] hover:underline">Login?</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
