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
            <a href="#"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
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