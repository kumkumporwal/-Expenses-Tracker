import React from "react";
import "./AboutSection.css";
import about1 from "../img/cook1.png";  // tumhari image
import about2 from "../img/cook2.png"; // optional 2nd image

const AboutSection = () => {
  return (
    <div className="about-container container-fluid py-5">
      <div className="row justify-content-center align-items-center">
        {/* Left Text Section */}
        <div className="col-lg-4 col-md-6 about-text-box text-center p-5">
          <h5 className="about-subtitle">HI! I'M JIVIKA.</h5>
          <h2 className="about-title">nice to meet you!</h2>
          <p className="about-desc">
            I’m a passionate food lover, recipe creator, and full-time blogger.
            My favorite things include experimenting in the kitchen, photography,
            and of course — dark chocolate!
          </p>
          <button className="btn btn-dark mt-3">LEARN MORE</button>
        </div>

        {/* Right Image Section */}
        <div className="col-lg-6 col-md-6 d-flex gap-3 justify-content-center about-images">
          <img src={about1} alt="Cooking 1" className="about-img" />
          <img src={about2} alt="Cooking 2" className="about-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
