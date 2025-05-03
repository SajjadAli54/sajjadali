"use client";

import Image from "react-bootstrap/Image";
import Link from "next/link";
import { GoStack } from "react-icons/go";
import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import TechStack from "@components/stack/TechStack";
import { techItems } from "@data/tech-items";
import { useMediaQuery } from "./hooks";
import { jobs } from "./data/jobs";
import "./globals.css";
import QuoteCard from "./components/cards/QuoteCard";
import { formatExperience, getDiffMonths } from "./utils";

export default function Home() {
  const ProfileImage = "/picofme.png";
  const isMobile = useMediaQuery();

  const totalMonths = jobs.reduce((total, job) => {
    const months = getDiffMonths(job.startDate, job.endDate!);
    return total + months;
  }, 0);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return (
    <div className="gradient-background">
      {/* Hero Section */}
      <section className="py-5 min-vh-100 d-flex align-items-center">
        <Row className="align-items-center g-5">
          <Col lg={6} className="text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="profile-image-wrapper">
                <Image
                  src={ProfileImage}
                  alt="Sajjad Ali"
                  className="profile-image shadow-lg"
                  fluid
                />
                <div className="profile-glow"></div>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-gradient display-3 fw-bold mb-4">
                Sajjad Ali
              </h1>
              <h2 className="text-uppercase text-primary mb-3">
                Full Stack Developer
              </h2>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="accent-line"></div>
                <Link
                  href="https://badriconsultancy.com/"
                  target="_blank"
                  className="company-link h5 mb-0 text-decoration-none"
                >
                  @Badri Management Consultancy
                </Link>
              </div>
              <p className="lead mb-4 text-muted">
                Building seamless digital experiences across Web, Mobile, and
                Desktop. Passionate Full-Stack Developer turning complex
                problems into elegant solutions.
                <span className="experience-badge">
                  {formatExperience(years, months)}
                </span>
              </p>

              <Nav className="d-flex gap-3">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/projects">
                    <Button
                      variant="primary"
                      size="lg"
                      className="cta-button shadow"
                    >
                      View Projects
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/contact">
                    <Button
                      variant="outline-primary"
                      size="lg"
                      className="cta-outline shadow"
                    >
                      Get in Touch
                    </Button>
                  </Link>
                </motion.div>
              </Nav>
            </motion.div>
          </Col>
        </Row>
      </section>

      {/* Quote Section */}
      <motion.section
        className="py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Row className="g-5">
          <Col lg={6}>
            <QuoteCard />
          </Col>
          <Col lg={6}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="image-hover-wrapper"
            >
              <Image
                src="/sajan.jpeg"
                alt="Sajjad Ali in the snowfall"
                className="styled-image rounded-4"
                fluid
              />
            </motion.div>
          </Col>
        </Row>
      </motion.section>

      {/* Tech Stack Section */}
      <section className="py-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="tech-stack-section text-center mb-5">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
              <GoStack className="tech-stack-icon" />
              <h2 className="text-gradient mb-0">Tech Stack</h2>
            </div>
            <h3 className="section-subtitle mb-5">
              Tools & Technologies I Master
            </h3>

            <Row className="g-5 align-items-center">
              <Col lg={8}>
                <TechStack techItems={techItems} isMobile={isMobile} />
              </Col>
              <Col lg={4}>
                <motion.div
                  whileHover={{ rotate: 2 }}
                  className="tech-image-wrapper"
                >
                  <Image
                    src="/sajjad.jpeg"
                    alt="Tech Stack"
                    className="tech-image rounded-4"
                    fluid
                  />
                </motion.div>
              </Col>
            </Row>
          </div>
        </motion.div>
      </section>

      <style jsx global>{`
        .gradient-background {
          background: linear-gradient(
            45deg,
            #f8f9fa 0%,
            #e9ecef 50%,
            #f8f9fa 100%
          );
        }

        .text-gradient {
          background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .profile-image-wrapper {
          position: relative;
          display: inline-block;
          border-radius: 50%;
          padding: 12px;
          background: linear-gradient(45deg, #6366f1, #a855f7);
        }

        .profile-image {
          width: ${isMobile ? "280px" : "400px"};
          height: ${isMobile ? "280px" : "400px"};
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid white;
        }

        .profile-glow {
          position: absolute;
          inset: -10px;
          background: linear-gradient(45deg, #6366f155, #a855f755);
          border-radius: 50%;
          filter: blur(20px);
          z-index: -1;
        }

        .company-link {
          color: #4f46e5;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .company-link:hover {
          color: #9333ea;
          text-decoration: underline;
        }

        .cta-button {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          border: none;
          padding: 1rem 2rem;
          font-weight: 600;
        }

        .cta-outline {
          border: 2px solid #6366f1;
          color: #6366f1;
          padding: 1rem 2rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .cta-outline:hover {
          background: #6366f1;
          color: white;
        }

        .experience-badge {
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
          margin-left: 1rem;
          font-size: 0.9em;
        }

        .styled-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 1rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .tech-stack-icon {
          font-size: 2.5rem;
          color: #4f46e5;
        }

        .section-subtitle {
          color: #6b7280;
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .tech-image {
          height: 500px;
          object-fit: cover;
          border: 3px solid white;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .image-hover-wrapper {
          transition: transform 0.3s ease;
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
        }

        .image-hover-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            rgba(99, 102, 241, 0.1),
            rgba(168, 85, 247, 0.1)
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-hover-wrapper:hover::after {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
