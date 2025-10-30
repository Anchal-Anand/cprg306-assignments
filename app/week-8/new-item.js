"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") return;
    const newItem = {
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-3 bg-gray-50 rounded-lg shadow-sm"
    >
      <div className="mb-2">
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded w-full p-2"
        />
      </div>

      <div className="flex gap-2 mb-2">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border rounded w-1/2 p-2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded w-1/2 p-2"
        >
          <option>Produce</option>
          <option>Bakery</option>
          <option>Meat</option>
          <option>Dairy</option>
          <option>Household</option>
          <option>Canned Goods</option>
          <option>Dry Goods</option>
          <option>Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Add Item
      </button>
    </form>
  );
}
