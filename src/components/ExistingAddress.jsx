import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const addresses = [
    {
        id: 1,
        label: 'Home',
        details: 'Unit 7B, Spectra Business Park, Chandivali, Mumbai - 400072',
        name: 'Ravi Kumar',
        phone: '+91 7834244324',
    },
    {
        id: 2,
        label: 'Work',
        details: 'C-Wing, 12th Floor, Global Business Hub, Kharadi, Pune - 411014',
        name: 'Ravi Kumar',
        phone: '+91 7834244324',
    },
];

const icons = [{ icon: 'favorite', path: '/' }];

const AddressPage = () => {
    const navigateTo = useNavigate();
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
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
                            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                            <div className="flex items-center gap-1 text-gray-600">
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


            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10 bg-white mt-6 rounded shadow items-stretch">
                {/* Left Section */}
                <div className="w-full lg:w-2/3 flex flex-col">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Address Details</h2>
                    <div className="border border-gray-200 rounded-md p-6 w-full h-full flex-1">
                        {!showForm ? (
                            <>
                                <button
                                    onClick={() => setShowForm(true)}
                                    className="border border-gray-300 py-2 px-4 text-sm font-medium rounded mb-6"
                                >
                                    + Add New Address
                                </button>

                                <div className="space-y-4">
                                    {addresses.map((addr) => (
                                        <div key={addr.id} className="border rounded p-4 flex items-start justify-between">
                                            <label className="flex items-start gap-3 w-full">
                                                <input
                                                    type="radio"
                                                    name="address"
                                                    className="mt-1"
                                                    checked={selectedAddress === addr.id}
                                                    onChange={() => setSelectedAddress(addr.id)}
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-gray-700">{addr.label}</h3>
                                                    <p className="text-sm text-gray-600">{addr.details}</p>
                                                    <p className="text-sm text-gray-600">
                                                        {addr.name}, {addr.phone}
                                                    </p>
                                                </div>
                                            </label>
                                            <div className="flex gap-2 mt-1">
                                                <button className="text-sm text-red-500 hover:underline">Remove</button>
                                                <button className="text-sm text-blue-500 hover:underline">Edit</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (

                            <form className="rounded-md w-full max-w-3xl">
                                <h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Enter Name here"
                                            className="w-full border border-gray-300 px-4 py-2 rounded text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="text"
                                            id="number"
                                            placeholder="Enter Number"
                                            className="w-full border border-gray-300 px-4 py-2 rounded text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
                                        <input
                                            type="text"
                                            id="pincode"
                                            placeholder="Enter Pin Code"
                                            className="w-full border border-gray-300 px-4 py-2 rounded text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="locality" className="block text-sm font-medium text-gray-700 mb-1">Locality / Town</label>
                                        <input
                                            type="text"
                                            id="locality"
                                            placeholder="Enter Locality/Town"
                                            className="w-full border border-gray-300 px-4 py-2 rounded text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City / District</label>
                                        <input
                                            type="text"
                                            id="city"
                                            placeholder="Enter City/District"
                                            className="w-full border border-gray-300 px-4 py-2 rounded text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                        <input
                                            type="text"
                                            id="state"
                                            placeholder="Enter State"
                                            className="w-full border border-gray-300 px-4 py-2 rounded text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        placeholder="Enter Address (House No, Building, Street, Area)"
                                        className="w-full border border-gray-300 px-4 py-2 rounded text-sm"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        Please update flat/house no and society/apartment details
                                    </p>
                                </div>

                                <div className="flex gap-6 items-center mt-6">
                                    <span className="text-sm font-medium text-gray-700">Address Type</span>
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="radio" name="addressType" className="accent-red-600" />
                                        Home
                                    </label>
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="radio" name="addressType" className="accent-red-600" />
                                        Work
                                    </label>
                                </div>

                                <div className="mt-4">
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" className="accent-red-600" />
                                        Mark this as my default address
                                    </label>
                                </div>
                                <br />
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="w-full md:w-[686px] h-[42px] px-4 py-[10px] text-red-600 border border-red-600 rounded-md font-medium text-sm hover:bg-red-50 transition-all"
                                    >
                                        Save Address
                                    </button>
                                </div>
                                <br />
                                <div className="flex justify-center">
                                    {showForm && (
                                        <button
                                            onClick={() => setShowForm(false)}
                                            className="w-full md:w-[686px] h-[42px] px-4 py-[10px] text-red-600 border border-red-600 rounded-md font-medium text-sm hover:bg-red-50 transition-all"
                                        >
                                            Go Back
                                        </button>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* Right Section */}
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
            </main>
        </div>
    );
};

export default AddressPage;
