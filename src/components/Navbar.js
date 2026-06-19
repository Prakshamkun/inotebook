import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/notes" ? "active" : ""
                }`}
                to="/notes"
              >
                My Notes
              </Link>
            </li>

          </ul>

          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-light mx-2">
  <i className="fas fa-sign-in-alt me-1"></i>
  Login
</Link>

           <Link to="/signup" className="btn btn-light">
  <i className="fas fa-user-plus me-1"></i>
  Sign Up
</Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;