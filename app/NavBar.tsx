"use client";

import React, { useEffect } from "react";
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

  const [links, setLinks] = React.useState(navLinks);

  useEffect(() => {
    if (!user) {
      setLinks([...links]);
    } else {
      const unwantedRoutes = [
        routes.contact,
        routes.education,
        routes.experience,
      ];
      const updatedLinks = links.filter(
        (link) => !unwantedRoutes.includes(link.href)
      );
      setLinks([
        ...updatedLinks,
        { href: "/projects/add", label: "Add Project" },
        {
          href: "#",
          label: "Logout",
          onClick: () => dispatch(setUser(null)),
        },
      ]);
    }
  }, [user]);

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
            {links.map(({ href, label, onClick }) => (
              <Link
                key={`${href}${label}`}
                href={href}
                onClick={onClick}
                passHref
                legacyBehavior
              >
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
