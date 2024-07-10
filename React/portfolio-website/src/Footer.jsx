import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
