import React from "react";
import Container from "../components/container";

import { projects } from "../data/projects";
import Card from "../components/card";
import Pagination from "../components/pagination";

import { paginate } from "../utils/utils";

const Projects = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const items = paginate(projects, currentPage, 3);
  return (
    <Container>
      <h2 className="text-center text-primary mb-4 display-4 fw-bold">
        Projects
      </h2>
      <div className="row">
        {items.map((project, index) => (
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
      <Pagination 
        itemsCount={projects.length}
        pageSize={3}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default Projects;
