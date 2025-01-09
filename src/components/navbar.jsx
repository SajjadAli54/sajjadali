import React from "react";
import { Link } from "react-router-dom";

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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          alt="Logo Image named Sajjad Ali"
          width="200"
          height="150"
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
              <Link className="nav-link" to={link.path}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
