"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import Tags from "@components/Tags";
import { Project } from "@/app/types";

const ProjectCard: React.FC<{ project: Project; className?: string }> = ({
  project,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      whileHover={{ scale: 1.02 }}
      className={className}
    >
      <Card className="glass-card h-100 border-0 overflow-hidden shadow-lg">
        {/* Image Section */}
        <div className="image-container position-relative">
          <Card.Img
            src={project.image || "/placeholder.png"}
            alt={project.title}
            className="project-image"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.png";
            }}
          />
          <div className="image-overlay" />
        </div>

        {/* Card Content */}
        <Card.Body className="d-flex flex-column p-4">
          <h3 className="text-gradient mb-3">{project.title}</h3>
          <Card.Text className="text-muted mb-4">
            {project.description}
          </Card.Text>

          {project.topics && (
            <div className="mt-auto mb-4">
              <Tags tags={project.topics} />
            </div>
          )}
        </Card.Body>

        {/* Card Footer */}
        <Card.Footer className="bg-transparent border-0 px-4 pb-4">
          <div className="d-flex gap-3 justify-content-center">
            {project.live && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-gradient d-flex align-items-center gap-2"
              >
                <FiExternalLink />
                Live Demo
              </motion.a>
            )}

            {project.clone_url && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.clone_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark d-flex align-items-center gap-2"
              >
                <FiGithub />
                GitHub
              </motion.a>
            )}
          </div>
        </Card.Footer>
      </Card>

      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 1.5rem;
          transition: all 0.3s ease;
        }

        .image-container {
          height: 250px;
          overflow: hidden;
          position: relative;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-overlay {
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
        }

        .btn-dark {
          background: #1a1a1a;
          border: none;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 500;
        }

        .glass-card:hover .project-image {
          transform: scale(1.05);
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
