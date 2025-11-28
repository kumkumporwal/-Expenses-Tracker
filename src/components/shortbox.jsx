import React from 'react';
import QuickImg from '../img/shortbox/quich.png';
import DinnerImg from '../img/shortbox/dinner.png';
import VegImg from '../img/shortbox/vegetarian.png';
import HealthyImg from '../img/shortbox/healthy.png';
import InstantImg from '../img/shortbox/instant.png';
import VeganImg from '../img/shortbox/vegan.png';
import MealPrepImg from '../img/shortbox/mealprep.png';
import SoupsImg from '../img/shortbox/soups.png';
import SaladsImg from '../img/shortbox/salads.png';

const categories = [
  { title: 'QUICK AND EASY', img: QuickImg },
  { title: 'DINNER', img: DinnerImg },
  { title: 'VEGETARIAN', img: VegImg },
  { title: 'HEALTHY', img: HealthyImg },
  { title: 'INSTANT POT', img: InstantImg },
  { title: 'VEGAN', img: VeganImg },
  { title: 'MEAL PREP', img: MealPrepImg },
  { title: 'SOUPS', img: SoupsImg },
  { title: 'SALADS', img: SaladsImg },
];

export default function CategoryMenu() {
  return (
    <div className="container-fluid py-4">
      <div className="d-flex overflow-auto px-3 gap-5 align-items-center justify-content-center">
        {categories.map((item, index) => (
          <div key={index} className="text-center flex-shrink-0">
            <img
              src={item.img}
              alt={item.title}
              className="img-fluid rounded-circle border"
              style={{ width: '100px', height: '100px', objectFit: 'cover', cursor: 'pointer' }}
            />
            <p className="mt-2 fw-bold small">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
