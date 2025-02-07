"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "./logo.png";
import { routes, navLinks as links } from "./data/routes";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-light shadow-sm">
      <Container>
        {/* Brand Logo with Next.js Link */}
        <Link href={routes.home} passHref legacyBehavior>
          <Navbar.Brand className="d-flex align-items-center">
            <Image src={Logo} alt="Profile" width={50} height={50} priority />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map(({ href, label }) => (
              <Link key={`${href}${label}`} href={href} passHref legacyBehavior>
                <Nav.Link>{label}</Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
