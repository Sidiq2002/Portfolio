import { useState } from "react";
import "../StyleSheets/Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleBurgerClick = () => setIsActive(!isActive);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>PORTFOLIO</h1>
      </div>
      
      {/* Burger Icon with 3-bar to X transition */}
      <div className={`burger-icon ${isActive ? "active" : ""}`} onClick={handleBurgerClick}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {/* The dropdown menu */}
      <ul className={`nav-links ${isActive ? "active" : ""}`}>
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <NavLink 
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
              className="nav-item" 
              onClick={() => setIsActive(false)}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};