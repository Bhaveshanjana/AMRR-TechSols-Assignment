import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Category from "../components/Category";
import FeaturedCard from "../components/FeaturedCard";
import Footer from "../components/Footer";
import axios from "axios"

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handledata = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/product/getProducts`
        );
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    handledata();
  }, []);
  console.log(products);
  

  // loading screen until data is fatched
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-50" />
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Category />
      <FeaturedCard products={products} />

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
            <button className="bg-blue-600 px-6 py-3 rounded-r-full hover:bg-blue-700 transition-colors divide-blue-300 cursor-pointer">
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
