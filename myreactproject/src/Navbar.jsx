import React, {useState} from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';


const Navbar = () => {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar" aria-label="main navigation">
      <div className="navbar-container container">
        <img src="david.jpg" alt="david-picture" className="profile"/>
        <a href="#home" className="navbar-logo" onClick={closeMobileMenu}> 
          Ugba David
        </a>

        
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={closeMobileMenu}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links" onClick={closeMobileMenu}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
