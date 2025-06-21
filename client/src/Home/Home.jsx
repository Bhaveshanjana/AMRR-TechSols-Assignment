import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Category from "../components/Category";
import FeaturedCard from "../components/FeaturedCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Category />
      <FeaturedCard />

      {/* // Newsletter Section Component */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay in Style</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new
            arrivals, exclusive deals, and fashion trends.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white flex-1 px-4 py-3 rounded-l-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 px-6 py-3 rounded-r-full hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
