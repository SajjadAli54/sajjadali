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
import Tags from "../components/common/tags";

const Projects = ({ projects: allProjects, size = 6 }) => {
  const MOBILE_WIDTH = 768;
  const MOBILE_PAGE_SIZE = 3;
  const DESKTOP_PAGE_SIZE = size;

  const [searchField, setSearchField] = useState("");
  const [projects, setProjects] = useState(allProjects);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = useState(MOBILE_PAGE_SIZE);

  // const languages = getAllLanguages(allProjects);

  const [tags, setTags] = useState(() => {
    const lang = [
      ...new Set(allProjects.map((proj) => proj.language.toLowerCase())),
    ];
    const tags = {};
    for (let i in lang) tags[lang[i]] = false;
    return tags;
  });

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

  // const API_URL = "https://api.github.com/users/SajjadAli54/repos?per_page=100";

  // // Only one time call
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const res = data.filter(
  //         (proj) => proj.topics && proj.topics.length > 0
  //       );
  //       allProjects.push(...res);
  //       setProjects(allProjects);
  //     });
  // }, []);

  useEffect(() => {
    const field = searchField.trim().toLowerCase();
    const filteredProjects = allProjects.filter(
      (project) =>
        project.name.toLowerCase().includes(field) ||
        project.description.toLowerCase().includes(field) ||
        project.topics.some((topic) => topic.toLowerCase().includes(field))
    );
    setProjects(filteredProjects);
  }, [searchField]);

  useEffect(() => {
    if (new Set(Object.values(tags)).size === 1) {
      setProjects(allProjects);
      setCurrentPage(1);
      return;
    }
    const filteredProjects = allProjects.filter(
      (project) => tags[project.language.toLowerCase()]
    );
    setProjects(filteredProjects);
  }, [tags]);

  const handleBadgeClick = (language) => {
    console.log("Bagde Clicked", language, tags[language]);
    setTags((prev) => ({
      ...prev,
      [language]: !prev[language],
    }));
  };

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
      <div className="mb-2 mt-2 text-center">
        <Tags
          tags={Object.keys(tags)}
          status={Object.values(tags)}
          onClick={handleBadgeClick}
        />
      </div>
      <div className="row">
        {items.map((project, index) => (
          <div key={index} className="col-md-4 col-sm-12 col-lg-4 mb-4">
            <Card
              image={
                project.src ??
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZ6IjB4FE5Dadyw8HmA2VuC_7QXJZ9h4HlQ&s"
              }
              title={project.name}
              description={project.description}
              tags={[project.language, ...project.topics]}
              links={[
                {
                  label: <FaGithub size={20} className="me-2" />,
                  url: project.clone_url,
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
  size: PropTypes.number,
};
