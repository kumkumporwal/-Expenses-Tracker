import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FoodBlogAbout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgown from '../../img/About/imgown2.png'; // Ensure this path is correct

const CombinedLayout = () => {
  // Placeholder URLs for images
  const kumkumImgUrl = imgown;
  const foodImgUrl = "https://via.placeholder.com/600x400/333/fff?text=I+LOVE+FOOD+Image";
  
  return (
    <Container fluid> {/* Fluid container for edge-to-edge layout, adjust as needed */}

      {/* ======================================================= */}
      {/* 1. ABOUT ME SECTION: IMAGE LEFT, CONTENT RIGHT (Matching the first screenshot) */}
      {/* ======================================================= */}
      <Container className="about-me-container">
        <Row className="align-items-start g-4"> 
          
          {/* IMAGE SECTION (LEFT COLUMN) */}
          {/* order-md-1: Desktop par pehle aayega (Left) */}
         
          
         
        </Row>
      </Container>

      <hr className="my-5" /> {/* Separator between sections */}


      {/* ======================================================= */}
      {/* 2. I LOVE FOOD! SECTION: CONTENT LEFT, IMAGE RIGHT (As requested) */}
      {/* ======================================================= */}
      <Container className="i-love-food-container">
        <Row className="align-items-start g-4"> 
            
            {/* CONTENT SECTION (LEFT COLUMN) */}
            {/* order-md-1: Desktop par pehle aayega (Left) */}
            <Col md={6} className="content-section order-md-1 order-1">
                
                <h1>I LOVE FOOD!</h1>

                <p>
                    In this space, I am always sharing fresh, flavorful, (mostly) healthy recipes that I love to make and eat in my real, actual, every day life. If I wouldn't eat it in real life, I won't put it on the blog.
                </p>

                <p>
                    My goal is to inspire you with food that is both approachable AND exciting, whether you're cooking for yourself, your family, your roommates, or your friends. I want you to be so excited about these recipes that you eagerly await 5pm when you can go home from work and start cooking.
                </p>

                <p>
                    On a related note, I absolutely LOVE seeing the food that you're making. It will make my day if you tag 
                    <a 
                        href="https://www.instagram.com/pinchofyum" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="instagram-tag"
                    >
                        @pinchofyum
                    </a> 
                    in your Instagram photos and stories! We love to shout out our favorites on Fridays with our Reader Awards on Instagram Stories.
                </p>

            </Col>

            {/* IMAGE SECTION (RIGHT COLUMN) */}
            {/* order-md-2: Desktop par doosre number par aayega (Right) */}
            <Col md={6} className="order-md-2 order-2">
                <div className="p-3">
                    <img 
                        src={kumkumImgUrl} 
                        alt="Couple whispering about food" 
                        className="responsive-img shadow-sm"
                        style={{ height: '400px' }} 
                    />
                </div>
            </Col>

        </Row>
      </Container>
    </Container>
  );
};

export default CombinedLayout;