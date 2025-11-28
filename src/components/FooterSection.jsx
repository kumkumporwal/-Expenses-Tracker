import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaXing,
} from 'react-icons/fa';
import "./FooterSection.css"; // custom styling

function FooterSection() {
  const socialMediaLinks = [
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaPinterestP />, url: '#' },
    { icon: <FaTiktok />, url: '#' },
    { icon: <FaFacebookF />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaXing />, url: '#' },
    { icon: <FaYoutube />, url: '#' },
  ];
  return (
    <footer className="custom-footer text-white py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Left Section */}
        <div className="social-section mb-3 mb-md-0 text-center text-md-start">
          <h6 className="fw-bold mb-3">FOLLOW US</h6>
          <div className="d-flex justify-content-center justify-content-md-start gap-3">
           <div className="d-flex">
              {socialMediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="my-footer-social-icon-circle"
                  aria-label={`Follow us on ${link.icon.type.name}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="signup-section text-center text-md-end">
          <h6 className="signup-title mb-3">
            <span className="script-text">signup</span> FOR EMAIL UPDATES
          </h6>
          <form className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="First Name"
            />
            <input
              type="email"
              className="form-control me-2"
              placeholder="Email"
            />
            <button type="submit" className="btn btn-warning fw-bold">
              GO
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
