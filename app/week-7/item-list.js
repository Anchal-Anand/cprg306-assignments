"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const normalize = (str) => str.trim().toLowerCase();

  // --- GROUP VIEW ---
  if (sortBy === "group") {
    const grouped = items.reduce((acc, it) => {
      const cat = it.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(it);
      return acc;
    }, {});

    const sortedCategories = Object.keys(grouped).sort((a, b) =>
      a.localeCompare(b)
    );

    return (
      <section className="bg-gray-950 text-white p-6 rounded-lg shadow-md">
        {/* Grouped Items */}
        {sortedCategories.map((cat) => (
          <div key={cat} className="mb-8">
            <h3 className="text-xl font-semibold capitalize mb-4 text-blue-400">
              {cat}
            </h3>
            <ul className="space-y-4">
              {grouped[cat]
                .slice()
                .sort((a, b) =>
                  normalize(a.name).localeCompare(normalize(b.name))
                )
                .map((it) => (
                  <Item key={it.id} item={it} />
                ))}
            </ul>
          </div>
        ))}

        {/* Sort buttons under boxes */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => setSortBy("name")}
            className={`px-4 py-2 rounded font-semibold ${
              sortBy === "name"
                ? "bg-yellow-500 text-black"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
          >
            Sort by Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className={`px-4 py-2 rounded font-semibold ${
              sortBy === "category"
                ? "bg-yellow-500 text-black"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
          >
            Sort by Category
          </button>
          <button
            onClick={() => setSortBy("group")}
            className={`px-4 py-2 rounded font-semibold ${
              sortBy === "group"
                ? "bg-yellow-500 text-black"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
          >
            Group by Category
          </button>
        </div>
      </section>
    );
  }

  // --- SORT BY NAME / CATEGORY ---
  const sorted = items.slice().sort((a, b) => {
    if (sortBy === "name") {
      return normalize(a.name).localeCompare(normalize(b.name));
    } else if (sortBy === "category") {
      const catCompare = a.category.localeCompare(b.category);
      if (catCompare !== 0) return catCompare;
      return normalize(a.name).localeCompare(normalize(b.name));
    }
    return 0;
  });

  return (
    <section className="bg-gray-950 text-white p-6 rounded-lg shadow-md">
      {/* Item Boxes */}
      <ul className="space-y-4 mb-8">
        {sorted.map((it) => (
          <Item key={it.id} item={it} />
        ))}
      </ul>

      {/* Sort Buttons (Bottom) */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded font-semibold ${
            sortBy === "name"
              ? "bg-yellow-500 text-black"
              : "bg-gray-600 text-white hover:bg-gray-700"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded font-semibold ${
            sortBy === "category"
              ? "bg-yellow-500 text-black"
              : "bg-gray-600 text-white hover:bg-gray-700"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 rounded font-semibold ${
            sortBy === "group"
              ? "bg-yellow-500 text-black"
              : "bg-gray-600 text-white hover:bg-gray-700"
          }`}
        >
          Group by Category
        </button>
      </div>
    </section>
  );
}
