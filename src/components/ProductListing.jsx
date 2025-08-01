import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    image: './mens1.png',
    heading: 'Premium Cotton Shirt',
    price: '999'
  },
  {
    image: './mens2.png',
    heading: 'Slim Fit Casual Shirt',
    price: '1,299'
  },
  {
    image: './mens3.png',
    heading: 'Linen Striped Shirt',
    price: '1,499'
  },
  {
    image: './mens4.png',
    heading: 'Checked Office Shirt',
    price: '1,199'
  },
  {
    image: './mens5.png',
    heading: 'Solid Color Formal Shirt',
    price: '1,299'
  },
  {
    image: './mens6.png',
    heading: 'Half Sleeve Summer Shirt',
    price: '899'
  },
  {
    image: './mens7.png',
    heading: 'Casual Denim Shirt',
    price: '1,399'
  },
  {
    image: './mens8.png',
    heading: 'Mandarin Collar Shirt',
    price: '1,099'
  },
  {
    image: './mens9.png',
    heading: 'Stretch Fit Denim Jeans',
    price: '1,899'
  },
  {
    image: './mens10.png',
    heading: 'Printed Designer Shirt',
    price: '1,299'
  },
  {
    image: './mens11.png',
    heading: 'Full Sleeve Flannel Shirt',
    price: '1,499'
  },
  {
    image: './mens12.png',
    heading: 'Luxury Satin Finish Shirt',
    price: '1,799'
  }
];


export default function CareMallPage() {
    const navigateTo = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const icons = [
        { icon: "language", path: "/" },
        { icon: "favorite", path: "/" },
        { icon: "shopping_cart", path: "/cart" },
        { icon: "person", path: "/" },
    ];
    const tags = [
        { name: "T Shirts", path: "/clothing" },
        { name: "Hoodies", path: "/electronics" },
        { name: "Jackets", path: "/accessories" },
        { name: "Red", path: "/red" },
        { name: "Blue", path: "/blue" },
        { name: "Black", path: "/black" },
        { name: "Grey", path: "/grey" },
    ];
    return (
        <div className="font-dm text-gray-800">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                    {/* Top: Logo + Hamburger */}
                    <div className="flex justify-between w-full md:w-auto items-center">
                        <img
                            src="./caremall.png"
                            alt="Caremall Logo"
                            className="w-28 sm:w-20 md:w-28 lg:w-36 xl:w-44"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigateTo("/")}
                        />

                        {/* Hamburger Icon for mobile */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="sm:hidden inline-flex items-center p-2 text-gray-600 hover:text-black focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden sm:flex gap-6 text-sm text-gray-700 relative">
                        {/* Categories Dropdown (Click Based) */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="inline-flex items-center gap-1 text-gray-900 focus:outline-none"
                            >
                                <span>Categories</span>
                                <svg
                                    className="w-2.5 h-2.5"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown */}
                            {isOpen && (
                                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    <a
                                        href="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Electronics
                                    </a>
                                    <a
                                        href="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Fashion
                                    </a>
                                    <a
                                        href="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Home & Living
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Other Links */}
                        <a href="#new-arrivals">New Arrivals</a>
                        <a href="#most-wanted">Most Wanted</a>
                        <a href="/">Become a seller</a>
                    </nav>

                    {/* Search & Icons */}
                    <form className="w-full max-w-md md:w-96">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    aria-hidden="true"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative w-full max-w-sm">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base">
                                        search
                                    </span>
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
                                                className="material-symbols-outlined text-gray-600 text-base cursor-pointer"
                                                onClick={() => (window.location.href = icon.path)}
                                            >
                                                {icon.icon}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="sm:hidden bg-red-600 text-white p-4 space-y-4">
                        {/* Categories Dropdown */}
                        <div>
                            <button
                                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                                className="flex items-center justify-between w-full text-left"
                            >
                                Categories
                                <svg
                                    className={`w-3 h-3 ml-2 transform transition-transform duration-200 ${categoryDropdownOpen ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            {categoryDropdownOpen && (
                                <div className="ml-4 mt-2 space-y-2 text-sm">
                                    <a href="#clothing" className="block">
                                        Clothing
                                    </a>
                                    <a href="#electronics" className="block">
                                        Electronics
                                    </a>
                                    <a href="#accessories" className="block">
                                        Accessories
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Other Menu Items */}
                        <a href="#new-arrivals" className="block">
                            New Arrivals
                        </a>
                        <a href="#most-wanted" className="block">
                            Most Wanted
                        </a>
                        <a href="/" className="block">
                            Become a seller
                        </a>
                    </div>
                )}
            </header>
            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 max-w-7xl mx-auto px-4 mt-6">
                Home / <span className="text-blue-600">Menswear</span>
            </div>
            {/* Product Filters and Grid */}
            <section className="max-w-7xl mx-auto px-4 mt-6">
                <div className="flex justify-between items-center flex-wrap mb-4">
                    <h2 className="text-lg font-semibold">Menswear <span className="text-gray-500">(585)</span></h2>
                </div>

                <div
                    className="mb-6 border border-gray-200 p-4"
                >
                    <div className="flex justify-between items-center flex-wrap mb-4 font-medium text-gray-800 text-lg">
                        <div>Filters</div>

                        <div className="flex flex-col sm:items-end items-start gap-1">
                            <button className="text-red-600 text-sm">Clear all</button>

                            <div className="text-sm">
                                <label htmlFor="sortBy" className="mr-2 text-gray-600">Sort by:</label>
                                <select
                                    id="sortBy"
                                    className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700"
                                    defaultValue="relevance"
                                >
                                    <option value="relevance">Relevance</option>
                                    <option value="price_low_high">Price: Low to High</option>
                                    <option value="price_high_low">Price: High to Low</option>
                                    <option value="newest">Newest First</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {[
                            "Categories",
                            "Price Range",
                            "Brands",
                            "Size",
                            "Color (4)",
                            "Discount Range",
                        ].map((item, i) => (
                            <select
                                key={i}
                                className={`border px-2 py-1 rounded text-sm ${item.includes("Color") ? "text-red-600" : ""
                                    }`}
                            >
                                <option>{item}</option>
                            </select>
                        ))}
                    </div>
                    {tags.map((tag, i) => (<span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{tag.name}<button
                        className="ml-1 text-gray-500 hover:text-red-600 text-sm"
                    //   onClick={() => handleRemoveTag(i)}
                    >
                        ×
                    </button></span>))}
                </div>
                <div className="flex lg:grid lg:grid-cols-4 gap-[12px] overflow-x-auto lg:overflow-visible no-scrollbar">
                    {products.map((product, i) => (
                        <div
                            key={i}
                            className="w-[318px] min-w-[318px] lg:w-auto lg:min-w-0 bg-white rounded-lg shadow-md flex-shrink-0"
                        >
                            {/* Image wrapper */}
                            <div className="relative w-full h-[356px] rounded-md overflow-hidden">
                                <span
                                    className="material-symbols-outlined absolute top-2 right-2 text-gray-700 text-sm cursor-pointer hover:bg-gray-200 z-10"
                                    style={{
                                        backgroundColor: "white",
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "436px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "20px",
                                    }}
                                >
                                    favorite
                                </span>
                                {/* Star rating or value box */}
                                <div
                                    className="absolute bottom-2 right-2 z-10 flex items-center gap-1 px-2 py-1 rounded-md shadow"
                                    style={{
                                        backgroundColor: "white",
                                        borderRadius: "6px",
                                        width: "auto",
                                        height: "36px",
                                        width: "59px"
                                    }}
                                >
                                    <span
                                        className="material-symbols-outlined"
                                        style={{ color: "#FFD700", fontSize: "18px" }} // Yellow star
                                    >
                                        star
                                    </span>
                                    <span className="text-sm font-medium text-[#303030]">4.5</span>
                                </div>
                                <img
                                    src={
                                        product.image ||
                                        "/placeholder.png" // fallback to a local placeholder image
                                    }
                                    alt={product.heading || "Product Image"}
                                    className="w-full h-[356px] object-cover"
                                />
                            </div>

                            {/* Product info and cart */}
                            <div className="flex flex-col gap-[12px] h-[96px] mt-3 w-full p-2">
                                <p className="text-[16px] text-[#303030] whitespace-nowrap overflow-hidden text-ellipsis">
                                    {product.heading || "Unnamed Product"}
                                </p>
                                <div className="flex justify-between items-center w-full gap-2">
                                    <p
                                        className="text-[32px] font-medium text-[#303030] whitespace-nowrap overflow-hidden text-ellipsis"
                                        style={{ maxWidth: "calc(100% - 52px)" }}
                                    >
                                        Rs.{product.price ?? "N/A"}
                                    </p>

                                    <span
                                        className="material-symbols-outlined cursor-pointer hover:bg-gray-200"
                                        style={{
                                            backgroundColor: "#FF0000",
                                            color: "#ffffff",
                                            width: "42px",
                                            height: "42px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: "4px",
                                            fontSize: "20px",
                                            flexShrink: 0,
                                        }}
                                    >
                                        shopping_cart
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-[#1a1a1a] text-white py-12 mt-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm">
                    <div>
                        <img
                            src="./caremall.png"
                            alt="Caremall Logo"
                            className="w-36 mb-4 cursor-pointer"
                            onClick={() => navigateTo("/")}
                        />
                        <div className="flex gap-3 mb-4">
                            {[
                                "facebook-f",
                                "instagram",
                                "twitter",
                                "linkedin-in",
                            ].map((icon, i) => (
                                <a key={i} href="#" className="text-lg hover:text-opacity-70">
                                    <i className={`fab fa-${icon}`}></i>
                                </a>
                            ))}
                        </div>
                        <h4 className="font-bold mb-2">Newsletter</h4>
                        <p className="mb-2 text-white/80">Subscribe to get offers & updates</p>
                        <div className="flex border rounded overflow-hidden w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 w-full text-sm text-black"
                            />
                            <button className="bg-red-600 px-4 text-sm font-medium">Subscribe</button>
                        </div>
                    </div>

                    {["Customer Service", "About Us", "Care Mall"].map((section, idx) => (
                        <div key={idx}>
                            <h4 className="font-semibold mb-2">{section}</h4>
                            {[
                                "FAQ",
                                "Orders",
                                "Deliveries",
                                "Payments",
                                "Returns and refunds",
                                "Vendor Connect",
                                "Contact Us",
                            ].slice(0, section === "Customer Service" ? 7 : 4).map((item, i) => (
                                <p key={i}>{item}</p>
                            ))}
                        </div>
                    ))}
                </div>
                <p className="text-center text-xs mt-8 text-white/60">
                    © 2025 Care Mall
                </p>
            </footer>
        </div>
    );
}
