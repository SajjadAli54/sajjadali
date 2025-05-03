"use client";

import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import { FiExternalLink } from "react-icons/fi";

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

      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 1.5rem;
          transition: all 0.3s ease;
        }

        .preview-container {
          height: 250px;
          overflow: hidden;
          position: relative;
        }

        .certification-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
          background: #f8f9fa;
        }

        .preview-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.1));
        }

        .text-gradient {
          background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .btn-gradient {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          border: none;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .btn-gradient:hover {
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
          color: white;
        }

        .glass-card:hover .certification-image {
          transform: scale(1.05);
        }
      `}</style>
    </motion.div>
  );
};

export default CertificationCard;
