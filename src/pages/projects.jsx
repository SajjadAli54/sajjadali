import React from "react";
import Container from "../components/container";

import { projects } from "../data/projects";

const Projects = () => {
  return (
    <Container>
      <h2 className="text-center text-primary mb-4 display-4 fw-bold">
        Projects
      </h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 col-sm-12 col-lg-4 mb-4">
            <div className="card project-card h-100 bg-dark">
              <img
                src={project.src}
                height={"200px"}
                className="card-img-top"
                alt={`${project.name} Image`}
              />
              <div className="card-body d-flex flex-column bg-dark">
                <h5 className="card-title text-light">{project.name}</h5>
                <p className="card-text text-light">{project.description}</p>
                <div className="mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success me-2"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
