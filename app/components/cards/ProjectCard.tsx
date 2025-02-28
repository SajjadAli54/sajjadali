"use client";

import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Tags from "@components/Tags";

import { Project } from "@/app/types";

const ProjectCard: React.FC<{ project: Project; className?: string }> = ({
  project,
  className = "",
}) => {
  return (
    <Card
      className={`h-100 mb-3 glassmorphism ${className}`}
      style={{ overflow: "hidden" }}
    >
      <Card.Img
        src={project.image || "https://via.placeholder.com/300"}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "auto",
          maxHeight: "200px",
        }}
        className="card-img-top"
        alt={project.title}
      />

      <Card.Body className="d-flex flex-column bg-transparent">
        <Card.Title className="text-center">{project.title}</Card.Title>
        <Card.Text className="text-center">{project.description}</Card.Text>
      </Card.Body>

      <Card.Footer className="bg-transparent">
        <Tags tags={project.topics} />
        <div className="d-flex mt-3">
          {project.clone_url && (
            <>
              <Card.Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <FaExternalLinkAlt className="me-1" size={18} color="green" />{" "}
                Live
              </Card.Link>

              <Card.Link
                href={project.clone_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <FaCode className="me-1" size={18} color="blue" /> Code
              </Card.Link>
            </>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
