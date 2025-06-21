import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const products = [
    {
      name: "Premium Cotton Shirt",
      price: 49,
      originalPrice: 69,
      rating: 5,
      discount: 30,
    },
    {
      name: "Slim Fit Jeans",
      price: 79,
      originalPrice: 99,
      rating: 4,
      discount: 20,
    },
    {
      name: "Running Sneakers",
      price: 129,
      originalPrice: 159,
      rating: 5,
      discount: 20,
    },
    {
      name: "Sport Jacket",
      price: 89,
      originalPrice: 119,
      rating: 4,
      discount: 25,
    },
    {
      name: "Casual T-Shirt",
      price: 29,
      originalPrice: 39,
      rating: 4,
      discount: 25,
    },
    {
      name: "Sports Shorts",
      price: 39,
      originalPrice: 49,
      rating: 5,
      discount: 20,
    },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
