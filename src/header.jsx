import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand me-3" to="/">
          MyBrand
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Main Navbar Links and Buttons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* LEFT SIDE: Nav links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`} to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`} to="/contact">Contact</Link>
            </li>
          </ul>

          {/* RIGHT SIDE: Buttons */}
          <div className="d-flex align-items-center gap-2">
            {/* Dark/Light Mode Toggle Button */}
            <button onClick={toggleTheme} className="btn btn-outline-secondary">
              <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
            </button>
            {/* Login & Signup Buttons */}
            <Link className="btn btn-outline-primary" to="/login">Login</Link>
            <Link className="btn btn-warning" to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}