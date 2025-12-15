import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Ugba David</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="https://github.com/davidugba" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            <a href="https://www.linkedin.com/in/david-ugba-83a859159" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a href="https://wa.me/35677709894" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'whatsapp']} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ugba David. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;