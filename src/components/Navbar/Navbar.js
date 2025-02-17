import React from "react";
import "./Navbar.css";
import navbar_logo from "../../assets/fed_net_logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={navbar_logo} alt="FedNet Logo" className="navbar-logo" />
        <span className="fed">Fed</span>
        <span className="net">Net</span>
      </div>
      <div className="navbar-links">
        <a href="#docs">Documentation</a>
        <a href="#blog">Blog</a>
        <a href="#events">Events</a>
        <a href="#discuss">Discuss</a>
        <a href="#signup" className="navbar-btn">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Navbar;
