import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutMe.css";
import imgown from "../../img/About/imgown.png";

const AboutPage = () => {
  return (
    <section className="aboutpage-section py-5">
      <div className="container px-md-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img
              src={imgown}              alt="Kumkum Porwal"
              className="aboutpage-img img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <p className="breadcrumb small text-uppercase mb-2">Home &gt; About Me</p>
            <h1 className="title mb-3">About Me</h1>
            <h5 className="intro mb-4">HI, MY NAME IS <span className="script">Kumkum!</span></h5>
            <p className="text mb-3">
              Welcome to my cozy corner of the internet! I’m <strong>Kumkum Porwal</strong>, a creative enthusiast who loves to explore, share and connect. What began as a simple idea has grown into something meaningful and full of heart.
            </p>
            <p className="text mb-3">
              I believe in the beauty of everyday moments — a warm sunrise, a fresh idea, a genuine conversation. My journey is about living with purpose, creating with joy and embracing simplicity.
            </p>
            <p className="text">
              I live in <strong>Ratlām, Delanpur</strong>, where I cherish peaceful mornings, playful creativity and time with the people who matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
