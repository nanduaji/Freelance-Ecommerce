import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import MagnifierImage from './Magnifier';

const ProductDetailPage = () => {
  const navigateTo = useNavigate();
  const [selectedImage, setSelectedImage] = useState("./headset.png");
  const icons = [
    {
      icon: "language",
      path: "/",
    },
    { icon: "favorite", path: "/" },
    { icon: "shopping_cart", path: "/cart" },
    { icon: "person", path: "/" },
  ];
  const thumbnailImages = [
    "headset.png",
    "black.png",
    "man1.png",
    "man2.png",
    "sideview.png"
  ];
  const selectColor = [
    "headset.png",
    "black.png",
    "white.png",
  ];

  const customerReviews = [
    {
      rating: 5,
      date: "2025-07-25",
      description:
        "I am absolutely thrilled with these headphones! The sound quality is top-notch, with rich bass and clear treble. I use them at the gym and the waterproof feature gives me peace of mind. The battery lasts for days on a single charge. They are comfortable enough to wear for hours. A fantastic product for any music lover on the move.",
      name: "Rahul S.",
      likes: 12,
      dislikes: 1,
    },
    {
      rating: 4,
      date: "2025-07-20",
      description:
        "These headphones are amazing! The sound is rich with great bass and clear treble. They are waterproof, perfect for the gym, and the battery lasts for days. Super comfortable for long wear—ideal for music lovers on the go.",
      name: "Anita M.",
      likes: 7,
      dislikes: 0,
    },
    {
      rating: 5,
      date: "2025-07-18",
      description:
        "I am absolutely thrilled with these headphones! The sound quality is top-notch, with rich bass and clear treble. I use them at the gym and the waterproof feature gives me peace of mind. The battery lasts for days on a single charge. They are comfortable enough to wear for hours. A fantastic product for any music lover on the move.",
      name: "Karan V.",
      likes: 15,
      dislikes: 2,
    },
  ];
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={`full-${i}`}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967h4.175c.969 0 
          1.371 1.24.588 1.81l-3.376 2.455 1.286 3.967c.3.921-.755 1.688-1.54 
          1.118L10 13.011l-3.376 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.967-3.376-2.455c-.783-.57-.38-1.81.588-1.81h4.175l1.286-3.967z"
            />
          </svg>
        ))}

        {hasHalfStar && (
          <svg
            className="w-5 h-5 text-yellow-400"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="half-star" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              fill="url(#half-star)"
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 
            3.967h4.175c.969 0 1.371 1.24.588 
            1.81l-3.376 2.455 1.286 3.967c.3.921-.755 
            1.688-1.54 1.118L10 13.011l-3.376 
            2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.967-3.376-2.455c-.783-.57-.38-1.81.588-1.81h4.175l1.286-3.967z"
            />
          </svg>
        )}
      </div>
    );
  };
  const showTab = (tab) => {
    const descriptionTab = document.getElementById("descriptionTab");
    const warrantyTab = document.getElementById("warrantyTab");
    const descriptionContent = document.getElementById("descriptionContent");
    const warrantyContent = document.getElementById("warrantyContent");

    const activeTabClasses = [
      "text-orange-600",
      "border-orange-600",
      "dark:text-orange-500",
      "dark:border-orange-500",
    ];
    const inactiveTabClasses = [
      "text-gray-600",
      "border-transparent",
      "hover:text-gray-600",
      "hover:border-gray-300",
      "dark:hover:text-gray-300",
    ];

    if (tab === "description") {
      descriptionContent.classList.remove("hidden");
      warrantyContent.classList.add("hidden");

      // Description tab active
      descriptionTab.classList.add(...activeTabClasses);
      descriptionTab.classList.remove(...inactiveTabClasses);

      // Warranty tab inactive
      warrantyTab.classList.remove(...activeTabClasses);
      warrantyTab.classList.add(...inactiveTabClasses);
    } else {
      warrantyContent.classList.remove("hidden");
      descriptionContent.classList.add("hidden");

      // Warranty tab active
      warrantyTab.classList.add(...activeTabClasses);
      warrantyTab.classList.remove(...inactiveTabClasses);

      // Description tab inactive
      descriptionTab.classList.remove(...activeTabClasses);
      descriptionTab.classList.add(...inactiveTabClasses);
    }
  };

  const ratingData = [
    { name: "5", value: 93 },
    { name: "4", value: 5 },
    { name: "3", value: 0 },
    { name: "2", value: 0 },
    { name: "1", value: 0 },
  ];
  const totalRatings = ratingData.reduce((sum, r) => sum + r.value, 0);
  const avgRating = 4.8;
  const similarProducts = [
    {
      image: "./similar1.png",
      heading: "Wireless Bluetooth Headphones",
      price: "₹2,499",
    },
    {
      image: "./similar2.png",
      heading: "In-Ear Noise Cancelling Headphones",
      price: "₹3,199",
    },
    {
      image: "./similar3.png",
      heading: "Gaming Headset with Mic",
      price: "₹1,799",
    },
    {
      image: "./similar4.png",
      heading: "Foldable Wireless Headphones",
      price: "₹2,999",
    },
  ];

  const mostWanted = [
      {
          image: './hoodie.png',
          heading: 'Classic Cotton Hoodie',
          price: '999'
      },
      {
          image: './headphones.png',
          heading: 'Noise Cancelling Earbuds',
          price: '3,999'
      },
      {
          image: './adidas.png',
          heading: 'Adidas Sports Sneakers',
          price: '2,499'
      },
      {
          image: './designer.png',
          heading: 'Designer Handbag',
          price: '4,299'
      }
  ];
const handleThumbnailClick = (item) => {
    console.log("Thumbnail clicked:", item);
    setSelectedImage(item);
}
  return (
    <div className="bg-white-100 font-dm">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Left: Logo and Navigation */}
          <div className="flex items-center gap-8">
            <img
              src="./caremall.png"
              alt="Caremall Logo"
              className="w-28 sm:w-20 md:w-28 lg:w-36 xl:w-44"
              style={{ cursor: "pointer" }}
              onClick={() => navigateTo("/")}
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
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 text-sm text-gray-600 py-2">
        Home / Headphones / Boat Nautical Sound Wireless Headphones
      </div>
      {/* Product Section */}
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
        {/* Product Images */}
        <div className="flex gap-4">
          {/* Main Product Image */}
          <MagnifierImage
            src={selectedImage}
            width={585}
            height={530}
            zoom={2}
          />

          {/* Thumbnails Column */}
          <div className="flex flex-col gap-4 w-[109px]">
            {thumbnailImages.slice(0, 5).map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`Thumbnail ${index + 1}`}
                className="w-[109px] h-[93px] object-cover rounded-[12px] cursor-pointer border border-gray-300 hover:border-red-500 transition duration-200"
                onClick={() => handleThumbnailClick(item)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-left">
              Boat Nautical Sound Wireless Headphones in Ocean Blue
            </h2>

            <div className="flex items-center justify-start mt-2">
              <p className="text-sm font-medium text-gray-600 mr-2">5K+ Sold</p>

              {/* 4 full stars */}
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400 mx-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967h4.175c.969 0 1.371 1.24.588 1.81l-3.376 2.455 1.286 3.967c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.376 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.967-3.376-2.455c-.783-.57-.38-1.81.588-1.81h4.175l1.286-3.967z" />
                </svg>
              ))}

              {/* Half star */}
              <svg
                className="w-4 h-4 text-yellow-400 mx-0.5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="half-star"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#half-star)"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 
3.967h4.175c.969 0 1.371 1.24.588 1.81l-3.376 
2.455 1.286 3.967c.3.921-.755 1.688-1.54 
1.118L10 13.011l-3.376 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.967-3.376-2.455c-.783-.57-.38-1.81.588-1.81h4.175l1.286-3.967z"
                />
              </svg>

              <p className="ms-2 text-sm font-bold text-gray-900">4.8</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 underline hover:no-underline"
              >
                85 reviews
              </a>
            </div>

            <p className="text-xl text-black font-bold mt-4 text-left">
              Rs.1,200
            </p>
            <p className="text-sm text-gray-500 mb-4 text-left">
              <span className="line-through mr-2">Rs.1,999</span>
              <span className="text-green-500 font-medium mr-2">25% OFF</span>·
              42 Reviews
            </p>
            <p className="text-sm text-black-500 mb-4 text-left">
              Select Color
            </p>
            <div className="flex flex-row gap-3">
              {selectColor.slice(0, 3).map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-[85px] h-[93px] object-cover rounded-[12px] cursor-pointer border border-gray-300 hover:border-red-500 transition duration-200"
                  onClick={() => handleThumbnailClick(item)}
                />
              ))}
            </div>

            <br />

            <div className="flex justify-start gap-4 mb-6 items-center">
              <button className="flex items-center bg-white text-black border border-gray-300 px-6 py-2 rounded-md w-[288px]">
                <span className="material-symbols-outlined mr-2 text-black">
                  shopping_cart
                </span>
                Add to Cart
              </button>

              <button className="bg-red-600 text-white px-6 py-2 rounded-md w-[288px]">
                Buy This Item
              </button>
            </div>
            <div className="flex space-x-6">
              {/* Save to Wishlist */}
              <div className="flex flex-col items-center justify-center text-center w-[288px] border-r border-light-black pr-4">
                <div className="flex items-center justify-center space-x-1">
                  <span className="material-symbols-outlined text-black">
                    favorite
                  </span>
                  <p className="text-gray-600">Save To Wishlist</p>
                </div>
              </div>

              {/* Share Product Link */}
              <div className="flex flex-col items-center justify-center text-center w-[288px]">
                <div className="flex items-center justify-center space-x-1">
                  <span className="material-symbols-outlined text-black">
                    share
                  </span>
                  <p className="text-gray-600">Share Product Link</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Description + Warranty tab */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="w-full">
          <div className="text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex -mb-px">
              <li className="me-2">
                <button
                  id="descriptionTab"
                  onClick={() => showTab("description")}
                  className="inline-block p-4 border-b-2 border-orange-600 text-orange-600 rounded-t-lg dark:text-orange-500 dark:border-orange-500"
                >
                  Description
                </button>
              </li>
              <li className="me-2">
                <button
                  id="warrantyTab"
                  onClick={() => showTab("warranty")}
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Warranty & Policy
                </button>
              </li>
            </ul>
          </div>

          <div
            id="descriptionContent"
            className="p-4 text-left text-gray-700 dark:text-gray-300"
          >
            <h1
              className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100"
              style={{ color: "#303030" }}
            >
              Product Details
            </h1>
            <p style={{ color: "#757575" }}>
              Introducing the Boat Nautical Sound Wireless Headphones: designed
              for the adventurous spirit. These headphones feature a robust
              waterproof design, perfect for beach days or poolside lounging.
              With a battery life of up to 20 hours, you can enjoy your favorite
              tunes all day long. The ergonomic fit ensures comfort during
              extended wear, while the advanced noise cancellation technology
              lets you immerse yourself in sound without distractions.
              Experience rich bass and crystal-clear audio quality, making every
              listening session a delight. Whether you're at home or on the go,
              the Boat Nautical Sound Wireless Headphones are your perfect
              companion.
            </p>
            <br />
            <p style={{ color: "#757575" }}>
              Connectivity: <span className="font-semibold">Bluetooth</span>
            </p>
            <p className="mt-2" style={{ color: "#757575" }}>
              Headphone Design:{" "}
              <span className="font-semibold">Foldable over the head</span>
            </p>
            <p className="mt-2" style={{ color: "#757575" }}>
              Compatible Device: <span className="font-semibold">Mobile</span>
            </p>
          </div>

          <div
            id="warrantyContent"
            className="p-4 text-left text-gray-700 dark:text-gray-300 hidden"
          >
            <h1
              className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100"
              style={{ color: "#303030" }}
            >
              Warranty Details
            </h1>
            <p style={{ color: "#757575" }}>
              This product comes with a 1-year warranty and a flexible return
              policy. Please refer to our official terms for more information.
            </p>
          </div>
        </div>
      </div>
      {/* Ratings */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-7xl mx-auto mt-6 px-4">
        {/* Left: Ratings & Reviews */}
        <div className="md:col-span-4 bg-white p-4 shadow-md rounded-md">
          <h3 className="text-lg font-semibold mb-4 text-left">
            Ratings & Reviews
          </h3>

          <div className="flex items-start space-x-4 mb-6">
            <span className="text-3xl font-bold text-yellow-500">4.8</span>
            <div className="mt-2">
              <StarRating rating={4.8} />
            </div>
          </div>

          {customerReviews.map((review, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <div className="flex justify-between items-start">
                <StarRating rating={review.rating} />
                <span className="text-sm text-gray-500 text-right">
                  {review.date}
                </span>
              </div>

              <p className="mt-2 text-gray-700 text-left">
                {review.description}
              </p>

              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span className="font-semibold text-left">{review.name}</span>
                <span className="text-right">
                  👍 {review.likes}  👎 {review.dislikes}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Circular Rating Chart + Breakdown */}
        <div className="md:col-span-2 flex flex-col items-center justify-center space-y-2 p-4 bg-white shadow-md rounded-md">
          <div className="relative w-32 h-32">
            <svg
              viewBox="0 0 36 36"
              className="w-full h-full transform -rotate-90"
            >
              <path
                className="text-red-200"
                d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="text-red-500"
                d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray={`${(avgRating / 5) * 100}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-red-500">
              {avgRating.toFixed(1)}
            </div>
          </div>
          <div className="flex items-center text-yellow-500 text-xl">
            {"★".repeat(Math.floor(avgRating))}
            {avgRating % 1 >= 0.5 && "½"}
          </div>
          <p className="text-sm text-gray-700 font-medium text-center">
            95% of buyers are satisfied
          </p>
          <p className="text-xs text-gray-500 text-center">
            98 Ratings • 85 Reviews
          </p>
          <div className="w-full space-y-2 pt-4">
            {ratingData.map((item, i) => (
              <div key={i} className="flex items-center space-x-2 w-full">
                <span className="w-6 text-sm font-semibold text-yellow-500">
                  {item.name}
                </span>
                <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-red-500 rounded-full"
                    style={{ width: `${(item.value / totalRatings) * 100}%` }}
                  />
                </div>
                <span className="w-8 text-sm text-gray-600 text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Similar Products */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <h3 className="text-xl font-semibold mb-4">Similar Products</h3>
        <div className="flex lg:grid lg:grid-cols-4 gap-[12px] overflow-x-auto lg:overflow-visible no-scrollbar">
          {similarProducts.map((product, i) => (
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
                <p className="text-[16px] text-[#303030]">{product.heading}</p>

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
      </div>
      {/* Most Wanted */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <h3 className="text-xl font-semibold mb-4">Most Wanted</h3>
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
                <p className="text-[16px] text-[#303030]">{product.heading}</p>

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
      </div>
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
              checkout, and app-only discounts delivered straight to your phone.
              Shop smarter, anywhere, anytime!
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
      {/* Footer */}
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

export default ProductDetailPage;
