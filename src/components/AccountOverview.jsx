import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const sidebarItems = [
    { icon: "home", label: "Dashboard" },
    { icon: "person", label: "My Profile Details" },
    { icon: "favorite", label: "Wishlist" },
    { icon: "local_offer", label: "Coupons" },
    { icon: "location_on", label: "Addresses" },
    { icon: "support_agent", label: "Customer Service" },
    { icon: "language", label: "Language" },
    { icon: "logout", label: "Logout" },
];

const mainCards = [
    {
        icon: "inventory_2",
        title: "Orders & Returns",
        desc: "Check on your Order History & Returned products",
    },
    {
        icon: "favorite",
        title: "Wishlist",
        desc: "Check on your favorite items",
    },
    {
        icon: "local_offer",
        title: "Coupons",
        desc: "Manage your coupons for additional discounts",
    },
    {
        icon: "person",
        title: "My Profile Details",
        desc: "Change your profile details",
    },
    {
        icon: "location_on",
        title: "Addresses",
        desc: "Save and manage your addresses for a smooth delivery",
    },
    {
        icon: "support_agent",
        title: "Customer Service",
        desc: "Get help with your order or account",
    },
    {
        icon: "language",
        title: "Language",
        desc: "Set to your preferred Language of comfort",
    },
];

const icons = [
    { icon: "shopping_cart", path: "/cart" },
    { icon: "person", path: "/account" },
    { icon: "favorite", path: "/wishlist" },
];

export default function AccountOverview() {
    const navigateTo = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mostWanted, setMostWanted] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    return (
        <div className="font-dm text-gray-800">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                    {/* Logo + Hamburger */}
                    <div className="flex justify-between w-full md:w-auto items-center">
                        <img
                            src="./caremall.png"
                            alt="Caremall Logo"
                            className="w-28 sm:w-20 md:w-28 lg:w-36 xl:w-44 cursor-pointer"
                            onClick={() => navigateTo("/")}
                        />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="sm:hidden inline-flex items-center p-2 text-gray-600 hover:text-black focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden sm:flex gap-6 text-sm text-gray-700 relative">
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="inline-flex items-center gap-1 text-gray-900 focus:outline-none"
                            >
                                <span>Categories</span>
                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            {isOpen && (
                                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Electronics</a>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fashion</a>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home & Living</a>
                                </div>
                            )}
                        </div>
                        <a href="#new-arrivals">New Arrivals</a>
                        <a href="#most-wanted">Most Wanted</a>
                        <a href="/">Become a seller</a>
                    </nav>

                    {/* Search & Icons */}
                    <form className="w-full max-w-md md:w-96">
                        <div className="relative flex items-center gap-4">
                            <div className="relative w-full max-w-sm">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base">search</span>
                                <input
                                    type="search"
                                    placeholder="Search products..."
                                    className="block w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex gap-2">
                                {icons.map((icon, index) => (
                                    <div
                                        key={index}
                                        className="w-10 h-10 flex items-center justify-center border rounded-md bg-white hover:shadow cursor-pointer"
                                    >
                                        <span
                                            className="material-symbols-outlined text-gray-600 text-base"
                                            onClick={() => (window.location.href = icon.path)}
                                        >
                                            {icon.icon}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </form>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="sm:hidden bg-red-600 text-white p-4 space-y-4">
                        <div>
                            <button
                                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                                className="flex items-center justify-between w-full text-left"
                            >
                                Categories
                                <svg
                                    className={`w-3 h-3 ml-2 transform transition-transform ${categoryDropdownOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            {categoryDropdownOpen && (
                                <div className="ml-4 mt-2 space-y-2 text-sm">
                                    <a href="#clothing">Clothing</a>
                                    <a href="#electronics">Electronics</a>
                                    <a href="#accessories">Accessories</a>
                                </div>
                            )}
                        </div>
                        <a href="#new-arrivals">New Arrivals</a>
                        <a href="#most-wanted">Most Wanted</a>
                        <a href="/">Become a seller</a>
                    </div>
                )}
            </header>

            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 max-w-7xl mx-auto px-6 mt-6">Home / Account / Overview</div>

            {/* Main Section */}
            <section className="max-w-7xl mx-auto mt-6 px-6">
                <div className="grid grid-cols-4 gap-4">
                    {/* Sidebar */}
                    <div
                        className="bg-white border shadow-sm overflow-y-auto"
                        style={{
                            width: "220px",
                            height: "554px",
                            borderRadius: "8px",
                            padding: "24px 16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        {/* Sidebar content */}
                        <h2 className="text-lg font-semibold">Account</h2>
                        <hr />

                        <h2 className="text-red-600 font-medium">Overview</h2>
                        <hr />

                        <div>
                            <p className="text-sm text-gray-600">Orders</p>
                            <br />
                            <h2 className="font-medium" style={{color:'#757575'}} >Orders and Returns</h2>
                        </div>
                        <hr />

                        <div>
                            <p className="text-sm text-gray-600">Credits</p>
                            <br />
                            <h2 className="font-medium" style={{color:'#757575'}}>Coupons</h2>
                        </div>
                        <hr />

                        <div>
                            <p className="text-sm text-gray-600">My Account</p>
                            <br />
                            <h2 className="font-medium" style={{color:'#757575'}}>Profile</h2>
                            <h2 className="font-medium" style={{color:'#757575'}}>Addresses</h2>
                            <h2 className="font-medium" style={{color:'#757575'}}>Customer Service</h2>
                            <h2 className="font-medium" style={{color:'#757575'}}>Delete Account</h2>
                        </div>
                        <hr />

                        <div>
                            <p className="text-sm text-gray-600">Legal</p>
                            <br />
                            <h2 className="font-medium" style={{color:'#757575'}}>Terms Of Service</h2>
                            <h2 className="font-medium" style={{color:'#757575'}}>Privacy Policy</h2>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="col-span-3 bg-white border rounded-lg p-6">
                        Main Content Area
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="bg-[#1a1a1a] text-white py-12 px-4 mt-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm">
                    <div className="sm:col-span-1">
                        <img
                            src="./caremall.png"
                            alt="Caremall Logo"
                            className="w-[147px] h-[40px] block cursor-pointer"
                            onClick={() => navigateTo("/")}
                        />
                        <div className="flex gap-3 mb-4 mt-3">
                            <a href="#"><i className="fab fa-facebook-f text-white text-lg hover:text-blue-400"></i></a>
                            <a href="#"><i className="fab fa-instagram text-white text-lg hover:text-pink-400"></i></a>
                            <a href="#"><i className="fab fa-twitter text-white text-lg hover:text-blue-300"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in text-white text-lg hover:text-blue-500"></i></a>
                        </div>
                        <h4 className="text-base font-bold mb-3">Newsletter</h4>
                        <p className="text-sm mb-3 text-white/80 leading-snug">
                            Subscribe to the newsletter and receive information about promotions and new arrivals
                        </p>
                        <div className="flex items-center bg-white rounded-md overflow-hidden w-[266px] h-[42px] border border-gray-300">
                            <input
                                type="email"
                                placeholder="Enter your email address here"
                                className="px-3 py-2 w-full text-sm text-black outline-none"
                            />
                            <button className="bg-red-600 text-white px-4 text-sm font-medium h-full">Subscribe</button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Customer Service</h4>
                        <p>FAQ</p>
                        <p>Orders</p>
                        <p>Deliveries</p>
                        <p>Payments</p>
                        <p>Returns and refunds</p>
                        <p>Vendor Connect</p>
                        <p>Contact Us</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">About Us</h4>
                        <p>Company</p>
                        <p>Careers</p>
                        <p>Cities we serve</p>
                        <p>Become Care Mall Rider</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Care Mall</h4>
                        <p>News</p>
                        <p>Instant</p>
                        <p>Daily</p>
                        <p>Blog</p>
                    </div>
                </div>

                <p className="text-center text-xs mt-8 text-white/60">Copyright © 2025 Care mall</p>
            </footer>
        </div>

    );
}
