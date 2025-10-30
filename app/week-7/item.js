"use client";

export default function Item({ item }) {
  return (
    <li className="bg-[#1e293b] text-white p-4 mb-4 rounded shadow">
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p className="text-sm text-gray-300">
        Buy {item.quantity} in {item.category}
      </p>
    </li>
  );
}
