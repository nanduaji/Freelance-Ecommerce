import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.module.css";

const HomePage = () => {
    const navigateTo = useNavigate();
    const icons = [{
        icon: "language",
        path: '/'
    },
    { icon: "favorite", path: '/' },
    { icon: "shopping_cart", path: '/cart' },
    { icon: "person", path: '/' }
    ];
    const brands = [
        { name: "Adidas", image: "/brands/adidas.png", size: "h-10 w-auto" },
        { name: "Louis Vuitton", image: "/brands/louis-vuitton.png", size: "h-10 w-auto" },
        { name: "Whirlpool", image: "/brands/whirlpool.png", size: "h-10 w-auto" },
        { name: "Carrier", image: "/brands/carrier.png", size: "h-10 w-auto" },
        { name: "Huawei", image: "/brands/huawei.png", size: "h-10 w-auto" },
        { name: "HP", image: "/brands/hp.png", size: "h-10 w-auto" },
        { name: "Samsung", image: "/brands/samsung.png", size: "h-10 w-auto" },
    ];
    const categories = [
        { name: "Electronics", image: "/categories/electronics.png" },
        { name: "Cosmetics", image: "/categories/cosmetics.png" },
        { name: "Home Appliances", image: "/categories/homeappliance.png" },
        { name: "Women's Apparels", image: "/categories/women.png" },
        { name: "Baby Products", image: "/categories/babyproducts.png" },
    ];
    const mostWanted = [
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
    ]
    const newArrivals = [
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
    ]
    const highlights = [
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
    ]

    return (
        <div className="font-dm text-gray-800">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                    {/* Left: Logo and Navigation */}
                    <div className="flex items-center gap-8">
                        <img
                            src="./caremall.png"
                            alt="Caremall Logo"
                            className="w-28 sm:w-20 md:w-28 lg:w-36 xl:w-44"
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigateTo('/')}
                        />


                        <nav className="hidden sm:flex gap-6 text-sm text-gray-700">

                            <a
                                href="#"
                                id="dropdownCategoriesLink"
                                data-dropdown-toggle="dropdownCategories"
                                class="inline-flex items-center gap-2 text-gray-900 dark:text-white"
                            >
                                <span>Categories</span>
                                <svg
                                    class="w-2.5 h-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </a>

                            <div
                                id="dropdownCategories"
                                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
                            >
                                <ul
                                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownCategoriesLink"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Technology
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Science
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Health
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Finance
                                        </a>
                                    </li>
                                </ul>
                            </div>



                            <a href="/">New Arrivals</a>
                            <a href="/">Most Wanted</a>
                            <a href="/">Become a seller</a>
                        </nav>
                    </div>

                    {/* Right: Search Form */}
                    <form className="w-full max-w-md md:w-96">
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
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
                                {/* Search Box */}
                                <div className="relative w-full max-w-md">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-500"
                                            aria-hidden="true"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
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
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Search products..."
                                        required
                                    />
                                </div>

                                {/* 4 Icon Boxes */}
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
            </header>

            {/* Hero Banner */}
            <div className="px-4 sm:px-6 lg:px-36 mt-4">
                <section className="relative w-full rounded-lg overflow-hidden shadow-md">
                    {/* Background Image */}
                    <img
                        src="/banner.png"
                        alt="Hero"
                        className="w-[1320px] h-[585px] h-auto object-cover"
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30 px-4">
                        <h1 className="text-3xl sm:text-4xl font-bold leading-tight max-w-xl">
                            Level Up Your Style <br /> With our Summer Collection
                        </h1>
                        <button className="w-[120px] h-[42px] mt-6 text-white font-semibold rounded shadow hover:bg-orange-600 transition" style={{ backgroundColor: '#FF0000' }} >
                            Shop Now
                        </button>
                    </div>

                </section>
            </div>


            {/* Brands */}
            <div className="px-4 sm:px-6 lg:px-36 py-6 ">
                <div className="flex flex-wrap justify-between items-center gap-y-6">
                    {brands.map((brand, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center w-[100px]">
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className={`${brand.size} object-contain mb-2`}
                            />
                            <span className="text-sm text-gray-600 font-medium">{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>




            {/* Categories */}
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-xl font-semibold mb-6">Explore Popular Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center px-4 sm:px-6 md:px-8">
                    {categories.map((category, idx) => (
                        <div
                            key={idx}
                            className="relative w-full max-w-auto h-[223px] rounded-xl overflow-hidden shadow hover:shadow-md bg-no-repeat bg-center bg-contain flex items-end border mb-5"
                            style={{
                                backgroundImage: `url(${category.image})`,
                                borderRadius: '12px'
                            }}
                        >
                            <div className="w-full bg-white bg-opacity-90 p-3 flex justify-between items-center">
                                <span className="text-sm font-medium truncate">{category.name}</span>
                                <button className="text-lg font-bold">→</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>



            {/* Promo Banner */}
            <section className="text-white py-12 max-w-7xl mx-auto px-4 bg-gradient-to-r from-[#7e1414] to-black" style={{ borderRadius: '12px' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left Side - Centered Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src="/45off.png"
                            alt="Men's Wear Sale"
                            className="h-[300px] object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="md:pl-6 border-t md:border-t-0 md:border-l md:border-white/30 md:ml-4 pt-6 md:pt-0">
                        <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
                            45% OFF on Men's Wear This Week!
                        </h2>
                        <p className="text-md mb-6 text-center md:text-left">
                            Level up your style with our exclusive collection. Limited time only – don’t miss out!
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded text-white font-semibold transition duration-300">
                                Grab the deal
                            </button>
                        </div>
                        <br />
                        <div className="flex items-center justify-start gap-4 mb-6 grid-cols-1  md:grid-cols-2 xs:grid-cols-2">
                            {/* Timer Boxes */}
                            {[
                                { value: "01", label: "Day" },
                                { value: "19", label: "Hrs" },
                                { value: "48", label: "Min" },
                                { value: "36", label: "Sec" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="w-[73px] h-[86px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex flex-col items-center justify-center text-white"
                                >
                                    <span className="text-[32px] font-bold leading-tight">{item.value}</span>
                                    <span className="text-[16px] font-medium">{item.label}</span>
                                </div>
                            ))}

                            {/* Remaining Text */}
                            <h1 className="text-[50px] font-extrabold ml-6 text-transparent bg-clip-text bg-gradient-to-r from-white/70 to-white/30 drop-shadow-md">
                                Remaining
                            </h1>
                        </div>




                    </div>

                </div>
            </section>




            {/* Product Section - Most Wanted */}
            <section className="max-w-7xl mx-auto mt-6 px-4">
                <h3 className="text-xl font-semibold mb-4">Most Wanted</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {mostWanted.map((product, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-md p-2">
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
                            <div className="flex justify-between items-start mb-1">
                                <div className="flex flex-col">
                                    <p className="text-sm">{product.heading}</p>
                                    <p className="text-sm font-semibold">Rs.{product.price}</p>
                                </div>
                                <span className="material-symbols-outlined text-gray-700 text-sm p-1 bg-white cursor-pointer hover:bg-gray-200" style={{ backgroundColor: '#FF0000', color: '#ffffff', width: '42px', height: '42px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px', fontSize: '20px' }}>
                                    shopping_cart
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Product Section - New Arrivals */}
            <section className="max-w-7xl mx-auto mt-6 px-4">
                <h3 className="text-xl font-semibold mb-4">New Arrivals</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {newArrivals.map((product, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-md p-2">
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
                            <div className="flex justify-between items-start mb-1">
                                <div className="flex flex-col">
                                    <p className="text-sm">{product.heading}</p>
                                    <p className="text-sm font-semibold">Rs.{product.price}</p>
                                </div>
                                <span className="material-symbols-outlined text-gray-700 text-sm p-1 bg-white cursor-pointer hover:bg-gray-200" style={{ backgroundColor: '#FF0000', color: '#ffffff', width: '42px', height: '42px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px', fontSize: '20px' }}>
                                    shopping_cart
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden w-full h-80 flex items-center justify-center">
                    <img class="max-h-full max-w-full object-contain border rounded-[10px]" src="./offer2.png" alt="Centered Image" />
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden w-full h-80 flex items-center justify-center">
                    <img class="max-h-full max-w-full object-contain border rounded-[10px]" src="./offer2.png" alt="Centered Image" />
                </div>
            </div> */}
            {/* Highlights */}
            <section className="max-w-7xl mx-auto mt-6 px-4">
                <h3 className="text-xl font-semibold mb-4">Caremall Highlights</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {highlights.map((product, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-md p-2">
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
                            <div className="flex justify-between items-start mb-1">
                                <div className="flex flex-col">
                                    <p className="text-sm">{product.heading}</p>
                                    <p className="text-sm font-semibold">Rs.{product.price}</p>
                                </div>
                                <span className="material-symbols-outlined text-gray-700 text-sm p-1 bg-white cursor-pointer hover:bg-gray-200" style={{ backgroundColor: '#FF0000', color: '#ffffff', width: '42px', height: '42px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px', fontSize: '20px' }}>
                                    shopping_cart
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-100 py-10">
                <h2 className="text-xl font-semibold text-center mb-6">What Our Customers Say</h2>
                <div className="grid md:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto mt-6">
                    {[
                        {
                            name: "Aarav Mehta",
                            position: "Founder & CEO, Aarav Enterprises",
                            feedback: "Working with Caremall was a game-changer for our business. Their team delivered on time with exceptional quality. Highly recommended!",
                            rating: 5,
                        },
                        {
                            name: "Meera Nair",
                            position: "Marketing Director, BrightWorks",
                            feedback: "We've seen a 300% boost in conversions since implementing their solutions. Their support is fast and reliable.",
                            rating: 4,
                        },
                        {
                            name: "Aditya Singh",
                            position: "Operations Head, LogiCore",
                            feedback: "They understood our logistics challenges and built exactly what we needed. Real professionals with a great approach.",
                            rating: 5,
                        },
                    ].map((cust, idx) => (
                        <div key={idx} className="bg-white p-4 shadow rounded">
                            <div className="flex mb-2 text-yellow-500 text-dm">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i}>{i < cust.rating ? "★" : "☆"}</span>
                                ))}
                            </div>
                            <p className="text-sm italic">“{cust.feedback}”</p>
                            <div className="mt-3 text-right">
                                <p className="font-medium text-gray-700">- {cust.name}</p>
                                <p className="text-sm text-gray-500">{cust.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            {/* Blog Section */}
            <section className="max-w-7xl mx-auto px-6 py-10 bg-white">
                <h2 className="text-2xl font-semibold mb-8 text-center">Follow Our Blogs</h2>

                <div className="grid grid-cols-6 gap-6">
                    {/* Left Large Blog Card */}
                    <div className="col-span-6 md:col-span-4 bg-[#FAF6F2] rounded-xl overflow-hidden shadow-sm">
                        <img
                            src="./blog1.png"
                            alt="Blog 1"
                            className="w-full h-72 object-cover rounded-t-xl"
                        />
                        <div className="p-6">
                            <span className="text-xs text-gray-600 uppercase tracking-widest">
                                Beauty & Skincare
                            </span>
                            <h3 className="text-xl font-semibold mt-2 mb-3 leading-tight">
                                Daily Skincare Routine Tips
                            </h3>
                            <p className="text-sm text-gray-700 mb-4">
                                Discover essential tips for the daily skincare routine to achieve a radiant glow.
                            </p>
                            <button className="text-sm text-[#7D4533] font-semibold underline">Read more</button>
                        </div>
                    </div>

                    {/* Right Vertical Cards */}
                    <div className="col-span-6 md:col-span-2 flex flex-col gap-6">
                        {/* Blog Card 2 */}
                        <div className="flex bg-[#FAF6F2] rounded-xl overflow-hidden shadow-sm">
                            <img
                                src="./blog2.png"
                                alt="Blog 2"
                                className="w-24 h-24 object-cover rounded-l-xl"
                            />
                            <div className="p-4 flex flex-col justify-center">
                                <span className="text-xs text-gray-600 uppercase tracking-widest">
                                    Fashion & Style
                                </span>
                                <h4 className="text-base font-semibold mt-1 leading-tight">
                                    Capsule Wardrobe Essentials
                                </h4>

                                <button className="text-sm text-[#7D4533] font-semibold underline mt-2 self-start">
                                    Read more
                                </button>

                            </div>
                        </div>

                        {/* Blog Card 3 */}
                        <div className="flex bg-[#FAF6F2] rounded-xl overflow-hidden shadow-sm">
                            <img
                                src="./blog3.png"
                                alt="Blog 3"
                                className="w-24 h-24 object-cover rounded-l-xl"
                            />
                            <div className="p-4 flex flex-col justify-center">
                                <span className="text-xs text-gray-600 uppercase tracking-widest">
                                    Tech & Gadgets
                                </span>
                                <h4 className="text-base font-semibold mt-1 leading-tight">
                                    Must-Have Gadgets
                                </h4>
                                <button className="text-sm text-[#7D4533] font-semibold underline mt-2 self-start">
                                    Read more
                                </button>

                            </div>
                        </div>
                        <div className="flex bg-[#FAF6F2] rounded-xl overflow-hidden shadow-sm">
                            <img
                                src="./blog2.png"
                                alt="Blog 2"
                                className="w-24 h-24 object-cover rounded-l-xl"
                            />
                            <div className="p-4 flex flex-col justify-center">
                                <span className="text-xs text-gray-600 uppercase tracking-widest">
                                    Health & Wellness
                                </span>
                                <h4 className="text-base font-semibold mt-1 leading-tight">
                                    5 Tips for a Healthy Life
                                </h4>
                                <button className="text-sm text-[#7D4533] font-semibold underline mt-2 self-start">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* HomePage   Download */}
            <section className="max-w-7xl mx-auto mt-8 px-4 bg-red-600 text-white py-10 rounded-xl">
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
            </section>

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

export default HomePage;
