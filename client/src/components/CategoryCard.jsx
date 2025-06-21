import { Link } from "react-router-dom";

export default function CategoryCard({ title, itemCount, bgColor }) {
  return (
    <Link
      to={"/view-items"}
      className={`${bgColor} rounded-2xl p-6 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm opacity-90">{itemCount} items</p>
        </div>
      </div>
      <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm hover:bg-white/30 transition-all">
        Explore
      </button>
    </Link>
  );
}
