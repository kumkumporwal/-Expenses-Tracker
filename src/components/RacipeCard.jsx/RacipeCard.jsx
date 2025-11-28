import React from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
// Import custom CSS
import './GlobalStyles.css';
import './Header.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Placeholder data for the 4 recipe cards
const featuredRecipes = [
    { title: 'Quick And Easy', image: 'https://via.placeholder.com/300x380?text=Chicken+Rice', type: 'Quick And Easy' },
    { title: 'Creamy Tomato Pasta', image: 'https://via.placeholder.com/300x380?text=Pasta', type: 'Dinner' },
    { title: 'Spicy Noodles', image: 'https://via.placeholder.com/300x380?text=Noodles', type: 'Instant Pot' },
    { title: 'Summer Salad', image: 'https://via.placeholder.com/300x380?text=Salad', type: 'Meal Prep' },
];

const HomePageHeader = () => {
    return (
        <>
            {/* Top Navigation Bar */}
            <div className="top-nav-bar">
                <Container>
                    <p className="mb-0">
                        <span className="text-white">🧡 OUR RECIPES, YOUR INBOX.</span> 
                        <a href="#signup" className="ms-2">SIGN UP</a>
                    </p>
                </Container>
            </div>

            {/* Main Logo and Navigation */}
            <Container className="main-navbar">
                <Row className="align-items-center">
                    {/* Logo */}
                    <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
                        <a href="/" className="logo-text">pinch of yum</a>
                    </Col>
                    
                    {/* Navigation Links */}
                    <Col md={8}>
                        <Nav className="justify-content-center justify-content-md-end">
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#about">ABOUT</Nav.Link>
                            <Nav.Link href="#recipes">RECIPES</Nav.Link>
                            <Nav.Link href="#start">START HERE</Nav.Link>
                            <Nav.Link href="#contact">CONTACT</Nav.Link>
                            <Nav.Link href="#search"><span className="text-accent">🔍</span></Nav.Link> 
                        </Nav>
                    </Col>
                </Row>
            </Container>

            {/* --- Main Featured Content Section --- */}
            <Container className="my-5">
                
                {/* Titles */}
                <Row className="mb-4 align-items-end">
                    <Col md={6}>
                        {/* Italic/Handwritten Style Title (Left) */}
                        <h2 className="content-title-left">
                            SIMPLE RECIPES MADE FOR <span className="serif-font">real. actual. everyday life.</span>
                        </h2>
                    </Col>
                    <Col md={6} className="d-none d-md-block">
                        {/* Bold/Clean Style Title (Right) */}
                        <h2 className="content-title-right text-accent">Healthy Salad Recipes</h2>
                    </Col>
                </Row>

                {/* Recipe Grid with Animations */}
                <Row className="g-3">
                    {featuredRecipes.map((recipe, index) => (
                        <Col key={index} xs={12} sm={6} lg={3}>
                            <Card className="hover-lift border-0 shadow-sm"> {/* Animation applied here */}
                                <Card.Img 
                                    variant="top" 
                                    src={recipe.image} 
                                    alt={recipe.title} 
                                    style={{ height: '380px', objectFit: 'cover' }}
                                />
                                <div className="p-2 text-center bg-warning">
                                    <span className="fw-bold text-dark">{recipe.type}</span>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default HomePageHeader;