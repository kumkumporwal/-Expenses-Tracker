// src/pages/RecipeList.js
import React, { useEffect, useState, useCallback } from "react";
import API from "../API/Api";
import RecipeCard from "../components/RacipeCard.jsx/RacipeCard";
import RecipeDetailModal from "../components/RacipeCard.jsx/RecipeDetailModal";
import debounce from "lodash.debounce";
import { getOrCreateRating } from "../utils/mealHelpers";

export default function RecipeList() {
  const [query, setQuery] = useState("pasta");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchRecipes = async (q) => {
    try {
      setLoading(true);
      setError(null);
      const res = await API.get(`/search.php?s=${encodeURIComponent(q)}`);
      const meals = res.data.meals || [];
      // attach a client-side rating for each meal (so UI shows rating)
      const withRating = meals.map(m => ({...m, _clientRating: getOrCreateRating(m.idMeal)}));
      setRecipes(withRating);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch recipes. Try again.");
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  // debounced function to avoid too many requests while typing
  const debouncedFetch = useCallback(debounce((q) => fetchRecipes(q), 450), []);

  useEffect(() => {
    fetchRecipes(query); // initial load
    // cleanup debounce on unmount
    return () => debouncedFetch.cancel();
    // eslint-disable-next-line
  }, []);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (!val.trim()) {
      setRecipes([]);
      return;
    }
    debouncedFetch(val.trim());
  };

  const openDetail = (meal) => {
    setSelectedMeal(meal);
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Pinch-of-Yum Clone — Recipe Finder</h2>

      <div className="input-group mb-4 w-75 mx-auto">
        <input type="text" className="form-control" placeholder="Search recipes (eg. curry, pasta, cake)"
               value={query} onChange={handleSearchChange} />
        <button className="btn btn-primary" onClick={() => fetchRecipes(query)}>Search</button>
      </div>

      {loading && <p className="text-center">Loading recipes...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      <div className="row">
        {recipes.length > 0 ? (
          recipes.map(meal => (
            <div key={meal.idMeal} className="col-md-4 mb-4">
              <RecipeCard meal={meal} onOpen={openDetail} />
            </div>
          ))
        ) : (
          !loading && <p className="text-center">No recipes found. Try another search.</p>
        )}
      </div>

      <RecipeDetailModal show={showModal} meal={selectedMeal} onClose={() => setShowModal(false)} />
    </div>
  );
}
