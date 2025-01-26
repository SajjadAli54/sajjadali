import React from "react";
import Container from "../components/container";

import { projects } from "../data/projects";
import Card from "../components/card";

const Projects = () => {
  return (
    <Container>
      <h2 className="text-center text-primary mb-4 display-4 fw-bold">
        Projects
      </h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 col-sm-12 col-lg-4 mb-4">
            <Card
              image={project.src}
              title={project.name}
              description={project.description}
              tags={project.tags}
              links={[
                {
                  label: "Live Demo",
                  url: project.live,
                  className: "btn btn-success me-2",
                },
                {
                  label: "Source Code",
                  url: project.href,
                  className: "btn btn-secondary me-2",
                },
              ]}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
