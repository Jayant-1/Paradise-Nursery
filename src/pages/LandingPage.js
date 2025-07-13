import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="company-description">
            Welcome to Paradise Nursery, your premier destination for beautiful
            houseplants that bring life and tranquility to your home. We
            specialize in carefully curated plants that are perfect for both
            beginners and experienced plant enthusiasts. Each plant in our
            collection is selected for its beauty, hardiness, and ability to
            thrive in indoor environments. Start your journey to a greener, more
            peaceful living space with our exceptional selection of houseplants.
          </p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
