import React, { useState } from "react";

const initialItems = [
  {
    id: 1,
    name: "Classic Shirt",
    type: "Shirt",
    description: "A timeless classic shirt for all occasions.",
    coverImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    id: 2,
    name: "Running Shoes",
    type: "Shoes",
    description: "Lightweight running shoes for daily workouts.",
    coverImage:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    id: 2,
    name: "R Shoes",
    type: "Shoes",
    description: "Lightweight running shoes for daily workouts.",
    coverImage:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    id: 2,
    name: " Shoes",
    type: "Shoes",
    description: "Lightweight running shoes for daily workouts.",
    coverImage:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    ],
  },
];

function ViewItems() {
  const [items, setItems] = useState(initialItems);
  const [selected, setSelected] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const openModal = (item) => {
    setSelected(item);
    setCarouselIdx(0);
  };
  const closeModal = () => setSelected(null);
  const nextImg = () => setCarouselIdx((i) => (i + 1) % selected.images.length);
  const prevImg = () =>
    setCarouselIdx(
      (i) => (i - 1 + selected.images.length) % selected.images.length
    );

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">All Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded shadow hover:shadow-lg cursor-pointer"
            onClick={() => openModal(item)}
          >
            <img
              src={item.coverImage}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
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
            <div className="mb-4">
              <div className="relative">
                <img
                  src={selected.images[carouselIdx]}
                  alt="carousel"
                  className="w-full h-56 object-cover rounded"
                />
                <button
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-2 py-1"
                >
                  &#8592;
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-2 py-1"
                >
                  &#8594;
                </button>
              </div>
              <div className="flex justify-center mt-2 space-x-2">
                {selected.images.map((img, idx) => (
                  <button
                    key={idx}
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
