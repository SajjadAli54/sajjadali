"use client";
import Image from "react-bootstrap/Image";

import Link from "next/link";
import { GoStack } from "react-icons/go";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import TechStack from "@components/stack/TechStack";
import { techItems } from "@data/tech-items";
import { useMediaQuery } from "./hooks";

import "./globals.css";
import QuoteCard from "./components/cards/QuoteCard";

export default function Home() {
  const ProfileImage = "picofme.png";
  const isMobile = useMediaQuery();

  return (
    <div className="py-5 animate__animated animate__fadeIn">
      <Row className="align-items-center text-center text-lg-start" id="hero">
        <Col lg={6} className="text-center mt-4 mt-lg-0">
          <Image
            id="myImage"
            className="object-fit-cover shadow-lg mb-4 mb-lg-0 rounded-circle"
            src={ProfileImage}
            alt="Sajjad Ali"
            width={isMobile ? 300 : 400}
            height={isMobile ? 300 : 400}
            fluid
          />
        </Col>

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
          <Nav className="d-flex gap-3 justify-content-center justify-content-lg-start">
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
          </Nav>
        </Col>
      </Row>

      {/* <hr className="my-3" /> */}
      <Row>
        <Col lg={6}>
          <QuoteCard />
        </Col>
        <Col>
          <Image
            src="/sajan.jpeg"
            className="shadow-lg mb-4 mb-lg-0 rounded"
            alt="Sajjad Ali in the snowfall"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </Col>
      </Row>
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
          <Col className="d-flex flex-column justify-content-center">
            <TechStack techItems={techItems} />
          </Col>
          <Col lg={4} md={5} sm={12} className="tech-image-container">
            <Image
              src="/sajjad.jpeg"
              alt="Tech Stack"
              className="tech-full-height-img"
              fluid
              style={{ objectFit: "cover", width: "100%", height: "500px" }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
