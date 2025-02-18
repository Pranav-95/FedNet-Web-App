import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/about" className="footer-link">
            About
          </a>
          <a href="/privacy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/contact" className="footer-link">
            Contact
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 FedNet. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
