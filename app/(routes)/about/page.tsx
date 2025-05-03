"use client";

import { Container, Row, Col, Card, Image } from "react-bootstrap";
import ContactSection from "./ContactSection";
import { motion } from "framer-motion";
import { FiGlobe, FiCode, FiCoffee } from "react-icons/fi";

export default function AboutPage() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerVariants = {
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  return (
    <div className="gradient-background">
      <Container className="py-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
        >
          {/* Hero Section */}
          <Row className="justify-content-center mb-5">
            <Col md={10} className="text-center">
              <motion.div variants={fadeInVariants}>
                <h1 className="display-4 fw-bold mb-4 text-gradient">
                  About Me
                </h1>
                <div className="profile-image-wrapper mb-4">
                  <Image
                    src="/ntnu.jpg"
                    roundedCircle
                    width={250}
                    height={250}
                    className="profile-image shadow-lg"
                    alt="Profile"
                  />
                  <div className="profile-glow"></div>
                </div>
                <motion.p
                  className="lead mb-4 glass-card p-4"
                  variants={fadeInVariants}
                >
                  Since I lost track of time untangling business logic puzzles
                  and building “just for fun” prototypes, I have been driven by
                  a relentless curiosity and passion for learning. I thrive when
                  transforming complex requirements into intuitive, reliable
                  software solutions.
                </motion.p>
              </motion.div>
            </Col>
          </Row>

          {/* Cards Section */}
          <Row className="g-4 mb-5">
            {[
              {
                icon: <FiCode className="section-icon" />,
                title: "Current Role",
                content: (
                  <>
                    <p>
                      As a Full-Stack Developer at Badri Solutions, I architect
                      data-intensive dashboards and backend services using:
                    </p>
                    <div className="tech-tags">
                      {["Python", "ReactJS", "FastAPI", "Django", "ML"].map(
                        (tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                    <p className="mt-3">
                      Collaborating across departments (Actuarial, IT, Sales), I
                      ensure solutions balance technical excellence with
                      business needs.
                    </p>
                  </>
                ),
              },
              {
                icon: <FiGlobe className="section-icon" />,
                title: "Academic Journey",
                content: (
                  <>
                    <p>
                      Funded semester at Norwegian University of Science and
                      Technology working on medical imaging research with ML.
                    </p>
                    <div className="travel-badges">
                      {[
                        "Oslo",
                        "Milan",
                        "Venice",
                        "Warsaw",
                        "Prague",
                        "Vienna",
                      ].map((city) => (
                        <span key={city} className="travel-badge">
                          {city}
                        </span>
                      ))}
                    </div>
                  </>
                ),
              },
              // {
              //   icon: <FiBook className="section-icon" />,
              //   title: "Projects & Leadership",
              //   content: (
              //     <>
              //       <p>
              //         Led development of Flutter-based 3D brain-study app with
              //         Blender models for medical education.
              //       </p>
              //       <ul className="accomplishments-list">
              //         <li>Cross-functional team leadership</li>
              //         <li>3D model integration</li>
              //         <li>Android performance optimization</li>
              //       </ul>
              //     </>
              //   ),
              // },
              {
                icon: <FiCoffee className="section-icon" />,
                title: "Hobbies & Passions",
                content: (
                  <>
                    <p>
                      When not coding: Exploring new cultures, culinary
                      experiments, and writing an Urdu novel.
                    </p>
                    <div className="creative-grid">
                      <div className="creative-item">✈️ Travel</div>
                      <div className="creative-item">📚 Literature</div>
                      <div className="creative-item">🍳 Cooking</div>
                      <div className="creative-item">✍️ Writing</div>
                    </div>
                  </>
                ),
              },
            ].map((section, index) => (
              <Col md={6} key={index}>
                <motion.div variants={fadeInVariants}>
                  <Card className="glass-card h-100">
                    <Card.Body className="p-4">
                      <div className="icon-wrapper">{section.icon}</div>
                      <Card.Title className="fw-bold mb-3">
                        {section.title}
                      </Card.Title>
                      <Card.Text className="text-muted">
                        {section.content}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ContactSection />
        </motion.div>
      </Container>

      <style jsx global>{`
        .gradient-background {
          background: linear-gradient(150deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .text-gradient {
          background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .profile-image-wrapper {
          position: relative;
          display: inline-block;
        }

        .profile-image {
          border: 4px solid white;
          position: relative;
          z-index: 1;
        }

        .profile-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: linear-gradient(45deg, #6366f155, #a855f755);
          border-radius: 50%;
          filter: blur(25px);
          z-index: 0;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 1rem;
          transition: transform 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-5px);
        }

        .icon-wrapper {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .section-icon {
          color: white;
          font-size: 1.5rem;
        }

        .tech-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tech-tag {
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.9em;
        }

        .travel-badges {
          display: flex;
          gap: 0.5rem;
          margin: 1rem 0;
        }

        .travel-badge {
          border: 2px solid #6366f1;
          color: #6366f1;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-weight: 500;
        }

        .accomplishments-list {
          list-style: none;
          padding-left: 0;
        }

        .accomplishments-list li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.5rem;
        }

        .accomplishments-list li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: #6366f1;
        }

        .creative-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .creative-item {
          padding: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 0.5rem;
          text-align: center;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
