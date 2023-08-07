import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Developed by Rohit Telgote❤️. </p>
        <div className="social-icons">
          {/* Add your social media icons here */}
          <a href="https://github.com/rohittelgote23/" title='Github' target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/rohittelgote23/" title='LinkedIn' target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/rohit_telgote23" title='Instagram' target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://medium.com/@rohittelgote23" title="Medium">
          <i class="fab fa-medium"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
