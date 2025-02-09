"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { routes, navLinks } from "@data/routes";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./redux/slices/admin";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const links = useMemo(() => {
    if (!user) {
      return [...navLinks];
    }
    return [
      ...navLinks.filter(
        (link) =>
          ![routes.contact, routes.education, routes.experience].includes(
            link.href
          )
      ),
      { href: "/projects/add", label: "Add Project" },
      {
        href: routes.home,
        label: "Logout",
        onClick: () => {
          dispatch(setUser(""));
          window.location.reload();
        },
      },
    ];
  }, [user, dispatch]);

  return (
    <Navbar expand="lg" className="bg-light shadow-sm">
      <Container>
        <Link href={routes.home} passHref>
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
            {links.map(({ href, label, onClick }) => (
              <Link key={`${href}${label}`} href={href} passHref>
                <Nav.Link onClick={onClick} className="fw-bold text-dark">
                  {label}
                </Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
