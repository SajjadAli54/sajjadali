import PropTypes from "prop-types";

import { Link, NavLink } from "react-router-dom";

function NavBar({ navLinks, logo }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ borderRadius: "50%", width: "80px", height: "80px" }}
          />
        </Link>

        <button
          className="navbar-toggler bg-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse bg-transparent" id="navbarNav">
          <ul className="navbar-nav ms-auto bg-transparent">
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

NavBar.propTypes = {
  navLinks: PropTypes.array.isRequired,
  logo: PropTypes.string.isRequired,
};
