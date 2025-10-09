"use client";
import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(1); 

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black pb-120 ">
      <div className="flex items-center space-x-2 bg-white rounded p-3 shadow">
        {/* Minus button */}
        <button
          onClick={decrement}
          disabled={count === 1}
          className={`px-4 py-2 rounded font-bold text-white ${
            count === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          −
        </button>

        {/* Counter value */}
        <span className="px-4 py-2 border rounded text-lg font-bold bg-white">
          {count}
        </span>

        {/* Plus button */}
        <button
          onClick={increment}
          disabled={count === 20}
          className={`px-4 py-2 rounded font-bold text-white ${
            count === 20
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
