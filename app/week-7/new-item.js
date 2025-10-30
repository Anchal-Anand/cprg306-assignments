"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    // Send the item to parent (Week 7 requirement)
    onAddItem(item);

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-6 rounded-lg shadow-md space-y-4 w-full max-w-xs"
      >
        {/* Item Name */}
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded p-2 text-black placeholder-gray-500"
        />

        {/* Quantity with buttons */}
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={quantity}
            min="1"
            max="20"
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 border rounded text-center font-bold text-black"
          />

          <button
            type="button"
            onClick={decrement}
            className="px-3 py-2 rounded font-bold text-white bg-gray-500 hover:bg-gray-600"
          >
            −
          </button>

          <button
            type="button"
            onClick={increment}
            className="px-3 py-2 rounded font-bold text-white bg-blue-500 hover:bg-blue-600"
          >
            +
          </button>

          {/* Category dropdown */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded p-1 text-black"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-black py-2 rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
