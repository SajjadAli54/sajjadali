"use client";

import Link from "next/link";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

import { jobs } from "@/app/data/jobs";
import { useMediaQuery } from "@/app/hooks";
import { formatExperience, getDiffMonths } from "@/app/utils";

function HeroSection() {
  const isMobile = useMediaQuery();
  const profileImageSrc = "/picofme.png";

  const totalMonths = jobs.reduce((sum, job) => sum + getDiffMonths(job.startDate, job.endDate!), 0);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return (
    <section className="py-5 min-vh-100 d-flex align-items-center bg-light">
      <Row className="align-items-center g-5">
        
        {/* === Profile Image === */}
        <Col lg={4} className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-image-wrapper position-relative">
              <Image
                src={profileImageSrc}
                alt="Sajjad Ali"
                className="profile-image rounded-circle shadow-lg"
                width={isMobile ? 120 : 240}
                height={isMobile ? 120 : 240}
                fluid
              />
              <div className="profile-glow"></div>
            </div>
          </motion.div>
        </Col>

        {/* === Hero Content === */}
        <Col>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-gradient display-4 fw-bold mb-3">Sajjad Ali</h1>
            <h2 className="text-uppercase text-primary fs-4 mb-3">
              Full Stack Developer
            </h2>

            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="accent-line"></div>
              <Link
                href="https://badriconsultancy.com/"
                target="_blank"
                className="company-link text-decoration-none text-dark fw-medium"
              >
                Badri Management Consultancy
              </Link>
            </div>

            <p className="text-muted lead mb-3">
              I design and develop user-centric applications across web, mobile, and desktop platforms. I specialize in translating complex problems into seamless and performant solutions.
            </p>

            <p className="text-muted small mb-4">
              <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                {formatExperience(years, months)} of experience
              </span>
            </p>

            <Nav className="d-flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/projects">
                  <Button variant="primary" size="lg" className="cta-button shadow-sm px-4">
                    View Projects
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/contact">
                  <Button variant="outline-primary" size="lg" className="cta-outline shadow-sm px-4">
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </Nav>
          </motion.div>
        </Col>
      </Row>
    </section>
  );
}

export default HeroSection;
