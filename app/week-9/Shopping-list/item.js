"use client";

export default function Item({ item, onSelect }) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="border p-2 mb-2 rounded-lg cursor-pointer hover:bg-blue-50"
    >
      <div className="font-bold text-lg">{item.name}</div>
      <div>Quantity: {item.quantity}</div>
      <div className="text-gray-500 text-sm">Category: {item.category}</div>
    </div>
  );
}
