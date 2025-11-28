import React from "react";
import "./Footer.css";
import { FaInstagram, FaPinterest, FaTiktok, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row gy-4">
          {/* Left Section */}
          <div className="col-md-4">
            <h6 className="footer-heading">PINCH OF YUM</h6>
            <ul className="list-unstyled footer-list">
              <li>About</li>
              <li>Blog</li>
              <li>Recipe Index</li>
              <li>Blogging Resources</li>
              <li>Income Reports</li>
              <li>Sponsored Content</li>
              <li>Media Mentions</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Middle Section */}
          <div className="col-md-4">
            <h6 className="footer-heading">FOOD & RECIPES</h6>
            <ul className="list-unstyled footer-list">
              <li>Quick & Easy Recipes</li>
              <li>Instant Pot Recipes</li>
              <li>Pasta Recipes</li>
              <li>Vegan Recipes</li>
              <li>Soup Recipes</li>
              <li>Taco Recipes</li>
              <li>Meal Prep Recipes</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="col-md-4">
            <div className="newsletter-box">
              <h6 className="signup-text">signup <span className="bold-text">FOR EMAIL UPDATES</span></h6>
              <p className="small mb-3">Get a Free eCookbook with our top 25 recipes.</p>
              <form className="d-flex flex-column flex-sm-row">
                <input type="text" className="form-control me-sm-2 mb-2 mb-sm-0" placeholder="First Name" />
                <input type="email" className="form-control me-sm-2 mb-2 mb-sm-0" placeholder="Email" />
                <button className="btn btn-warning px-4 fw-bold">GO</button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="text-center mt-5">
          <div className="social-icons">
            <FaInstagram /> <FaPinterest /> <FaTiktok /> <FaFacebookF /> <FaXTwitter /> <FaYoutube />
          </div>
        </div>

        {/* Name & Contact Info */}
        <div className="text-center mt-3 small text-muted">
          <p>Created by <strong>Kumkum Porwal</strong></p>
          <p>Email: <a href="mailto:kumukumporwal99@gmail.com">kumukumporwal99@gmail.com</a> | Contact: 7247594672</p>
        </div>

        {/* Bottom Copyright */}
        <hr />
        <div className="text-center small text-muted">
          © {new Date().getFullYear()} Pinch of Yum Clone | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
