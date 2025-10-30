'use client';

import { useState } from 'react';
import Item from './item';
import items from './item .json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const normalize = (str) => str.trim().toLowerCase();

  // GROUP VIEW
  if (sortBy === 'group') {
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
      <section>
        <div className="mb-6 flex gap-3">
          <button
            onClick={() => setSortBy('name')}
            className={`px-4 py-2 rounded font-semibold ${
              sortBy === 'name' ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-white'
            }`}
          >
            Sort by Name
          </button>
          <button
            onClick={() => setSortBy('category')}
            className={`px-4 py-2 rounded font-semibold ${
              sortBy === 'category' ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-white'
            }`}
          >
            Sort by Category
          </button>
          <button
            onClick={() => setSortBy('group')}
            className={`px-4 py-2 rounded font-semibold ${
              sortBy === 'group' ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-white'
            }`}
          >
            Group by Category
          </button>
        </div>

        {sortedCategories.map((cat) => (
          <div key={cat} className="mb-6">
            <h3 className="text-lg font-semibold capitalize mb-2">{cat}</h3>
            <ul>
              {grouped[cat]
                .slice()
                .sort((a, b) => normalize(a.name).localeCompare(normalize(b.name)))
                .map((it) => (
                  <Item key={it.id} {...it} />
                ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }

  // SORT BY NAME / CATEGORY
  const sorted = items.slice().sort((a, b) => {
    if (sortBy === 'name') {
      return normalize(a.name).localeCompare(normalize(b.name));
    } else if (sortBy === 'category') {
      const catCompare = a.category.localeCompare(b.category);
      if (catCompare !== 0) return catCompare;
      return normalize(a.name).localeCompare(normalize(b.name));
    }
    return 0;
  });

  return (
    <section>
      <div className="mb-6 flex gap-3">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 rounded font-semibold ${
            sortBy === 'name' ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-white'
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded font-semibold ${
            sortBy === 'category' ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-white'
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          className={`px-4 py-2 rounded font-semibold ${
            sortBy === 'group' ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-white'
          }`}
        >
          Group by Category
        </button>
      </div>

      <ul>
        {sorted.map((it) => (
          <Item key={it.id} {...it} />
        ))}
      </ul>
    </section>
  );
}
