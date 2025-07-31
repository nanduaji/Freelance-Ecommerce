import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.module.css";
import axios from "axios";

const HomePage = () => {
    const navigateTo = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mostWanted, setMostWanted] = useState([]);
    const [brands, setBrands] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch Most Wanted Products
          const mostWantedRes = await axios.get(
            "https://mocki.io/v1/47c83e8e-28f2-4662-9970-48edf8e35c2b"
          );
          setMostWanted(mostWantedRes.data.products);

          // Fetch Brands
          const brandsRes = await axios.get("https://api.caremall.in/brands");
          setBrands(brandsRes.data);
          console.log("Brands data:", brandsRes.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);  
    const icons = [{
        icon: "language",
        path: '/'
    },
    { icon: "favorite", path: '/' },
    { icon: "shopping_cart", path: '/cart' },
    { icon: "person", path: '/' }
    ];
    // const brands = [
    //     { name: "Adidas", image: "/brands/adidas.png", size: "h-10 w-auto" },
    //     { name: "Louis Vuitton", image: "/brands/louis-vuitton.png", size: "h-10 w-auto" },
    //     { name: "Whirlpool", image: "/brands/whirlpool.png", size: "h-10 w-auto" },
    //     { name: "Carrier", image: "/brands/carrier.png", size: "h-10 w-auto" },
    //     { name: "Huawei", image: "/brands/huawei.png", size: "h-10 w-auto" },
    //     { name: "HP", image: "/brands/hp.png", size: "h-10 w-auto" },
    //     { name: "Samsung", image: "/brands/samsung.png", size: "h-10 w-auto" },
    // ];
    const categories = [
        { name: "Electronics", image: "/categories/electronics.png" },
        { name: "Cosmetics", image: "/categories/cosmetics.png" },
        { name: "Home Appliances", image: "/categories/homeappliance.png" },
        { name: "Women's Apparels", image: "/categories/women.png" },
        { name: "Baby Products", image: "/categories/babyproducts.png" },
    ];
    // const mostWanted = [
    //     {
    //         image: './hoodie.png',
    //         heading: 'Classic Cotton Hoodie',
    //         price: '999'
    //     },
    //     {
    //         image: './headphones.png',
    //         heading: 'Noise Cancelling Earbuds',
    //         price: '3,999'
    //     },
    //     {
    //         image: './adidas.png',
    //         heading: 'Adidas Sports Sneakers',
    //         price: '2,499'
    //     },
    //     {
    //         image: './designer.png',
    //         heading: 'Designer Handbag',
    //         price: '4,299'
    //     }
    // ];
    const newArrivals = [
        {
            image: './gshock.png',
            heading: 'G-Shock Digital Watch',
            price: '5,999'
        },
        {
            image: './hpomen.png',
            heading: 'HP Omen Gaming Laptop',
            price: '89,999'
        },
        {
            image: './perfume.png',
            heading: 'Luxury Perfume Spray',
            price: '1,299'
        },
        {
            image: './nike.png',
            heading: 'Nike Running Shoes',
            price: '3,499'
        }
    ];
    const highlights = [
        {
            image: './lotion.png',
            heading: 'Hydrating Body Lotion - 200ml',
            price: '299'
        },
        {
            image: './shoes.png',
            heading: 'Running Shoes for Men - Size 9',
            price: '1,999'
        },
        {
            image: './apple.png',
            heading: 'New Apple iPhone 14 Pro Cases',
            price: '199'
        },
        {
            image: './bag.png',
            heading: 'Casual Laptop Backpack - 25L',
            price: '899'
        }
    ];
    const topDealsInElectronics = [
        {
            image: './controller.png',
            heading: 'Wireless Game Controller - DualShock',
            price: '2,499'
        },
        {
            image: './trimmer.png',
            heading: 'Philips Beard Trimmer - USB Charging',
            price: '1,299'
        },
        {
            image: './soundbar.png',
            heading: 'Zebronics Bluetooth Soundbar - 100W',
            price: '3,499'
        },
        {
            image: './watch.png',
            heading: 'Smart Fitness Watch - AMOLED',
            price: '2,199'
        }
    ];
    const bestSellers = [
        {
            image: './bodywash.png',
            heading: 'Nivea Nourishing Body Wash - 500ml',
            price: '299'
        },
        {
            image: './shampoo.png',
            heading: 'Dove Intense Repair Shampoo - 650ml',
            price: '499'
        },
        {
            image: './perfumeorange.png',
            heading: 'Wild Stone Edge Perfume - 100ml',
            price: '749'
        },
        {
            image: './lipstick.png',
            heading: 'Maybelline Matte Lipstick - Red Rush',
            price: '349'
        }
    ];

    return (
      <div className="font-dm text-gray-800">
        {/* Header */}
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
            <nav className="hidden sm:flex gap-6 text-sm text-gray-700">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-gray-900"
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
              </a>
              <a href="/">New Arrivals</a>
              <a href="/">Most Wanted</a>
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
              <a href="#" className="block">
                Categories
              </a>
              <a href="/" className="block">
                New Arrivals
              </a>
              <a href="/" className="block">
                Most Wanted
              </a>
              <a href="/" className="block">
                Become a seller
              </a>
            </div>
          )}
        </header>
        {/* Current Location Strip */}
        <section className="max-w-7xl mx-auto mt-6 px-4">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined border rounded p-2 text-gray-500 cursor-pointer hover:bg-gray-200">
              location_on
            </span>

            <div className="flex flex-col">
              <p className="text-gray-700 text-sm font-medium">
                <b>Home</b>{" "}
                <span className="text-[#B3B3B3] font-medium">
                  ABC House, FEF Road&hellip;
                </span>
              </p>

              <a href="/" className="text-red-500 text-sm">
                Change Location
              </a>
            </div>
          </div>
        </section>
        {/* Hero Banner */}
        <section className="max-w-7xl mx-auto mt-6 px-4">
          <div className="relative w-full rounded-lg overflow-hidden shadow-md">
            {/* Background Image */}
            <img
              src="/banner.png"
              alt="Hero"
              className="w-full h-[585px] object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30 px-4">
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight max-w-xl">
                Level Up Your Style <br /> With our Summer Collection
              </h1>
              <button
                className="w-[120px] h-[42px] mt-6 text-white font-semibold rounded shadow hover:bg-orange-600 transition"
                style={{ backgroundColor: "#FF0000" }}
              >
                Shop Now
              </button>
            </div>
          </div>
        </section>
        {/* Brands */}
        <section className="max-w-7xl mx-auto mt-6 px-4 py-6 bg-white">
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-x-8 w-max">
              {[...brands, ...brands].map((brand, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex flex-col items-center text-center w-[100px]"
                >
                  <img
                    src={brand.imageUrl}
                    alt={brand.brandName}
                    className={`h-10 w-auto object-contain mb-2`}
                  />
                  <span className="text-sm text-gray-600 font-medium">
                    {brand.brandName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Categories */}
        <section className="max-w-7xl mx-auto mt-6 px-4">
          <h2 className="text-[32px] font-semibold mb-4">
            Explore Popular Categories
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="relative w-full h-[223px] rounded-xl overflow-hidden shadow hover:shadow-md bg-no-repeat bg-center bg-cover flex items-end border"
                style={{
                  backgroundImage: `url(${category.image})`,
                  borderRadius: "12px",
                }}
              >
                <div className="w-full bg-white bg-opacity-90 p-3 flex justify-between items-center">
                  <span className="text-sm font-medium truncate">
                    {category.name}
                  </span>
                  <button className="text-lg font-bold">
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* 4 Cards */}
        <div>
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-[16px]">
              {[
                "Deals of the Week",
                "Limited Time Deals",
                "Combo Offers",
                "Daily Deals",
              ].map((title, idx) => {
                let background = "";
                let textColor = "black";
                if (idx === 0 || idx === 2) {
                  background =
                    "linear-gradient(135deg, #FF4141 0%, #992727 100%)";
                  textColor = "white";
                } else if (idx === 1 || idx === 3) {
                  background =
                    "linear-gradient(135deg, #4b4b4b 0%, #181414 100%)";
                  textColor = "white";
                }

                return (
                  <div
                    key={idx}
                    className="w-full h-[212px] rounded-[12px] p-4 flex flex-col justify-between shadow-sm relative"
                    style={{ background }}
                  >
                    <h3
                      className="absolute"
                      style={{
                        fontWeight: 600,
                        fontSize: "32px",
                        color: textColor,
                        left: "27px",
                        top: "41px",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      className="absolute text-sm"
                      style={{
                        color: textColor,
                        left: "27px",
                        top: "150px",
                      }}
                    >
                      View All →
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <br />
        {/* Promo Banner */}
        <section className="text-white w-full max-w-7xl mx-auto mt-6 px-4">
          <div className="bg-gradient-to-r from-[#7e1414] to-black rounded-[12px] overflow-hidden max-h-[376px]">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Left Side - Image */}
              <div className="hidden md:block h-[376px] w-full">
                <img
                  src="/45off.png"
                  alt="Men's Wear Sale"
                  className="w-full h-full object-cover object-top md:object-[center_20%]"
                />
              </div>

              {/* Right Side - Content */}
              <div className="h-[376px] flex items-center px-4 sm:px-6 md:px-10 bg-gradient-to-r from-[#7e1414] to-black">
                <div className="w-full">
                  <h2 className="text-[32px] font-bold mb-4 text-left leading-snug">
                    Level up your Style, 45% OFF on Men's Wear This Week!
                  </h2>

                  <div className="flex justify-start mb-4">
                    <button className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded text-white font-semibold transition duration-300">
                      Grab the deal
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
                    {/* Timer */}
                    <div className="flex gap-4 justify-start">
                      {[
                        { value: "01", label: "Day" },
                        { value: "19", label: "Hrs" },
                        { value: "48", label: "Min" },
                        { value: "36", label: "Sec" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="w-[60px] h-[76px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex flex-col items-center justify-center text-white"
                        >
                          <span className="text-[26px] font-bold leading-tight">
                            {item.value}
                          </span>
                          <span className="text-[14px] font-medium">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* "Remaining" text */}
                    <h1 className="hidden sm:block text-[32px] font-extrabold ml-2 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white/70 to-white/30 drop-shadow-md">
                      Remaining
                    </h1>
                  </div>

                  {/* Mobile "Remaining" */}
                  <h1 className="block sm:hidden text-left text-[32px] font-extrabold mt-3 text-transparent bg-clip-text bg-gradient-to-r from-white/70 to-white/30 drop-shadow-md">
                    Remaining
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        {/* Product Section - Most Wanted */}
        {/* Most Wanted Section */}
        <section className="max-w-7xl mx-auto mt-6 px-4">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontSize: "32px", fontWeight: 500 }}
          >
            Most Wanted
          </h2>
          <div className="flex lg:grid lg:grid-cols-4 gap-[12px] overflow-x-auto lg:overflow-visible no-scrollbar">
            {mostWanted.map((product, i) => (
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

                  <img
                    src={product.image}
                    alt={product.heading}
                    className="w-full h-[356px] object-cover"
                  />
                </div>

                {/* Product info and cart */}
                <div className="flex flex-col gap-[12px] h-[96px] mt-3 w-full p-2">
                  <p className="text-[16px] text-[#303030]">
                    {product.heading}
                  </p>

                  <div className="flex justify-between items-left w-full">
                    <p className="text-[32px] font-medium text-[#303030]">
                      Rs.{product.price}
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
        <br />
        {/* New Arrivals Section */}
        <section className="max-w-7xl mx-auto mt-6 px-4">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontSize: "32px", fontWeight: 500 }}
          >
            New Arrivals
          </h2>
          <div className="flex lg:grid lg:grid-cols-4 gap-[12px] overflow-x-auto lg:overflow-visible no-scrollbar">
            {newArrivals.map((product, i) => (
              <div
                key={i}
                className="w-[318px] min-w-[318px] sm:w-auto sm:min-w-0 bg-white rounded-lg shadow-md flex-shrink-0"
              >
                {/* Image and favorite icon */}
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

                  <img
                    src={product.image}
                    alt={product.heading}
                    className="w-full h-[356px] object-cover"
                  />
                </div>

                {/* Product info and cart */}

                <div className="flex flex-col gap-[12px] h-[96px] mt-3 w-full p-2">
                  <p className="text-[16px] text-[#303030]">
                    {product.heading}
                  </p>

                  <div className="flex justify-between items-left w-full">
                    <p className="text-[32px] font-medium text-[#303030]">
                      Rs.{product.price}
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
        <br />
        {/* Fashion Collection */}
        <section className="max-w-7xl mx-auto px-4 mt-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
            <h2
              className="text-2xl font-semibold"
              style={{ fontSize: "32px", fontWeight: 500 }}
            >
              Fashion Collection
            </h2>
            <button className="text-red-600 font-medium hover:underline">
              View Collection
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Small Images (span 3 columns on large screens) */}
            <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {[
                "./fashion1.png",
                "./fashion2.png",
                "./fashion3.png",
                "./fashion4.png",
                "./fashion5.png",
                "./fashion6.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden group"
                >
                  {/* Wrapper to allow hover height expansion */}
                  <div
                    className="
              h-48 sm:h-56 md:h-64 lg:h-80
              group-hover:h-auto
              sm:group-hover:max-h-[800px]
              md:group-hover:max-h-[800px]
              lg:group-hover:h-80
              transition-all duration-500 ease-in-out
              relative
            "
                  >
                    <img
                      src={src}
                      alt={`Fashion ${index + 1}`}
                      className="
                w-full
                h-full
                object-cover object-top
                transition-transform duration-500 ease-in-out
                group-hover:scale-110 group-hover:origin-top
              "
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Large Image (span 2 columns on large screens) */}
            <div className="lg:col-span-2">
              <img
                src="./fashion-large.png"
                alt="Main Fashion"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        <br />
        {/* Top Deals In Electronics */}
        <section className="max-w-7xl mx-auto mt-6 px-4">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontSize: "32px", fontWeight: 500 }}
          >
            Top Deals In Electronics
          </h2>

          <div className="flex lg:grid lg:grid-cols-4 gap-[12px] overflow-x-auto lg:overflow-visible no-scrollbar">
            {topDealsInElectronics.map((product, i) => (
              <div
                key={i}
                className="w-[318px] min-w-[318px] lg:w-auto lg:min-w-0 bg-white rounded-lg shadow-md flex-shrink-0"
              >
                {/* Image and favorite icon */}
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

                  <img
                    src={product.image}
                    alt={product.heading}
                    className="w-full h-[356px] object-cover"
                  />
                </div>

                {/* Product info and cart */}
                <div className="flex flex-col gap-[12px] h-[96px] mt-3 w-full p-2">
                  <p className="text-[16px] text-[#303030]">
                    {product.heading}
                  </p>

                  <div className="flex justify-between items-left w-full">
                    <p className="text-[32px] font-medium text-[#303030]">
                      Rs.{product.price}
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
        <br />
        {/* 3 Cards */}
        <section className="max-w-7xl mx-auto mt-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["./iphone.png", "./cosmic-watch.png", "./gopro.png"].map(
            (src, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={src}
                  alt={`Ad ${index + 1}`}
                  className="w-full h-[542px] object-cover rounded-xl"
                />
              </div>
            )
          )}
        </section>
        <br />
        {/* Bestsellers */}
        <section className="max-w-7xl mx-auto mt-6 px-4">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontSize: "32px", fontWeight: 500 }}
          >
            Bestsellers in Beauty and Health
          </h2>
          <div className="flex lg:grid lg:grid-cols-4 gap-[12px] overflow-x-auto lg:overflow-visible no-scrollbar">
            {bestSellers.map((product, i) => (
              <div
                key={i}
                className="w-[318px] min-w-[318px] lg:w-auto lg:min-w-0 bg-white rounded-lg shadow-md flex-shrink-0"
              >
                {/* Image and favorite icon */}
                <div className="relative md:w-full sm:w-[318px] h-[356px] rounded-md overflow-hidden">
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

                  <img
                    src={product.image}
                    alt={product.heading}
                    className="w-full h-[356px] object-cover"
                  />
                </div>

                {/* Product info and cart */}

                <div className="flex flex-col gap-[12px] h-[96px] mt-3 w-full p-2">
                  <p className="text-[16px] text-[#303030]">
                    {product.heading}
                  </p>

                  <div className="flex justify-between items-left w-full">
                    <p className="text-[32px] font-medium text-[#303030]">
                      Rs.{product.price}
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
        <br />
        {/* two cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-7xl mx-auto mt-6 px-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src="./mid-offer-1.png"
              alt="Korean Skincare Offer"
              className="w-full h-[376px] object-cover object-left hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="./mid-offer-2.png"
              alt="Big Sale 25% Off"
              className="w-full h-[376px] object-cover object-center hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>
        <br />
        {/* Highlights */}
        <section className="max-w-7xl mx-auto mt-6 px-4">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontSize: "32px", fontWeight: 500 }}
          >
            Caremall Highlights
          </h2>
          <div className="flex lg:grid lg:grid-cols-4 gap-[12px] overflow-x-auto lg:overflow-visible no-scrollbar">
            {highlights.map((product, i) => (
              <div
                key={i}
                className="w-[318px] min-w-[318px] lg:w-auto lg:min-w-0 bg-white rounded-lg shadow-md flex-shrink-0"
              >
                {/* Image and favorite icon */}
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

                  <img
                    src={product.image}
                    alt={product.heading}
                    className="w-full h-[356px] object-cover"
                  />
                </div>

                {/* Product info and cart */}

                <div className="flex flex-col gap-[12px] h-[96px] mt-3 w-full p-2">
                  <p className="text-[16px] text-[#303030]">
                    {product.heading}
                  </p>

                  <div className="flex justify-between items-left w-full">
                    <p className="text-[32px] font-medium text-[#303030]">
                      Rs.{product.price}
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
        <br />
        {/* Testimonials */}
        <section className="bg-white py-10 px-4">
          <h2 className="text-[32px] font-semibold text-center mb-6">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-6">
            {[
              {
                name: "Aarav Mehta",
                position: "Founder & CEO, Aarav Enterprises",
                feedback:
                  "Working with Caremall was a game-changer for our business. Their team delivered on time with exceptional quality. Highly recommended!",
                rating: 5,
              },
              {
                name: "Meera Nair",
                position: "Marketing Director, BrightWorks",
                feedback:
                  "We've seen a 300% boost in conversions since implementing their solutions. Their support is fast and reliable.",
                rating: 4,
              },
              {
                name: "Aditya Singh",
                position: "Operations Head, LogiCore",
                feedback:
                  "They understood our logistics challenges and built exactly what we needed. Real professionals with a great approach.",
                rating: 5,
              },
            ].map((cust, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-4 shadow rounded-[12px] relative h-[300px]"
              >
                {/* Star Rating */}
                <div className="flex absolute top-6 left-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] mr-1 bg-red-500"
                    >
                      <span className="text-white text-lg">
                        {i < cust.rating ? "★" : "☆"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-sm italic absolute top-[116px] left-[24px] max-w-[350px] text-gray-600">
                  “{cust.feedback}”
                </p>

                {/* Name & Position */}
                <div className="absolute top-[219px] left-[24px] text-left">
                  <p className="font-medium text-gray-700">{cust.name}</p>
                  <p className="text-sm text-gray-500">{cust.position}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-2 mt-8">
            <button className="w-[42px] h-[42px] bg-white border border-gray-300 rounded-[6px] flex items-center justify-center hover:bg-gray-100">
              <span className="material-symbols-outlined text-gray-700">
                arrow_back
              </span>
            </button>
            <button className="w-[42px] h-[42px] bg-white border border-gray-300 rounded-[6px] flex items-center justify-center hover:bg-gray-100">
              <span className="material-symbols-outlined text-gray-700">
                arrow_forward
              </span>
            </button>
          </div>
        </section>
        <br />
        {/* Blog Section */}
        <section className="bg-white py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[32px] font-semibold mb-8 text-center">
              Follow Our Blogs
            </h2>

            <div className="grid grid-cols-6 gap-6">
              {/* Large Feature Blog Card */}
              <div className="col-span-6 md:col-span-4 relative rounded-xl overflow-hidden shadow-sm h-[400px]">
                <img
                  src="./blog1.png"
                  alt="Blog 1"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
                <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
                  <span className="text-xs uppercase tracking-widest">
                    Beauty & Skincare
                  </span>
                  <h3 className="text-2xl font-semibold mt-2 mb-3 leading-tight">
                    Daily Skincare Routine Tips
                  </h3>
                  <p className="text-sm mb-4 max-w-xl">
                    Discover essential tips for the daily skincare routine to
                    achieve a radiant glow.
                  </p>
                  <button className="text-sm font-semibold underline self-start">
                    Read more
                  </button>
                </div>
              </div>

              {/* Small Vertical Blog Cards */}
              <div className="col-span-6 md:col-span-2 flex flex-col gap-6">
                {[
                  {
                    title: "Capsule Wardrobe Essentials",
                    category: "Fashion & Style",
                    image: "./blog2.png",
                  },
                  {
                    title: "Must-Have Gadgets",
                    category: "Tech & Gadgets",
                    image: "./blog3.png",
                  },
                  {
                    title: "5 Tips for a Healthy Life",
                    category: "Health & Wellness",
                    image: "./blog2.png",
                  },
                ].map((blog, idx) => (
                  <div
                    key={idx}
                    className="flex bg-[#FAF6F2] rounded-xl overflow-hidden shadow-sm"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-24 h-24 object-cover rounded-l-xl"
                    />
                    <div className="p-4 flex flex-col justify-center">
                      <span className="text-xs text-gray-600 uppercase tracking-widest">
                        {blog.category}
                      </span>
                      <h4 className="text-base font-semibold mt-1 leading-tight">
                        {blog.title}
                      </h4>
                      <button className="text-sm text-[#7D4533] font-semibold underline mt-2 self-start">
                        Read more
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <br />
        {/* HomePage - Download Section */}
        <section className="w-full max-w-7xl mx-auto mt-6 px-4 bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white py-12 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            {/* Left Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-[32px] font-extrabold mb-2 leading-tight">
                Unlock Exclusive Deals!
              </h3>
              <p className="text-base sm:text-lg mb-4 font-normal">
                Download our app today for personalized recommendations, faster
                checkout, and app-only discounts delivered straight to your
                phone. Shop smarter, anywhere, anytime!
              </p>
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <img
                  src="./googleplay.png"
                  alt="Google Play"
                  className="w-[130px] sm:w-[140px] rounded-lg hover:scale-105 transition-transform"
                />
                <img
                  src="./applestore.png"
                  alt="Apple App Store"
                  className="w-[130px] sm:w-[140px] rounded-lg hover:scale-105 transition-transform"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="./coverphoto.png"
                alt="App Promo"
                className="w-[250px] sm:w-[270px] md:w-[300px] transform scale-[1.15] -rotate-6 rounded-xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>
        <footer className="bg-[#1a1a1a] text-white py-12 px-4 mt-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm">
            {/* Newsletter Section */}
            <div className="sm:col-span-1">
              {/* Logo */}
              <div className="mb-2">
                <img
                  src="./caremall.png"
                  alt="Caremall Logo"
                  className="w-[147px] h-[40px] sm:w-20 md:w-28 lg:w-36 xl:w-44 m-0 p-0 block"
                  style={{
                    cursor: "pointer",
                    marginLeft: window.innerWidth < 640 ? "-10px" : "-15px",
                  }}
                  onClick={() => navigateTo("/")}
                />
              </div>

              {/* Social Media Icons */}
              <div
                className="flex gap-3 mb-4 ml-[-10px] sm:ml-0"
                style={{
                  cursor: "pointer",
                  marginLeft: window.innerWidth < 640 ? "-10px" : "0px",
                }}
              >
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f text-white text-lg hover:text-blue-400"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram text-white text-lg hover:text-pink-400"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter text-white text-lg hover:text-blue-300"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in text-white text-lg hover:text-blue-500"></i>
                </a>
              </div>

              {/* Newsletter */}
              <h4 className="text-base font-bold mb-3">Newsletter</h4>
              <p className="text-sm mb-3 text-white/80 leading-snug">
                Subscribe to the newsletter and receive information about
                promotions and new arrivals
              </p>

              <div className="flex items-center bg-white rounded-md overflow-hidden w-[266px] h-[42px] border border-gray-300">
                <input
                  type="email"
                  placeholder="Enter your email address here"
                  className="px-3 py-2 w-full text-sm text-black outline-none"
                />
                <button className="bg-red-600 text-white px-4 text-sm font-medium h-full">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Footer Links */}
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

          <p className="text-center text-xs mt-8 text-white/60">
            Copyright © 2025 Care mall
          </p>
        </footer>
      </div>
    );
};

export default HomePage;
