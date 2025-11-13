"use client";

import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Fetch meal ideas from TheMealDB API
  async function fetchMealIdeas(ingredient) {
    if (!ingredient) return [];
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
          ingredient
        )}`
      );
      const data = await response.json();
      console.log("Meals fetched:", data.meals);
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meals:", error);
      return [];
    }
  }

  // Load meals for the selected ingredient
  async function loadMealIdeas() {
    const mealList = await fetchMealIdeas(ingredient);
    setMeals(mealList);
  }

  // Run every time the ingredient changes
  useEffect(() => {
    loadMealIdeas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-500 mb-2">Meal Ideas</h2>

      {!ingredient && <p>Select an item to see meal ideas.</p>}
      {ingredient && <p>Meals with "{ingredient}":</p>}

      <div className="grid grid-cols-2 gap-3 mt-3">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="border rounded-lg overflow-hidden text-center p-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-32 object-cover rounded"
            />
            <p className="font-semibold mt-1">{meal.strMeal}</p>
          </div>
        ))}
      </div>

      {ingredient && meals.length === 0 && (
        <p className="text-gray-500 mt-2">No meals found.</p>
      )}
    </div>
  );
}
