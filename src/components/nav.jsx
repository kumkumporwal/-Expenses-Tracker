import React, { useState } from 'react';
import Img from '../img/img3.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div>
      {/* Top Banner */}
      {showBanner && (
        <div style={{ width: '100%', backgroundColor: '#734060', color: 'white' }}>
          <div className="d-flex justify-content-between align-items-center px-4 py-2">
            <div className="mx-auto text-center text-sm-center fw-bold" style={{ flex: 1 }}>
              💛 OUR RECIPES, YOUR INBOX. <span><b>SIGN UP</b></span>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="btn btn-sm text-white"
              style={{ fontWeight: 'bold' }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#fff', color: 'black' , marginLeft:'190px' , marginRight:'90px'}}>
        <div className="container-fluid px-4">
          <img src={Img} alt="Logo" style={{ height: '100px' }} />

          {/* Toggler Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
            aria-controls="navContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content (VISIBLE on all screen sizes) */}
          <div className="collapse navbar-collapse justify-content-end align-items-end" id="navContent">
            <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-4 text-end text-lg-start " style={{ fontSize: '18px',  }}>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/Home"><b>HOME</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/About"><b>ABOUT</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/Recipes"><b>RECIPES</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/Start"><b>START HERE</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/Contact"><b>CONTACT</b></Link>
              </li>
              <li className="nav-item">
                <button className="btn" style={{ fontSize: '20px', color: '#734060' }}>🔍</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}
