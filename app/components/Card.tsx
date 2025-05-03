"use client";

import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Tags from "@components/Tags";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

interface MyCardProps {
  image?: string;
  url?: string;
  title?: string;
  subtitle?: string;
  companyUrl?: string;
  description?: string;
  tags?: string[];
  className?: string;
}

const MyCard: React.FC<MyCardProps> = ({
  image = "/placeholder.png",
  title,
  subtitle,
  url,
  companyUrl,
  description,
  tags = [],
  className,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Card
        className="h-100 border-0 shadow-lg overflow-hidden glass-card"
        style={{ borderRadius: "1.5rem" }}
      >
        <div className="image-container">
          <Card.Img
            src={image}
            alt={title}
            className="card-image"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.png";
            }}
          />
          <div className="image-gradient-overlay" />
          <div className="card-header-content">
            {companyUrl && (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                <FiLink className="link-icon" />
                {subtitle}
              </a>
            )}
            <Card.Title className="text-white mb-0">{title}</Card.Title>
          </div>
        </div>

        <Card.Body className="d-flex flex-column">
          {description && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card.Text className="text-muted mb-3">{description}</Card.Text>
            </motion.div>
          )}

          {tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Tags tags={tags} />
            </motion.div>
          )}
        </Card.Body>

        {url && (
          <Card.Footer className="bg-transparent border-0">
            <motion.div whileHover={{ scale: 1.05 }}>
              <a
                href={url}
                rel="noopener noreferrer"
                className="btn btn-primary w-100 btn-gradient"
              >
                <FaExternalLinkAlt className="me-2" />
                Read More
              </a>
            </motion.div>
          </Card.Footer>
        )}
      </Card>

      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .image-container {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-gradient-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, 0.7) 100%
          );
        }

        .card-header-content {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
          z-index: 2;
        }

        .company-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .company-link:hover {
          color: white;
          transform: translateX(5px);
        }

        .link-icon {
          font-size: 1.2rem;
        }

        .btn-gradient {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          border: none;
          border-radius: 0.75rem;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
        }

        .glass-card:hover .card-image {
          transform: scale(1.05);
        }
      `}</style>
    </motion.div>
  );
};

export default MyCard;
