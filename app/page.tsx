"use client";

import Link from "next/link";
import { GoStack } from "react-icons/go";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

import TechStack from "./components/TechStack";

import { techItems } from "./data/tech-items";

import ProfileImage from "./picofme.png";

export default function Home() {
  return (
    <Container className="py-5">
      <Row className="align-items-center text-center text-lg-start">
        {/* Left Section */}
        <Col lg={6}>
          <h1 className="display-4 fw-bold mb-3">Hi, I am Sajjad Ali</h1>
          <p className="lead">
            Building seamless digital experiences across Web, Mobile, and
            Desktop. Passionate Full-Stack Developer turning complex problems
            into elegant solutions.
          </p>
          <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
            <Link href="/projects" passHref>
              <Button variant="primary" size="lg">
                View My Work
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline-primary" size="lg">
                Contact Me
              </Button>
            </Link>
          </div>
        </Col>

        {/* Right Section */}
        <Col lg={6} className="text-center mt-4 mt-lg-0">
          <Image
            id="myImage"
            className="rounded-circle object-fit-cover"
            src={"picofme.png"}
            alt="Sajjad Ali"
            width={200}
            height={200}
            fluid
          />
        </Col>
      </Row>

      {/* Horizontal Divider */}
      <hr className="my-5" />

      {/* Tech Stack Section */}
      <div className="text-center mb-5">
        <h2 className="text-primary d-flex align-items-center justify-content-center gap-2">
          <GoStack className="text-warning" /> Tech Stack
        </h2>
        <TechStack techItems={techItems} />
      </div>

      {/* Contact Section */}
      <div id="contact" className="text-center mt-5">
        <h2 className="text-primary mb-3">Let's Connect</h2>
        <p>I am always open to new opportunities and collaborations.</p>
        <Link href="/contact" passHref>
          <Button variant="secondary" size="lg">
            Get In Touch
          </Button>
        </Link>
      </div>
    </Container>
  );
}
