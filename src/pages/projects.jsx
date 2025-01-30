import React, { useState } from "react";

import { FaDiagramProject, FaGithub } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import Container from "../components/container";

import { projects } from "../data/projects";
import Card from "../components/card";
import Pagination from "../components/pagination";

import { paginate } from "../utils/utils";
import { useEffect } from "react";

const Projects = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = useState(3); // Default for Mobile

  useEffect(() => {
    const updatePageSize = () => {
      if (window.innerWidth < 768) {
        setPageSize(3); // Smaller number for mobile
      } else {
        setPageSize(6); // Default for desktop
      }
    };

    updatePageSize(); // Set initial value
    window.addEventListener("resize", updatePageSize); // Listen for window resize

    return () => window.removeEventListener("resize", updatePageSize); // Cleanup
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const items = paginate(projects, currentPage, pageSize);
  return (
    <Container>
      <h2 className="text-center text-primary mb-4 display-4 fw-bold">
        <FaDiagramProject className="me-2 text-warning" /> Projects
      </h2>
      <div className="row">
        {items.map((project, index) => (
          <div key={index} className="col-md-4 col-sm-12 col-lg-4 mb-4">
            <Card
              key={index}
              image={project.src}
              title={project.name}
              description={project.description}
              tags={project.tags}
              links={[
                {
                  label: <FaGlobe size={20} className="me-2" />,
                  url: project.live,
                },
                {
                  label: <FaGithub size={20} className="me-2" />,
                  url: project.href,
                },
              ]}
            />
          </div>
        ))}
      </div>
      <Pagination
        itemsCount={projects.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default Projects;
