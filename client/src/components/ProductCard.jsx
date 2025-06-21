import { Heart, HeartCrack, Star } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ products }) {
  console.log(products);

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow duration-300 border border-gray-200 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow duration-300 border border-gray-200 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide gap-6 px-16 pb-4 md:mx-16 "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <Link
            to={"/view-items"}
            key={product.id}
            className="flex-shrink-0 w-80 hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-gray-100 rounded-md shadow-lg "
          >
            {/* Product Image */}
            <div className="w-full h-64 bg-white rounded-lg overflow-hidden mb-4 flex items-center justify-center ">
              <img
                src={product?.coverImage?.url}
                alt="Product"
                className=" object-contain hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-3 p-3">
              {/* Product Name */}
              <h3 className="text-gray-800 font-medium text-base leading-tight line-clamp-2 group-hover:text-gray-600 transition-colors duration-200">
                {product.name}
              </h3>

              {/* Pricing */}
              <div className="flex items-center justify-between ">
                <div className="space-x-2">
                  {/* Discounted Price */}
                  <span className="text-gray-400 text-sm line-through">
                    ₹1200
                  </span>

                  {/* Original Price */}
                  <span className="text-gray-900 font-semibold text-lg">
                    {product.price}
                  </span>
                </div>
                <div className="text-blue-400">Limited Time deal!</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
