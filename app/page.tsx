"use client";

import Link from "next/link";
import { GoStack } from "react-icons/go";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

import TechStack from "@components/stack/TechStack";

import { techItems } from "@data/tech-items";
import Projects from "@pages/projects/page";

export default function Home() {
  const ProfileImage = "picofme.png";
  return (
    <Container className="py-5 animate__animated animate__fadeIn">
      <Row className="align-items-center text-center text-lg-start">
        {/* Left Section */}
        <Col lg={6}>
          <h1 className="display-4 fw-bold mb-3">Sajjad Ali</h1>
          <h2 className="fw-bold mb-3">Full Stack Software Developer</h2>
          <h3 className="fw-bold mb-3">
            <Link
              className="text-primary text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              href="https://badriconsultancy.com/"
              passHref
            >
              Badri Management Consultancy
            </Link>
          </h3>
          <p className="lead">
            Building seamless digital experiences across Web, Mobile, and
            Desktop. Passionate Full-Stack Developer turning complex problems
            into elegant solutions.
          </p>
          <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
            <Link href="/projects" passHref>
              <Button variant="success" size="lg">
                View My Work
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="secondary" size="lg">
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
            src={ProfileImage}
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

      {/* Horizontal Divider */}
      <hr className="my-5" />

      {/* Project Section */}
      <div className="text-center mb-5">
        <h2 className="text-primary d-flex align-items-center justify-content-center gap-2">
          <GoStack className="text-warning" /> Projects{" "}
        </h2>
        <Projects />
      </div>

      {/* Contact Section */}
      <div id="contact" className="text-center mt-5">
        <h2 className="text-primary mb-3">Let&apos;s Connect</h2>
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
