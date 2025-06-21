import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ViewItems() {
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
    setCarouselIdx(
      (i) =>
        (i + selected.additionalImages.length) %
        selected.additionalImages.length
    );

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
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">All Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded shadow hover:shadow-lg cursor-pointer"
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
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>

            <h3 className="text-xl font-bold mb-2">{selected.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{selected.type}</p>

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

              {/* Dots */}
              <div className="flex justify-center mt-2 space-x-2">
                {selected.additionalImages?.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIdx(idx)}
                    className={`w-2 h-2 rounded-full ${
                      idx === carouselIdx ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            <p className="mb-4 text-gray-700">{selected.description}</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full">
              Enquire
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewItems;
