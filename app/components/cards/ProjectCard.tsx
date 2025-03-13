"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Tags from "@components/Tags";
import { Project } from "@/app/types";

import "./card.css";

const ProjectCard: React.FC<{ project: Project; className?: string }> = ({
  project,
  className = "",
}) => {
  return (
    <Card
      className={`h-100 shadow-lg rounded border-0 ${className}`}
      style={{
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {/* Project Image */}
      <div className="position-relative">
        <Card.Img
          src={project.image || "https://via.placeholder.com/300"}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "200px",
            filter: "brightness(90%)",
          }}
          className="card-img-top"
          alt={project.title}
        />
        <div className="overlay"></div>
      </div>

      {/* Card Body */}
      <Card.Body className="d-flex flex-column align-items-center text-center p-4">
        <Card.Title className="fw-bold">{project.title}</Card.Title>
        <Card.Text className="text-muted">{project.description}</Card.Text>
        <Tags tags={project.topics} />
      </Card.Body>

      {/* Card Footer */}
      <Card.Footer className="d-flex justify-content-between align-items-center bg-white border-0 px-4 py-3">
        {/* Live Demo Link */}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-success d-flex align-items-center"
          >
            <FaExternalLinkAlt className="me-2" size={16} /> Live Demo
          </a>
        )}

        {/* GitHub Link */}
        {project.clone_url && (
          <a
            href={project.clone_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark d-flex align-items-center"
          >
            <FaGithub className="me-2" size={18} /> GitHub
          </a>
        )}
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
