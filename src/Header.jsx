import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import btn from "./btn.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <span className="logo">
        <img src={logo} alt="Orbitly Logo" />
        <h2>Orbitly</h2>
      </span>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">About us</Link>

        {/* Dropdown for Services */}
        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropdown-toggle">Services</span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/web-design">Web Design</Link>
              <Link to="/seo">SEO</Link>
              <Link to="/marketing">Marketing</Link>
            </div>
          )}
        </div>

        <Link to="/">FAQ</Link>
        <Link to="/blog">Blog</Link>
      </div>

      <Link className="acc-btn" to="/get-started">
        <img src={btn} alt="Onboarding Button" />
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
    </header>
  );
};

export default Header;
