import React from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaPizzaSlice,
  FaHamburger, // Updated from FaBurger to FaHamburger
  FaCoffee,
  FaStar,
} from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('https://example.com/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold">
            Discover the Best Food & Places Near You
          </h1>
          <div className="flex items-center mt-6 space-x-4">
            <div className="flex items-center bg-white rounded-full p-2 shadow-lg w-72">
              <FaMapMarkerAlt className="text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Enter your location"
                className="flex-1 px-3 py-2 rounded-r-full focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex items-center bg-white rounded-full p-2 shadow-lg w-96">
              <FaSearch className="text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search for restaurants, cuisines, or dishes"
                className="flex-1 px-3 py-2 rounded-r-full focus:outline-none text-gray-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <section className="py-10 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          Popular Categories
        </h2>
        <div className="flex justify-center space-x-6">
          <CategoryCard icon={<FaPizzaSlice />} title="Pizza" />
          <CategoryCard icon={<FaHamburger />} title="Burgers" />
          <CategoryCard icon={<FaCoffee />} title="Cafes" />
          <CategoryCard icon={<FaStar />} title="Top Rated" />
        </div>
      </section>

      {/* Featured Restaurants Section */}
      <section className="py-10 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6">
          Featured Restaurants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          <RestaurantCard
            name="Pizza Palace"
            location="New York, NY"
            rating={4.5}
            imageUrl="https://example.com/restaurant1.jpg"
          />
          <RestaurantCard
            name="Burger Barn"
            location="Los Angeles, CA"
            rating={4.2}
            imageUrl="https://example.com/restaurant2.jpg"
          />
          <RestaurantCard
            name="Cafe Central"
            location="Chicago, IL"
            rating={4.8}
            imageUrl="https://example.com/restaurant3.jpg"
          />
        </div>
      </section>
    </div>
  );
};

// Category Card Component
function CategoryCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-150">
      <div className="text-4xl text-red-500 mb-2">{icon}</div>
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
}

// Restaurant Card Component
function RestaurantCard({ name, location, rating, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-150 hover:shadow-lg">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-500">{location}</p>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-gray-800 font-bold">{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
