import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Style Your Life
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Express Yourself
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover the latest trends in fashion, footwear, and sports gear.
              Quality meets style in every piece we offer.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to={"/view-items"}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center duration-300 shadow-xl"
              >
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to={"/view-items"}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl shadow-black/30 hover:scale-105"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </div>
  );
}
