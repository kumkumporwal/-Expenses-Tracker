import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
// Import the original CSS file name with corrected styles
import './RecipeHeader.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeHeader = () => {
  return (
    // 1. Main Background Section (Height reduced via CSS padding)
    <div className="recipe-header-bg">
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            
            {/* Breadcrumb Text (Using original class name) */}
            <p className="breadcrumb-text">PINCH OF YUM • RECIPES</p>
            
            {/* Main Title */}
            <h2>Recipes</h2>

            {/* Description Text */}
            <p>
              We've organized these recipes every way we could think of so you don't have to! Dietary 
              restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true... no 
              matter how you browse, we're sure you'll find just what you're looking for.
            </p>
            
          </Col>
        </Row>
      </Container>
      
      {/* 2. Search Bar Section (Positioning Corrected using original class name) */}
      <Container className="search-container">
        <Row className="justify-content-center">
          {/* Search bar ki width image ke anusaar wide rakhi gayi hai */}
          <Col xs={12} md={10} lg={10} xl={9}> 
            <div className="position-relative">
              {/* Magnifying Glass Icon (Using original class name) */}
              <span className="search-icon">🔍</span> 
              
              <Form.Control 
                type="text"
                placeholder="Search by keyword"
                className="custom-search-input" // Using original class name
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecipeHeader;