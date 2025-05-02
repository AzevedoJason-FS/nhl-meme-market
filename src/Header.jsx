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
      <Link to="/">
      <span className="logo">
        <img src={logo} alt="Orbitly Logo" />
        <h2>Orbitly</h2>
      </span>
      </Link>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/about-us">About us</Link>

        {/* Dropdown for Services */}
        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link to="/services">
          <span className="dropdown-toggle">Services</span>
          </Link>
          {dropdownOpen && (
            <div className="dropdown-menu">
            <Link to="/website-development-and-design">Website Design & Development</Link>
            <Link to="/google-business-profile-optimization">Google Business Profile Optimization</Link>
            <Link to="/seo-optimization">SEO Optimization</Link>
            <Link to="/social-media-content-design">Social Media Content Design</Link>
            </div>
          )}
        </div>

        <Link to="/faq">FAQ</Link>
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
