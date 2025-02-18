import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import "./Home.css";
import logo from "../../assets/fed_net_logo.png";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* Fixed Navbar at the top */}
      <Navbar />
      {/* Optional top banner */}
      <div className="top-banner">
        Train your machine learning model using federatd learning.
      </div>
      {/* Hero Section */}
      <div className="hero">
        {/* Left column */}
        <div className="hero-left">
          <h1>
            <span className="fed">Fed</span>
            <span className="net">Net</span>: A step towards making FL more
            efficient
          </h1>
          <p>
            FedNet is a unified platform for seamless federated learning,
            enabling secure, decentralized training with analytics and
            evaluation for model performance.
          </p>
          <button className="tutorial-btn">Take the tutorial</button>
        </div>

        {/* Right column (Summit Card) */}
        <div className="hero-right">
          <div className="summit-card">
            <img src={logo} alt="Flower AI Logo" className="summit-logo logo" />
            <p>A step towards making FL more efficient.</p>
            <button
              className="register-btn"
              onClick={() => navigate("/register")}
            >
              Register now
            </button>
          </div>
        </div>
      </div>
      {/* Fixed Star on GitHub button in the center */}
      <button className="star-button">Get Started</button>
      <Feature />
      <Footer />
    </div>
  );
}

export default Home;
