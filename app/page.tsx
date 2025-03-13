"use client";

import Link from "next/link";
import { GoStack } from "react-icons/go";
import { Button, Row, Col, Image } from "react-bootstrap";

import TechStack from "@components/stack/TechStack";

import { techItems } from "@data/tech-items";
import { useMediaQuery } from "./hooks";

import "./globals.css";

export default function Home() {
  const ProfileImage = "picofme.png";

  const isMobile = useMediaQuery();

  return (
    <div className="py-5 animate__animated animate__fadeIn">
      <Row className="align-items-center text-center text-lg-start" id="hero">
        {/* Left Section */}
        <Col lg={6} className="mb-4 mb-lg-0">
          <h1 className="display-4 fw-bold mb-3">Sajjad Ali</h1>
          <h2 className="fw-bold mb-3">Full Stack Developer</h2>
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
          <p className="lead mb-4">
            Building seamless digital experiences across Web, Mobile, and
            Desktop. Passionate Full-Stack Developer turning complex problems
            into elegant solutions.
          </p>
          <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
            <Link href="/projects" passHref>
              <Button variant="success" size="lg">
                Projects
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline-dark" size="lg" className="btn-animated">
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
            width={isMobile ? 300 : 400}
            height={isMobile ? 300 : 400}
            fluid
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
      </Row>

      {/* Horizontal Divider */}
      <hr className="my-5" />

      {/* Tech Stack Section */}
      <div className="tech-stack-section text-center mb-5">
        <h2 className="text-primary d-flex align-items-center justify-content-center gap-2">
          <GoStack className="text-warning" /> Tech Stack
        </h2>
        <h3 className="text-center  display-4 fw-bold mb-5">
          The technologies I work with to bring ideas to life
        </h3>

        <Row className="align-items-center">
          <Col lg={4} md={5} sm={12} className="tech-image-container">
            <Image
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Tech Stack"
              className="tech-full-height-img"
              fluid
            />
          </Col>

          <Col className="d-flex flex-column justify-content-center">
            <TechStack techItems={techItems} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
