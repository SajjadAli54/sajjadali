"use client";

import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import { FiExternalLink } from "react-icons/fi";

import "./certificationCard.css";

interface Certification {
  src?: string;
  alt: string;
  url?: string;
}

const CertificationCard: React.FC<{
  certification: Certification;
  className?: string;
}> = ({ certification, className = "" }) => {
  const isPdf = certification.url?.endsWith(".pdf");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      whileHover={{ scale: 1.02 }}
      className={className}
    >
      <Card className="glass-card h-100 border-0 overflow-hidden shadow-lg">
        {/* PDF/Image Preview */}
        <div className="preview-container position-relative">
          {isPdf ? (
            <iframe
              src={certification.url}
              className="pdf-iframe"
              title={certification.alt}
            />
          ) : (
            <Card.Img
              src={certification.src || "/placeholder.png"}
              alt={certification.alt}
              className="certification-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.png";
              }}
            />
          )}
          <div className="preview-overlay" />
        </div>

        {/* Card Content */}
        <Card.Body className="d-flex flex-column align-items-center p-4">
          <h3 className="text-gradient text-center mb-3">
            {certification.alt}
          </h3>

          {certification.url && (
            <motion.div whileHover={{ scale: 1.05 }} className="w-100">
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gradient w-100 d-flex align-items-center justify-content-center gap-2"
              >
                <FiExternalLink />
                View Certification
              </a>
            </motion.div>
          )}
        </Card.Body>
      </Card>

    </motion.div>
  );
};

export default CertificationCard;
