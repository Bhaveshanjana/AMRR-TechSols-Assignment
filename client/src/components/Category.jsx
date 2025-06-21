import CategoryCard from "./CategoryCard";

export default function CategoriesSection() {
  const categories = [
    {
      title: "Shirts",
      itemCount: "150+",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
    {
      title: "Pants",
      itemCount: "200+",
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
    },
    {
      title: "Shoes",
      itemCount: "300+",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
    },
    {
      title: "Sports Gear",
      itemCount: "100+",
      bgColor: "bg-gradient-to-br from-red-500 to-red-700",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of products across different categories.
            From everyday essentials to premium collections.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
