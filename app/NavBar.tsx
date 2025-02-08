"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { routes, navLinks as links } from "@data/routes";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./redux/slices/admin";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  console.log(user);
  return (
    <Navbar expand="lg" className="bg-light shadow-sm">
      <Container>
        <Link href={routes.home} passHref legacyBehavior>
          <Navbar.Brand className="d-flex align-items-center">
            <Image
              src={"/logo.png"}
              alt="Profile"
              width={50}
              height={50}
              priority
            />
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

            {user && (
              <Link
                href={routes.home}
                onClick={() => dispatch(setUser(null))}
                passHref
                legacyBehavior
              >
                <Nav.Link>Logout</Nav.Link>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
