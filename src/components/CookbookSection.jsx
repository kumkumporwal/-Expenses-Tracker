import React from "react";
import "./CookbookSection.css";
import cookbookImg from "../img/Cooktook.png"; // 👈 apni image import karo

const CookbookSection = () => {
  return (
    <div className="cookbook-container">
      {/* Left Side - Image */}
      <div className="cookbook-left">
        <img
          src={cookbookImg}
          alt="Top Recipes"
          className="cookbook-image"
        />
        <div className="cookbook-overlay">
         
          
        </div>
      </div>

      {/* Right Side - Text and Form */}
      <div className="cookbook-right">
        <h3 className="getit">get it now</h3>
        <h1 className="title">PINCH OF YUM COOKBOOK</h1>
        <p className="desc">
          The eBook includes our most popular 25 recipes in a beautiful, easy to
          download format. Enter your email and we’ll send it right over!
        </p>

        <form className="cookbook-form">
          <input type="text" placeholder="First Name" />
          <input type="email" placeholder="Email" />
          <button type="submit">GO</button>
        </form>
      </div>
    </div>
  );
};

export default CookbookSection;
