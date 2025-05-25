import { useState } from "react";
import "../StyleSheets/Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Portfolio</h1>
      </div>
      <div className="nav-container">
        <div
          className={`burger-icon ${isActive ? `active ` : ""}`}
          id="burger-icon"
          onClick={handleBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isActive ? `active ` : ""}`} id="nav-links">
          <li>
            <NavLink to="/" className="nav-item" onClick={handleBurgerClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="About"
              className="nav-item"
              onClick={handleBurgerClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Skills"
              className="nav-item"
              onClick={handleBurgerClick}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Projects"
              className="nav-item"
              onClick={handleBurgerClick}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Contact"
              className="nav-item"
              onClick={handleBurgerClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
