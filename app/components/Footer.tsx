"use client";

import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { IconType } from "react-icons";

import "./footer.css";

interface BadgeProps {
  href: string;
  icon: IconType;
  className: string;
}

const MyFooter = ({ badges }: { badges: BadgeProps[] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
      className="glass-footer py-5"
    >
      <Container>
        <Row className="align-items-center text-center g-5">
          {/* Social Links */}
          <Col className="order-md-1 order-2">
            <motion.div variants={itemVariants}>
              <h5 className="text-gradient mb-4">{"Let's Connect"}</h5>
              <div className="d-flex justify-content-center gap-3">
                {badges.map((badge, index) => (
                  <motion.a
                    key={index}
                    href={badge.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    variants={itemVariants}
                  >
                    {<badge.icon size={28} />}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* Inspiration Quote */}
          {/* <Col md={6} className="order-md-2 order-1">
            <motion.div variants={itemVariants}>
              <h5 className="text-gradient mb-4">Stay Inspired</h5>
              <motion.div
                className="quote-box p-4 rounded-4"
                whileHover={{ scale: 1.02 }}
              >
                <p className="mb-0 fst-italic">
                  {"Code is like humor. When you have to explain it, it's bad."}
                </p>
              </motion.div>
            </motion.div>
          </Col> */}
        </Row>

        {/* Copyright */}
        {/* <Row className="mt-5">
          <Col>
            <motion.div
              variants={itemVariants}
              className="text-center text-muted small"
            >
              © {new Date().getFullYear()} Sajjad Ali. Made with
              <FiHeart className="mx-1 text-danger" />
              All Rights Reserved.
            </motion.div>
          </Col>
        </Row> */}
      </Container>
    </motion.footer>
  );
};

export default MyFooter;
