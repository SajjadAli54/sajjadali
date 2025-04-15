"use client";

import React, { useState } from "react";
import Link from "next/link";

import { routes, navLinks } from "@data/routes";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <Navbar expand="lg" className="bg-light shadow-sm">
      <Container>
        {/* Logo */}
        <Link href={routes.home} passHref legacyBehavior>
          <Navbar.Brand className="d-flex align-items-center">
            <Image src="/logo.png" alt="Profile" width={50} height={50} />
          </Navbar.Brand>
        </Link>

        {/* Mobile Menu Button */}
        <Button
          variant="outline-dark"
          className="d-lg-none"
          onClick={() => setShowDrawer(true)}
        >
          ☰
        </Button>

        {/* Desktop Navigation */}
        <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
          <Nav className="ms-auto">
            {navLinks.map(({ href, label, onClick }) => (
              <Link key={`${href}${label}`} href={href} passHref legacyBehavior>
                <Nav.Link onClick={onClick}>{label}</Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Offcanvas Drawer for Mobile */}
      <Offcanvas
        show={showDrawer}
        onHide={() => setShowDrawer(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {navLinks.map(({ href, label, onClick }) => (
              <Link key={`${href}${label}`} href={href} passHref legacyBehavior>
                <Nav.Link
                  onClick={() => {
                    setShowDrawer(false);
                    if (onClick) onClick();
                  }}
                >
                  {label}
                </Nav.Link>
              </Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default NavBar;
