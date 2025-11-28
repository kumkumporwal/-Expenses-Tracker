// src/utils/mealHelpers.js
export function extractIngredients(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim()) {
      ingredients.push(`${ing.trim()} ${measure ? '- ' + measure.trim() : ''}`);
    }
  }
  return ingredients;
}

// deterministic rating so it stays same across reloads: use idMeal & localStorage
export function getOrCreateRating(idMeal) {
  const key = `rating_${idMeal}`;
  const existing = localStorage.getItem(key);
  if (existing) return Number(existing);
  // create pseudo-random but deterministic by using numeric part of id
  const base = Number(String(idMeal).slice(-2)) || Math.floor(Math.random()*100);
  const rating = Math.min(5, Math.max(3, Math.round(((base % 40) / 10) * 10) / 10)); // 3.0 - 5.0
  localStorage.setItem(key, String(rating));
  return rating;
}
