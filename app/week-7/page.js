"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./item.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold mb-6">Shopping List</h1>
      <div className="w-full max-w-md">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} /> 
      </div>
    </main>
  );
}
