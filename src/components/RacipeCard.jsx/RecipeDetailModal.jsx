// src/components/RecipeDetailModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { extractIngredients } from "../../utils.jsx/mealHelpers.jsx";

export default function RecipeDetailModal({ show, meal, onClose }) {
  if (!meal) return null;
  const ingredients = extractIngredients(meal);
  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{meal.strMeal}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-5">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="img-fluid rounded" />
            <p className="mt-2"><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>Area:</strong> {meal.strArea}</p>
            {meal.strSource && <p><a href={meal.strSource} target="_blank" rel="noreferrer">Source</a></p>}
            {meal.strYoutube && <p><a href={meal.strYoutube} target="_blank" rel="noreferrer">YouTube</a></p>}
          </div>
          <div className="col-md-7">
            <h6>Ingredients</h6>
            <ul>
              {ingredients.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
            <h6>Instructions</h6>
            <p style={{whiteSpace:"pre-line"}}>{meal.strInstructions}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
