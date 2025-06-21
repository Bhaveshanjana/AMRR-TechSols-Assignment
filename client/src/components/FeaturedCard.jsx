import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function FeaturedProducts({ products }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked items that are trending right now. Don't miss out on
            these amazing deals!
          </p>
        </div>
        <div>
          <ProductCard products={products} />
        </div>
        <div className="text-center mt-12">
          <Link
            to={"/view-items"}
            className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700  cursor-pointer shadow-lg  shadow-green-500 hover:shadow-xl transition-all duration-300 "
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
