import React from 'react';
import { FaSearch } from 'react-icons/fa'; // install react-icons if not already

export default function RecipeSearchBar() {
  return (
    <div className="container my-4">
      <div className="d-flex align-items-center gap-3 flex-wrap justify-content-center">
        
        {/* Search Box */}
        <div className="d-flex align-items-center border px-3 py-2" style={{ minWidth: '450px', height:'8vh' }}>
          <FaSearch className="me-2 text-purple" />
          <input
            type="text"
            placeholder="Search our recipes"
            className="form-control border-0 p-0 shadow-none"
            style={{ fontWeight: '500' }}
          />
        </div>

        {/* OR Text */}
        <div className="text-muted fst-italic me-2 form-control-lg">or</div>

        {/* View All Recipes Button */}
        <button
  className="btn text-white fw-bold px-5 py-2 border-0 p-0 rounded-0"
  style={{ backgroundColor: '#6f3c59', height: '8vh' }}
>
  + VIEW ALL RECIPES
</button>

      </div>
    </div>
  );
}
