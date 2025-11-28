import React, { useEffect, useState } from "react";
import API from "../API/Api";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Start.css"; // 👈 custom css styling

function Start() {
  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    try {
      const res = await API.get(`/search.php?s=${searchQuery}`);
      setRecipes(res.data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(query);
  }, []);

  const handleSearch = () => {
    if (query.trim() !== "") fetchRecipes(query);
  };

  return (
    <div className="start-container">
      <div className="header-section text-center py-5">
        <h1 className="fw-bold text-white mb-3">Start Your Cooking Journey </h1>
        <p className="text-light">Discover & Cook Delicious Recipes Anytime</p>

        {/* Search Box */}
        <div className="input-group mt-4 w-75 mx-auto shadow">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search recipes like pasta, curry, or cake..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-light search-btn fw-semibold" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="container mt-5">
        {loading && <p className="text-center text-muted">Loading recipes...</p>}

        <div className="row">
          {recipes.length > 0 ? (
            recipes.map((meal) => (
              <div key={meal.idMeal} className="col-md-4 mb-4">
                <div className="recipe-card shadow-lg">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="recipe-img"
                  />
                  <div className="recipe-body">
                    <h5 className="recipe-title">{meal.strMeal}</h5>
                    <p className="recipe-info">
                      <strong>Category:</strong> {meal.strCategory}
                    </p>
                    <p className="recipe-info">
                      <strong>Area:</strong> {meal.strArea}
                    </p>
                    <div className="rating">⭐ ⭐ ⭐ ⭐ ☆</div>
                    <Link to={`/recipe/${meal.idMeal}`} className="btn btn-outline-light mt-3">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            !loading && (
              <p className="text-center text-light fs-5">
                No recipes found , Try something else.
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Start;
