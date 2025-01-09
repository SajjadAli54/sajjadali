import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "./../assets/logo.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/education", label: "Education" },
  { path: "/blogs", label: "Blogs" },
  { path: "/contact", label: "Contact" },
];

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            style={{ borderRadius: "50%" }}
            alt="Logo Image named Sajjad Ali"
            width="100px"
            height="80px"
          />
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
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  to={link.path}
                  activeClassName="active" // Highlight active link
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "normal", // Apply bold style to active link
                    color: isActive ? "#007bff" : "#fff", // Change color of active link
                    transition: "all 0.3s ease",
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
