import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../API/Api";
import "bootstrap/dist/css/bootstrap.min.css"; // Keep Bootstrap for grid and utility classes

// --- 🎨 Color Palette and Style Variables ---
const primaryColor = "#6A3A4D"; // Deep Plum/Burgundy (Inspired by Pinch of Yum header)
const secondaryColor = "#F5F5F5"; // Soft Off-White/Light Beige
const textColor = "#333333"; // Dark Text for readability
const youtubeButtonColor = "#FF0000"; // Classic YouTube Red

function RecipeDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await API.get(`/lookup.php?i=${id}`);
        setMeal(res.data.meals[0]);
      } catch (error) {
        console.error("Error loading recipe:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMeal();
  }, [id]);

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <p className="text-center" style={{ color: primaryColor }}>
          **Loading a delicious recipe...**
        </p>
      </div>
    );
  if (!meal)
    return (
      <p className="text-center mt-5" style={{ color: primaryColor }}>
        **Recipe not found. Try searching for a different dish!**
      </p>
    );

  // Helper function to render ingredients list
  const renderIngredients = () => {
    return Array.from({ length: 20 }, (_, i) => i + 1)
      .map((num) => {
        const ingredient = meal[`strIngredient${num}`];
        const measure = meal[`strMeasure${num}`];
        // Only render if ingredient is present and not just whitespace
        if (ingredient && ingredient.trim()) {
          return (
            <li key={num} style={{ marginBottom: "8px" }}>
              **{ingredient.trim()}**
              {measure && measure.trim() && ` — ${measure.trim()}`}
            </li>
          );
        }
        return null;
      })
      .filter(Boolean); // Remove null entries
  };

  return (
    <div
      className="container py-5"
      style={{
        backgroundColor: secondaryColor, // Light background for the content area
        color: textColor,
        minHeight: "100vh", // Ensure it fills the screen height
      }}
    >
      <div
        className="card p-4 p-md-5 mx-auto shadow-lg"
        style={{
          maxWidth: "1100px",
          borderRadius: "15px", // Soft rounded corners
          border: `1px solid ${primaryColor}20`, // Subtle border
          backgroundColor: '#FFFFFF' // Use white card background for contrast
        }}
      >
        <h1
          className="text-center mb-5"
          style={{
            color: primaryColor,
            fontWeight: "700",
            letterSpacing: "1px",
            fontSize: "2.5rem",
          }}
        >
          {meal.strMeal}
        </h1>
        {/* --- Recipe Content Grid --- */}
        <div className="row g-5">
          {/* --- Image and Metadata Column (Left) --- */}
          <div className="col-md-5 text-center">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="img-fluid"
              style={{
                borderRadius: "12px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", // More pronounced shadow
                border: `3px solid ${primaryColor}50`, // Accent border
                width: "100%", // Ensures image fills container
                objectFit: "cover",
              }}
            />
            {/* --- Metadata Chips --- */}
            <div className="mt-4 d-flex justify-content-center gap-3">
              <span
                className="badge p-2"
                style={{
                  backgroundColor: primaryColor,
                  color: "#FFFFFF",
                  fontSize: "1rem",
                }}
              >
                Category: **{meal.strCategory}**
              </span>
              <span
                className="badge p-2"
                style={{
                  backgroundColor: "#D3B6A9", // A complimentary beige/brown
                  color: textColor,
                  fontSize: "1rem",
                }}
              >
                Origin: **{meal.strArea}** 🌍
              </span>
            </div>

            {/* --- YouTube Button --- */}
            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-4 shadow-sm"
                style={{
                  backgroundColor: youtubeButtonColor,
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  padding: "10px 30px",
                  borderRadius: "8px",
                 
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6c0554ff")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = youtubeButtonColor)
                }
              >
                 Watch Video Instructions
              </a>
            )}
          </div>

          {/* --- Ingredients and Instructions Column (Right) --- */}
          <div className="col-md-7">
            {/* --- Ingredients Section --- */}
            <h3
              className="pb-2 mb-3"
              style={{
                color: primaryColor,
                borderBottom: `2px solid ${primaryColor}50`,
                fontWeight: "600",
              }}
            >
              🧂 Ingredients
            </h3>
            <ul
              className="list-unstyled"
              style={{
                columns: "2", // Display in two columns for better space utilization
                columnRule: `1px dotted ${secondaryColor}`,
                lineHeight: "1.8",
                fontSize: "1.05rem",
              }}
            >
              {renderIngredients().length > 0 ? (
                renderIngredients()
              ) : (
                <li>No ingredients listed.</li>
              )}
            </ul>

            {/* --- Instructions Section --- */}
            <h3
              className="pt-4 pb-2 mb-3 mt-4"
              style={{
                color: primaryColor,
                borderBottom: `2px solid ${primaryColor}50`,
                fontWeight: "600",
              }}
            >
              👨‍🍳 Instructions
            </h3>
            <p
              style={{
                whiteSpace: "pre-line",
                lineHeight: "1.7",
                textAlign: "justify",
              }}
            >
              {meal.strInstructions || "No instructions provided for this recipe."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;