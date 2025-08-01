import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    name: "Boat Rockerz 550 Over-Ear Wireless Headphones",
    price: 2499,
    originalPrice: 3499,
    discount: "29%",
    image: "./headphones.png",
    details: "Color: Black",
  },
  {
    id: 2,
    name: "Noise Air Buds Mini Truly Wireless Earbuds",
    price: 1299,
    originalPrice: 1999,
    discount: "35%",
    image: "./facewash.png",
    details: "Color: White",
  },
  {
    id: 3,
    name: "JBL Go 3 Portable Bluetooth Speaker",
    price: 2999,
    originalPrice: 3999,
    discount: "25%",
    image: "./shirt.png",
    details: "Color: Red",
  },
];


const icons = [{ icon: "favorite", path: "/" }];
const youMayAlsoLike = [
  {
    image: "./headphones.png",
    heading: "Noise Cancelling Earbuds",
    price: "3,999",
  },
  {
    image: "./hoodie.png",
    heading: "Classic Cotton Hoodie",
    price: "999",
  },
  {
    image: "./adidas.png",
    heading: "Adidas Sports Sneakers",
    price: "2,499",
  },
  {
    image: "./designer.png",
    heading: "Designer Handbag",
    price: "4,299",
  },
];

const CartPage = () => {
  const navigateTo = useNavigate();
  const [selectedItemsCount, setSelectedItemsCount] = useState(0);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const discount = 710;
  const platformFee = 20;
  const finalAmount = total - discount + platformFee;
  const handleCheckBoxChange = (isChecked) => {
    console.log("isChecked", isChecked)
    setSelectedItemsCount(prev =>
      isChecked ? prev + 1 : Math.max(prev - 1, 0)
    );
  };


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
              <span className="material-symbols-outlined text-grey-400">chevron_right</span>
              <div className="flex items-center gap-1 text-grey-600">
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
          <p className="lead">
            {selectedItemsCount}/{cartItems.length} Selected
          </p>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between border-b py-4 gap-4"
            >
              {/* Left Section: Image + Details */}
              <div className="flex gap-4">
                {/* Image with checkbox */}
                <div className="relative w-[85px] h-[85px] shrink-0">
                  <input
                    type="checkbox"
                    className="absolute top-1 left-1 z-10 w-4 h-4"
                    onChange={(e) => handleCheckBoxChange(e.target.checked)}
                  />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover border-2 border-gray-300 rounded-md hover:border-red-500 hover:shadow-md transition duration-200"
                  />
                </div>

                {/* Text Details */}
                <div className="flex flex-col justify-between">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.details}</p>
                  <div className="text-sm mt-1 flex items-center gap-2">
                    <span className="font-bold text-black">
                      ₹{item.price}
                    </span>
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

              {/* Right Section: Actions */}
              <div className="flex flex-col items-end gap-2 text-sm mt-2 md:mt-0">
                <button className="text-red-500 font-medium hover:underline">
                  Remove
                </button>
                <button className="text-gray-500 hover:underline">
                  Wishlist
                </button>
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
              <span className="text-red-600 cursor-pointer underline">
                Apply Coupon
              </span>
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
        <div className="flex lg:grid lg:grid-cols-4 gap-3 overflow-x-auto lg:overflow-visible no-scrollbar px-1">
          {youMayAlsoLike.map((product, i) => (
            <div
              key={i}
              className="w-[318px] min-w-[318px] lg:w-auto lg:min-w-0 bg-white rounded-lg shadow-md flex-shrink-0"
            >
              {/* Image wrapper */}
              <div className="relative w-full h-[356px] rounded-md overflow-hidden">
                <span
                  className="material-symbols-outlined absolute top-2 right-2 text-gray-700 text-sm cursor-pointer z-10 hover:bg-gray-200"
                  style={{
                    backgroundColor: "white",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  favorite
                </span>

                <img
                  src={product.image}
                  alt={product.heading}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product info */}
              <div className="flex flex-col justify-between h-[96px] mt-3 w-full px-3 pb-3">
                <p className="text-[16px] text-[#303030] line-clamp-1">
                  {product.heading}
                </p>

                <div className="flex justify-between items-center w-full">
                  <p className="text-[24px] font-semibold text-[#303030]">
                    ₹{product.price}
                  </p>
                  <span
                    className="material-symbols-outlined cursor-pointer"
                    style={{
                      backgroundColor: "#FF0000",
                      color: "#fff",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "4px",
                      fontSize: "20px",
                    }}
                  >
                    shopping_cart
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Download App Section */}
      <div className="max-w-7xl mx-auto mt-8 px-4 bg-red-600 text-white py-10 rounded-xl">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-0 md:gap-0">
          <div className="md:w-[52%]">
            <h3 className="text-2xl font-bold mb-2">
              Unlock Exclusive Deals!
            </h3>
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
            <button className="bg-red-600 mt-2 px-4 py-2 rounded text-white">
              Subscribe
            </button>
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
        <p className="text-center text-xs mt-4">
          © 2025 Caremall. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CartPage;
