"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import { FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

interface Certification {
  src?: string;
  alt: string;
  url?: string;
  issuedDate?: string;
}

const CertificationCard: React.FC<{
  certification: Certification;
  className?: string;
}> = ({ certification, className = "" }) => {
  const [expanded, setExpanded] = useState(false);
  const isPdf = certification.url?.endsWith(".pdf");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      whileHover={{ scale: 1.01 }}
      className={className}
    >
      <Card className="glass-card h-100 border-0 overflow-hidden shadow-lg certification-card">
        <Card.Body className="p-4">
          <div className="d-flex flex-column flex-md-row justify-content-between gap-3 align-items-start">
            <div>
              <h3 className="cert-title mb-2">{certification.alt}</h3>
              <p className="text-muted mb-0 cert-date">
                {certification.issuedDate || "Date unavailable"}
              </p>
            </div>
            <button
              type="button"
              className="btn btn-soft certification-toggle"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? "Hide details" : "Show details"}
              {expanded ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>

          <p className="text-muted small mt-3 mb-0">
            Click to reveal a preview and access the credential directly.
          </p>

          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.25 }}
              className="preview-container mt-4"
            >
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
            </motion.div>
          )}
        </Card.Body>

        {certification.url && (
          <Card.Footer className="bg-transparent border-0 px-4 pb-4 pt-0">
            <motion.div whileHover={{ scale: 1.02 }}>
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gradient w-100 d-flex align-items-center justify-content-center gap-2"
              >
                <FiExternalLink />
                View Certificate
              </a>
            </motion.div>
          </Card.Footer>
        )}
      </Card>

      <style jsx global>{`
        .certification-card {
          background: var(--card-bg);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(var(--border-rgb), 0.16);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .cert-title {
          font-size: 1.15rem;
          line-height: 1.3;
        }

        .cert-date {
          color: var(--muted);
          font-size: 0.95rem;
        }

        .certification-toggle {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 0.85rem;
          border: 1px solid rgba(var(--border-rgb), 0.18);
          color: var(--foreground);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .certification-toggle:hover {
          transform: translateY(-1px);
        }

        .preview-container {
          width: 100%;
          min-height: 240px;
          overflow: hidden;
          border-radius: 1.25rem;
          background: var(--surface);
          border: 1px solid rgba(var(--border-rgb), 0.12);
        }

        .certification-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
          background: var(--surface);
        }

        .btn-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border: none;
          color: #fff;
          padding: 0.75rem 1.25rem;
          border-radius: 0.85rem;
          font-weight: 500;
        }

        .btn-gradient:hover {
          box-shadow: 0 12px 25px rgba(99, 102, 241, 0.18);
        }
      `}</style>
    </motion.div>
  );
};

export default CertificationCard;
