"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState("");

  function handleAddItem(newItem) {
    const newItemWithId = { id: items.length + 1, ...newItem };
    setItems([...items, newItemWithId]);
  }

  function cleanItemName(name) {
    let cleaned = name.split(",")[0];
    cleaned = cleaned.replace(/\p{Extended_Pictographic}/gu, "");
    cleaned = cleaned.replace(/[0-9]+(kg|g|L|pack|dozen)?/gi, "");
    cleaned = cleaned.trim().toLowerCase();
    return cleaned;
  }

  function handleItemSelect(item) {
    const cleanedName = cleanItemName(item.name);
    setSelectedItem(cleanedName);
    console.log("Selected item:", cleanedName);
  }

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Shopping List + Meal Ideas
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <MealIdeas ingredient={selectedItem} />
        </div>
      </div>
    </main>
  );
}
