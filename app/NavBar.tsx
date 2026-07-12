"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { FiMenu, FiX } from "react-icons/fi";
import { routes, navLinks } from "@data/routes";


// import { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";
// import { FiMenu, FiX } from "react-icons/fi";
// import { routes, navLinks } from "@data/routes";

const NavBar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const linkVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="glass-navbar"
    >
      <Navbar expand="lg" className="py-3">
        <div className="nav-inner">
          {/* Logo */}
          <Link href={routes.home} passHref legacyBehavior>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Navbar.Brand className="d-flex align-items-center logo-container">
                <Image
                  src="/logo.png"
                  alt="Profile"
                  width={50}
                  height={50}
                  className="logo-img"
                />
              </Navbar.Brand>
            </motion.div>
          </Link>

          <div className="d-flex align-items-center gap-3">
            {/* Mobile Menu Button */}
            <Button
              variant="link"
              className="d-lg-none p-0"
              onClick={() => setShowDrawer(true)}
            >
              <FiMenu size={24} />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
            <Nav className="ms-auto align-items-center gap-4">
              {navLinks.map(({ href, label, onClick }) => (
                <motion.div
                  key={`${href}${label}`}
                  whileHover="hover"
                  whileTap="tap"
                  variants={linkVariants}
                >
                  <Link href={href} passHref legacyBehavior>
                    <Nav.Link className="nav-link" onClick={onClick}>
                      {label}
                    </Nav.Link>
                  </Link>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas
        show={showDrawer}
        onHide={() => setShowDrawer(false)}
        placement="end"
        className="glass-offcanvas"
      >
        <Offcanvas.Header className="border-bottom">
          <Offcanvas.Title className="text-gradient">
            Navigation
          </Offcanvas.Title>
          <Button
            variant="link"
            onClick={() => setShowDrawer(false)}
            className="p-0"
          >
            <FiX size={24} />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            {navLinks.map(({ href, label, onClick }, index) => (
              <motion.div
                key={`${href}${label}`}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={href} passHref legacyBehavior>
                  <Nav.Link
                    className="nav-link"
                    onClick={() => {
                      setShowDrawer(false);
                      if (onClick) onClick();
                    }}
                  >
                    {label}
                  </Nav.Link>
                </Link>
              </motion.div>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <style jsx global>{`
        .glass-navbar {
          background: rgba(var(--surface-rgb), 0.90);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(var(--border-rgb), 0.18);
          box-shadow: 0 14px 50px rgba(15, 23, 42, 0.08);
        }

        .nav-inner {
          width: min(1160px, 100%);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .glass-offcanvas {
          background: rgba(var(--surface-rgb), 0.96);
          backdrop-filter: blur(16px);
        }

        .logo-container {
          position: relative;
          padding: 5px;
        }

        .logo-img {
          border-radius: 50%;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .logo-container::before {
          content: "";
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, var(--primary), var(--accent));
          border-radius: 50%;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .logo-container:hover::before {
          opacity: 1;
        }

        .nav-link {
          color: var(--foreground) !important;
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0 !important;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .theme-toggle {
          border: none;
          background: none;
          color: var(--foreground);
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .text-gradient {
          background: linear-gradient(45deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </motion.nav>
  );
};

export default NavBar
