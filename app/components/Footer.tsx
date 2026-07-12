"use client";

import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IconType } from "react-icons";
import { FiHeart } from "react-icons/fi";

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
      <div className="footer-inner">
        <Row className="align-items-center text-center g-5">
          {/* Social Links */}
          <Col md={6} className="order-md-1 order-2">
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
          <Col md={6} className="order-md-2 order-1">
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
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-5">
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
        </Row>
      </div>

      <style jsx global>{`
        .glass-footer {
          background: var(--card-bg);
          backdrop-filter: blur(16px);
          border-top: 1px solid rgba(var(--border-rgb), 0.18);
          box-shadow: 0 -4px 30px rgba(15, 23, 42, 0.08);
        }

        .text-gradient {
          background: linear-gradient(45deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(99, 102, 241, 0.12);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: linear-gradient(45deg, var(--primary), var(--accent));
          color: white !important;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.24);
        }

        .quote-box {
          background: rgba(var(--surface-rgb), 0.9);
          border: 1px solid rgba(var(--border-rgb), 0.12);
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
        }

        .footer-inner {
          width: min(1120px, 100%);
          margin: 0 auto;
        }

        .icon {
          transition: transform 0.3s ease;
        }

        .social-icon:hover .icon {
          transform: scale(1.1);
        }
      `}</style>
    </motion.footer>
  );
};

export default MyFooter;
