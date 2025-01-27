import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../assets/logo.png";
import { routes } from "../data/routes";

const navLinks = [
  { path: routes.home, label: "Home" },
  { path: routes.experience, label: "Experience" },
  { path: routes.projects, label: "Projects" },
  { path: routes.education, label: "Education" },
  { path: routes.blogs, label: "Blogs" },
  { path: routes.contact, label: "Contact" },
];

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ borderRadius: "50%", width: "80px", height: "80px" }}
          />
        </Link>

        {/* Toggle button for mobile */}
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

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <NavLink
                  exact
                  to={link.path}
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "#00bfff" : "#fff",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "color 0.3s ease",
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
