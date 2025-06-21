import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function ViewItems() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [products, setProducts] = useState([]);

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
        toast.error(error);
      } finally {
        setLoading(false);
      }
    };
    handledata();
  }, []);

  const openModal = (item) => {
    setSelected(item);
    setCarouselIdx(0);
  };

  const closeModal = () => setSelected(null);

  const nextImg = () =>
    setCarouselIdx((i) => (i + 1) % selected.additionalImages.length);

  const prevImg = () =>
    setCarouselIdx(
      (i) =>
        (i - 1 + selected.additionalImages.length) %
        selected.additionalImages.length
    );
  // loading screen until data is fatched
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-50" />
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto px-4 md:px-12 bg-gray-100 shadow-lg shadow-blue-500/30">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800">Shopzy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to={"/"}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Clothing
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Shoes
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sports
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Accessories
            </a>
            <Link
              to={"/add-item"}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Add Product
            </Link>
          </div>

          {/* Right Icons */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4 space-y-2">
              <Link
                to={"/"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                to={"/add-item"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Add Product
              </Link>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Clothing
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Shoes
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Sports
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Accessories
              </a>
            </nav>
          </div>
        )}
      </div>
      <div className="py-8 mx-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">All Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg shadow-gray-400 hover:shadow-cyan-300 hover:shadow-2xl cursor-pointer transition-all duration-300"
              onClick={() => openModal(item)}
            >
              <img
                src={item.coverImage?.url}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 bg-transparent backdrop-blur-lg bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={closeModal}
              >
                <X />
              </button>

              <h3 className="text-xl font-bold mb-2">{selected.name}</h3>

              {/* Carousel */}
              <div className="mb-4">
                <div className="relative">
                  <img
                    src={selected.additionalImages?.[carouselIdx]?.url}
                    alt="carousel"
                    className="w-full h-56 object-cover rounded"
                  />
                  <button
                    onClick={prevImg}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-1 py-1 cursor-pointer"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-1 py-1 cursor-pointer"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <p className="mb-4 text-gray-700">{selected.description}</p>
                <p className="mb-4 text-gray-700">$ {selected.price}</p>
              </div>
              {/*  Enquire or mail section*/}
              <a
                href="mailto:your-email@example.com?subject=Product Enquiry&body=Hi, I’m interested in this product."
                className="block"
              >
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full cursor-pointer transition-all duration-300">
                  Enquire
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ViewItems;
