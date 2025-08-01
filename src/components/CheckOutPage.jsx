import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const icons = [{ icon: "favorite", path: "/" }];

const CheckOutPage = () => {
    const navigateTo = useNavigate();
    return (
        <div className="bg-gray-100 min-h-screen px-4 font-dm">
            {/* Header */}
            <header className="bg-white shadow-sm mb-6">
                <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Left: Logo + Breadcrumb Nav */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 w-full">
                        <img
                            src="./caremall.png"
                            alt="Caremall Logo"
                            className="w-28 cursor-pointer"
                            onClick={() => navigateTo('/')}
                        />

                        {/* Breadcrumb Navigation */}
                        <nav className="flex flex-wrap sm:flex-nowrap items-center gap-2 text-sm text-gray-700">
                            <div className="flex items-center gap-1 text-orange-600">
                                <span className="material-symbols-outlined">shopping_cart</span>
                                <span>My Cart</span>
                            </div>
                            <span className="material-symbols-outlined text-orange-400">chevron_right</span>
                            <div className="flex items-center gap-1 text-orange-600">
                                <span className="material-symbols-outlined">location_on</span>
                                <span>Address</span>
                            </div>
                            <span className="material-symbols-outlined text-orange-400">chevron_right</span>
                            <div className="flex items-center gap-1 text-orange-600">
                                <span className="material-symbols-outlined">credit_card</span>
                                <span>Payment</span>
                            </div>
                        </nav>
                    </div>

                    {/* Right: Icons */}
                    <div className="flex gap-2">
                        {icons.map((icon, index) => (
                            <div
                                key={index}
                                className="w-10 h-10 flex items-center justify-center border rounded-md hover:shadow cursor-pointer"
                                onClick={() => (window.location.href = icon.path)}
                            >
                                <span className="material-symbols-outlined text-gray-600">{icon.icon}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </header>
            <div className="max-w-7xl mx-auto px-4 lg:px-6 bg-white rounded shadow-lg p-6">
                {/* Content Row */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left: Payment Options */}
                    <div className="w-full lg:w-2/3 space-y-6 text-sm text-gray-700">
                        <h2 className="text-xl font-semibold text-gray-800">Select Payment Option</h2>

                        {/* PayPal */}
                        <div className="space-y-3 border rounded-md p-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="payment" className="accent-red-600" />
                                PayPal
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                    className="h-5 ml-auto"
                                    alt="PayPal"
                                />
                            </label>
                        </div>

                        {/* Credit Card */}
                        <div className="space-y-3 border rounded-md p-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="payment" defaultChecked className="accent-red-600" />
                                Credit Card
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                                    className="h-5 ml-auto"
                                    alt="Visa"
                                />
                            </label>

                            <input
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                className="w-full border border-gray-300 px-4 py-2 rounded text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Enter Name here"
                                className="w-full border border-gray-300 px-4 py-2 rounded text-sm"
                            />

                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    className="w-1/2 border border-gray-300 px-4 py-2 rounded text-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    className="w-1/2 border border-gray-300 px-4 py-2 rounded text-sm"
                                />
                            </div>
                        </div>

                        {/* Google Pay */}
                        {/* Google Pay */}
                        <div className="space-y-3 border rounded-md p-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="payment" className="accent-red-600" />
                                Google Pay
                                <img
                                    src="./gpay.png"
                                    className="h-10 w-auto ml-auto object-contain"
                                    alt="Google Pay"
                                />
                            </label>
                        </div>
                        {/* Cash on Delivery */}
                        <div className="border rounded-md p-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="payment" className="accent-red-600" />
                                Cash on Delivery
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/10480/10480096.png"
                                    className="h-5 ml-auto"
                                    alt="Cash on Delivery"
                                />
                            </label>
                        </div>
                    </div>

                    {/* Right: Price Details */}
                    <div className="w-full lg:w-1/3 flex flex-col">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Price Details</h2>
                        <div className="border border-gray-200 rounded-md p-6 w-full h-full flex-1">
                            <div className="text-sm text-gray-600 space-y-2">
                                <div className="flex justify-between">
                                    <span>Total MRP</span>
                                    <span>₹4310</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Discount</span>
                                    <span>-₹1700</span>
                                </div>
                                <div className="flex justify-between text-red-600">
                                    <span>Coupon Discount</span>
                                    <span className="cursor-pointer hover:underline">Apply Coupon</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Platform Fee</span>
                                    <span>₹20</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between font-bold text-black">
                                    <span>Total Amount</span>
                                    <span>₹2630</span>
                                </div>
                            </div>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 w-full mt-6 rounded">
                                Confirm Address
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default CheckOutPage;
