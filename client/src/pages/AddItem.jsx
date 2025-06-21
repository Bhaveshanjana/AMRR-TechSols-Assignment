import React, { useState } from "react";

const itemTypes = ["Shirt", "Pant", "Shoes", "Sports Gear", "Other"];

function AddItem() {
  const [form, setForm] = useState({
    name: "",
    type: itemTypes[0],
    description: "",
    coverImage: null,
    additionalImages: []
  });
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setForm({ name: "", type: itemTypes[0], description: "", coverImage: null, additionalImages: [] });
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Add New Item</h2>
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">Item successfully added</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow">
        <div>
          <label className="block mb-1 font-medium">Item Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Item Type</label>
          <select name="type" value={form.type} onChange={handleChange} className="w-full border rounded px-3 py-2">
            {itemTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Item Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} required className="w-full border rounded px-3 py-2" rows={3} />
        </div>
        <div>
          <label className="block mb-1 font-medium">Item Cover Image</label>
          <input type="file" name="coverImage" accept="image/*" onChange={handleChange} required className="w-full" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Item Additional Images</label>
          <input type="file" name="additionalImages" accept="image/*" multiple onChange={handleChange} className="w-full" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem; 