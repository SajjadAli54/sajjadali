"use client";

import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./redux/slices/admin";

import { routes, navLinks } from "@data/routes";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [links, setLinks] = useState(navLinks);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    if (!user) {
      setLinks([...navLinks]);
    } else {
      const unwantedRoutes = [
        routes.contact,
        routes.education,
        routes.experience,
      ];
      const updatedLinks = navLinks.filter(
        (link) => !unwantedRoutes.includes(link.href)
      );
      setLinks([
        ...updatedLinks,
        { href: "/projects/add", label: "Add Project" },
        {
          href: routes.home,
          label: "Logout",
          onClick: () => {
            dispatch(setUser(""));
            window.location.reload();
          },
        },
      ]);
    }
  }, [user]);

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
            {links.map(({ href, label, onClick }) => (
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
            {links.map(({ href, label, onClick }) => (
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
