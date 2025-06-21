import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const itemTypes = ["Shirt", "Pant", "Shoes", "Sports Gear", "Other"];

function AddItem() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    type: itemTypes[0],
    description: "",
    coverImage: null,
    additionalImages: [],
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "coverImage") {
      setForm((f) => ({ ...f, coverImage: files[0] }));
    } else if (name === "additionalImages") {
      setForm((f) => ({ ...f, additionalImages: Array.from(files) }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("type", form.type);
      formData.append("description", form.description);
      formData.append("coverImage", form.coverImage);

      form.additionalImages.forEach((img) => {
        formData.append("additionalImages", img);
      });

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/product/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Product created successfully!");
      navigate("/view-items");
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong while adding item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Add New Item</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded shadow-xl shadow-emerald-800/30"
      >
        <div>
          <label className="block mb-1 font-medium">Item Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Item Price</label>
          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Item Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 cursor-pointer"
          >
            {itemTypes.map((type) => (
              <option key={type} value={type}>
                <span>{type}</span>
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Item Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
            rows={3}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Item Cover Image</label>
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full bg-gray-300 p-2 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Item Additional Images
          </label>
          <input
            type="file"
            name="additionalImages"
            accept="image/*"
            multiple
            onChange={handleChange}
            className="w-full bg-gray-300 p-2 rounded-lg cursor-pointer"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Item"}
        </button>
      </form>
    </div>
  );
}

export default AddItem;
