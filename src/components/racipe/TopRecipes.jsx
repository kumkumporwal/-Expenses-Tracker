import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './TopRecipes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import R1 from '../../img/Racipes/R1.png'
import R2 from '../../img/Racipes/R2.png'
import R3 from '../../img/Racipes/R3.png'
import R4 from '../../img/Racipes/R4.png'
import R5 from '../../img/Racipes/R5.png'
import R6 from '../../img/Racipes/R6.png'
import R7 from '../../img/Racipes/R7.png'
import R8 from '../../img/Racipes/R8.png'
import R9 from '../../img/Racipes/R9.png'


// Star Rating Component (reusable)
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<span key={i}>⭐</span>); // Full star
    } else {
      stars.push(<span key={i}>☆</span>); // Empty star or half (for simplicity, just full/empty)
    }
  }
  return <div className="star-rating">{stars}</div>;
};

// Data for recipes
const recipes = [
  {
    id: 1,
    image: R1,
    title: 'The Best Soft Chocolate Chip Cookies',
    rating: 5,
    reviews: 1952,
    average: 4.5,
  },
  {
    id: 2,
    image: R2,
    title: 'The Best Sunday Chili',
    rating: 4,
    reviews: 121,
    average: 4.9,
  },
  {
    id: 3,
    image: R3,
    title: 'Miracle No Knead Bread',
    rating: 5,
    reviews: 563,
    average: 4.8,
  },
  {
    id: 4,
    image: R4,
    title: 'Best Anytime Baked Chicken Meatballs',
    rating: 5,
    reviews: 763,
    average: 4.9,
  },
  {
    id: 5,
    image: R5,
    title: 'The Best Chicken Tinga Tacos',
    rating: 4,
    reviews: 180,
    average: 4.8,
  },
  {
    id: 6,
    image: R6,
    title: 'The Best Detox Crockpot Lentil Soup',
    rating: 4,
    reviews: 380,
    average: 4.8,
  },
  {
    id: 7,
    image: R7,
    title: "Vegetarian Shepherd's Pie",
    rating: 4,
    reviews: 402,
    average: 4.8,
  },
  {
    id: 8,
    image: R8,
    title: 'Fruit Pizza',
    rating: 4,
    reviews: 69,
    average: 4.8,
  },
  {
    id: 9,
    image: R9,
    title: 'Fluffiest Blueberry Pancakes',
    rating: 4,
    reviews: 372,
    average: 4.8,
  },
];

const TopRecipes = () => {
  return (
    <div className="top-recipes-section">
      <Container>
        {/* Header Section */}
        <Row className="justify-content-center mb-5">
          <Col md={10}>
            {/* Trophy Icon (using unicode, you can replace with FontAwesome) */}
            <span className="trophy-icon">🏆</span> 
            <h2>TOP RATED RECIPES</h2>
            <p className="description">
              Out of all the many recipes on Pinch of Yum, these are our shining stars - the 
              recipes we come back to again and again (and again).
            </p>
          </Col>
        </Row>

        {/* Recipe Grid */}
        <Row className="justify-content-center">
          {recipes.map((recipe) => (
            <Col key={recipe.id} xs={12} sm={6} lg={4} xl={4}> {/* Responsive columns */}
              <Card className="recipe-card-custom shadow-sm">
                <div className="card-body-custom">
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="card-content">
                    <h5 className="card-title-custom">{recipe.title}</h5>
                    <StarRating rating={recipe.rating} />
                    <p className="review-details">
                      {recipe.reviews} REVIEWS / {recipe.average} AVERAGE
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TopRecipes;