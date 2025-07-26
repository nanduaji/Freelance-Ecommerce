import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    name: "Boat Rockerz 550 Over-Ear Wireless Headphones",
    price: 2499,
    originalPrice: 3499,
    discount: "29%",
    image: "./boat1.webp",
    details: "Color: Black",
  },
  {
    id: 2,
    name: "Noise Air Buds Mini Truly Wireless Earbuds",
    price: 1299,
    originalPrice: 1999,
    discount: "35%",
    image: "./earbuds.webp",
    details: "Color: White",
  },
  {
    id: 3,
    name: "JBL Go 3 Portable Bluetooth Speaker",
    price: 2999,
    originalPrice: 3999,
    discount: "25%",
    image: "./bluetoothspeaker.webp",
    details: "Color: Red",
  },
];


const icons = [{ icon: "favorite", path: "/" }];
const youMayAlsoLike = [
        {
            image: './boat1.webp',
            heading: 'Wireless Bluetooth Headphones',
            price: '₹2,499'
        },
        {
            image: './fitnessband.webp',
            heading: 'Smart Fitness Band',
            price: '₹1,299'
        },
        {
            image: './powerbank.webp',
            heading: 'Portable Power Bank 10000mAh',
            price: '₹999'
        },
        {
            image: './earbuds.webp',
            heading: 'Noise Cancelling Earbuds',
            price: '₹3,999'
        },
        {
            image: './wirelessmouse.webp',
            heading: 'Wireless Mouse',
            price: '₹599'
        },
        {
            image: './bluetoothspeaker.webp',
            heading: 'Mini Bluetooth Speaker',
            price: '₹799'
        },
        {
            image: './tripod.webp',
            heading: 'Smartphone Tripod Stand',
            price: '₹649'
        },
        {
            image: './charger.webp',
            heading: 'USB Type-C Fast Charger',
            price: '₹1,199'
        }
    ];

const CartPage = () => {
    const navigateTo = useNavigate();
    const [selectedItemsCount, setSelectedItemsCount] = useState(0);
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    const discount = 710;
    const platformFee = 20;
    const finalAmount = total - discount + platformFee;
    const handleCheckBoxChange = (isChecked) => {
        console.log("isChecked",isChecked)
        setSelectedItemsCount(prev =>
            isChecked ? prev + 1 : Math.max(prev - 1, 0)
        );
    };


    return (
        <div className="bg-gray-100 min-h-screen  px-4">
            {/* Header */}
            <header className="bg-white shadow-sm mb-6">
                <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Left: Logo and Navigation */}
                    <div className="flex items-center gap-8">
                        <img
                            src="./caremall.png"
                            alt="Caremall Logo"
                            className="w-28 sm:w-20 md:w-28 lg:w-36 xl:w-44"
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigateTo('/')}
                        />
                        <nav className="hidden sm:flex items-center justify-center gap-4 text-sm text-gray-700 mt-4">
                            {/* My Cart */}
                            <div className="flex items-center gap-1 text-orange-600">
                                <span className="material-symbols-outlined">shopping_cart</span>
                                <span>My Cart</span>
                            </div>

                            {/* Divider */}
                            <span className="material-symbols-outlined text-gray-400">chevron_right</span>

                            {/* Address */}
                            <div className="flex items-center gap-1 text-gray-600">
                                <span className="material-symbols-outlined">location_on</span>
                                <span>Address</span>
                            </div>

                            {/* Divider */}
                            <span className="material-symbols-outlined text-gray-400">chevron_right</span>

                            {/* Payment */}
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
                                className="w-10 h-10 flex items-center justify-center border rounded-md bg-white hover:shadow cursor-pointer"
                                onClick={() => (window.location.href = icon.path)}
                            >
                                <span className="material-symbols-outlined text-gray-600 text-base">
                                    {icon.icon}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </header>
            {/* Main Grid */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
                {/* Cart Items */}
                <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-bold mb-4">My Cart</h2>

                    <div className="flex justify-between items-center bg-pink-50 p-3 rounded text-sm mb-4">
                        <span>📦 Check Delivery time & Service</span>
                        <button className="bg-white border border-red-600 text-red-600 px-3 py-1 rounded text-sm font-semibold">
                            Enter PIN Code
                        </button>
                    </div>
                    <p className="lead">{selectedItemsCount}/{cartItems.length} Selected</p>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col md:flex-row items-center justify-between border-b py-4 gap-4"
                        >
                            <div className="flex items-center gap-4 w-full">
                                <input type="checkbox" className="accent-red-600" onChange={(e) => handleCheckBoxChange(e.target.checked)} />
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-contain bg-white"
                                />
                                <div className="flex-1">
                                    <p className="font-semibold text-sm">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.details}</p>
                                    <div className="text-sm mt-1 flex items-center gap-2">
                                        <span className="font-bold text-black">₹{item.price}</span>
                                        <span className="line-through text-xs text-gray-400">
                                            ₹{item.originalPrice}
                                        </span>
                                        <span className="text-green-600 text-xs font-bold">
                                            {item.discount} OFF
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">
                                        7 Days Return Available
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-2 text-sm">
                                <button className="text-red-500 font-medium">Remove</button>
                                <button className="text-gray-500">Wishlist</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Price Summary */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold mb-4">Coupons</h3>
                    <div className="flex mb-4">
                        <input
                            type="text"
                            placeholder="Enter coupon code"
                            className="flex-1 border px-3 py-2 rounded-l-md text-sm"
                        />
                        <button className="bg-red-600 text-white px-3 py-2 rounded-r-md text-sm">
                            Apply Coupon
                        </button>
                    </div>

                    <h3 className="text-lg font-bold mb-2">Price Details</h3>
                    <div className="text-sm text-gray-700 space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span>Total MRP</span>
                            <span>₹{total}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span className="text-green-600">-₹{discount}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Coupon Discount</span>
                            <span className="text-red-600 cursor-pointer underline">Apply Coupon</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Platform Fee</span>
                            <span>₹{platformFee}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-bold text-black pt-2">
                            <span>Total Amount</span>
                            <span>₹{finalAmount}</span>
                        </div>
                    </div>

                    <button className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700">
                        Place Order
                    </button>
                </div>
            </div>
            {/* You May Also Like Section */}
            <div className="max-w-7xl mx-auto mt-6 px-4">
                <h3 className="text-xl font-semibold mb-4">You May Also Like</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {youMayAlsoLike.map((product, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-md p-2 relative">
                            <div className="bg-gray-100 rounded-lg p-2">
                                <div className="flex justify-end items-center space-x-1 mb-1">
                                    <span className="material-symbols-outlined text-gray-700 text-sm p-1 bg-white rounded-full cursor-pointer hover:bg-gray-200">
                                        favorite
                                    </span>
                                </div>
                                <img
                                    src={product.image}
                                    alt={product.heading}
                                    className="w-full h-40 object-contain rounded-md"
                                />
                            </div>

                            <p className="mt-2 text-sm">{product.heading}</p>
                            <p className="text-sm font-semibold">Rs.{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Download App Section */}
            <div className="max-w-7xl mx-auto mt-8 px-4 bg-red-600 text-white py-10 rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-0 md:gap-0">
                    <div className="md:w-[52%]">
                        <h3 className="text-2xl font-bold mb-2">Unlock Exclusive Deals!</h3>
                        <p className="mb-4">Download the Caremall App</p>
                        <div className="flex justify-center md:justify-start gap-4 mt-4">
                            <img
                                src="./googleplay.png"
                                alt="Google Play"
                                className="w-32  rounded-lg bg"
                            />
                            <img
                                src="./applestore.png"
                                alt="Apple App Store"
                                className="w-32  rounded-lg"
                            />
                        </div>

                    </div>

                    {/* Cover Photo */}
                    <div className="md:w-[35%] flex justify-center">
                        <img
                            src="./coverphoto.png"
                            alt="App Promo"
                            className="w-60 md:w-72 transform -rotate-6 rounded-lg"
                        />
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="bg-black text-white py-8 px-4 mt-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 text-sm">
                    <div>
                        <h4 className="font-semibold mb-2">Newsletter</h4>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2 rounded text-black"
                        />
                        <button className="bg-red-600 mt-2 px-4 py-2 rounded text-white">Subscribe</button>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Customer Service</h4>
                        <p>FAQ</p>
                        <p>Returns</p>
                        <p>Shipping</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Store Info</h4>
                        <p>Contact Us</p>
                        <p>Careers</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Care Mall</h4>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Terms</p>
                    </div>
                </div>
                <p className="text-center text-xs mt-4">© 2025 Caremall. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default CartPage;
