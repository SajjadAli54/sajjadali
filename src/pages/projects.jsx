import React, { useState } from "react";
import PropTypes from "prop-types";

import { FaDiagramProject, FaGithub } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import Container from "../components/common/container";

import Card from "../components/common/card";
import Pagination from "../components/common/pagination";

import { paginate } from "../utils/utils";
import { useEffect } from "react";
import SearchBox from "../components/common/SearchBox";

const Projects = ({ projects: allProjects }) => {
  const MOBILE_WIDTH = 768;
  const MOBILE_PAGE_SIZE = 3;
  const DESKTOP_PAGE_SIZE = 6;

  const [searchField, setSearchField] = useState("");
  const [projects, setProjects] = useState(allProjects);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = useState(MOBILE_PAGE_SIZE);

  useEffect(() => {
    const updatePageSize = () => {
      if (window.innerWidth < MOBILE_WIDTH) {
        setPageSize(MOBILE_PAGE_SIZE);
      } else {
        setPageSize(DESKTOP_PAGE_SIZE);
      }
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  useEffect(() => {
    const field = searchField.trim().toLowerCase();
    const filteredProjects = allProjects.filter(
      (project) =>
        project.name.toLowerCase().includes(field) ||
        project.description.toLowerCase().includes(field) ||
        project.tags.some((tag) => tag.toLowerCase().includes(field))
    );
    setProjects(filteredProjects);
  }, [searchField]);

  const items = paginate(projects, currentPage, pageSize);
  return (
    <Container>
      <h2 className="text-center text-primary mb-4 display-4 fw-bold">
        <FaDiagramProject className="me-2 text-warning" /> Projects
      </h2>
      <SearchBox
        searchField={searchField}
        searchChange={(e) => setSearchField(e.target.value)}
        placeholder="Search"
      />
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
                  label: <FaGithub size={20} className="me-2" />,
                  url: project.href,
                },
                {
                  label: <FaGlobe size={20} className="me-2" />,
                  url: project.live,
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
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default Projects;

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};
