import React from 'react';
import SaladImage from '../img/img1.png'; // Update with your correct path
import Recipes from '../assets/racipes.json';
import { Link } from 'react-router';;
export default function SaladCard(props) {
  return (
    <div className="d-flex justify-content-between align-items-center bg-light" style={{ minHeight: '50vh' }}>
      <div className="card border-0 bg-white" style={{ width: '18rem' }}>
        <img src={props.img} className="card-img-top w-100 h-50 line" alt="Salad" />
        <div className="card-body text-center">
        <Link to={'/menu'}>  <span className="badge text-bg-warning px-4 py-2 fs-6 fw-bold  
 " style={{ letterSpacing: '2px', cursor: 'pointer' }}>
            {props.button}
          </span></Link>
        </div>
      </div>
    </div>
  );
}
