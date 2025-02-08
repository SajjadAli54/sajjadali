"use client";

import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

import { Container, Row } from "react-bootstrap";

import MyCard from "../components/Card";
import Tags from "../components/Tags";
import { paginate } from "../utils/";

import { projects as allProjects } from "../data/projects";

import MyPagination from "../components/Pagination";
import SearchBox from "../components/SearchBox";

const Projects = () => {
  const MOBILE_WIDTH = 768;
  const MOBILE_PAGE_SIZE = 3;
  const DESKTOP_PAGE_SIZE = 6;

  const [searchField, setSearchField] = useState("");
  const [projects, setProjects] = useState(allProjects);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(MOBILE_PAGE_SIZE);

  const [tags, setTags] = useState(() => {
    const lang = [
      ...new Set(allProjects.map((proj) => proj.language.toLowerCase())),
    ];
    const tags: Record<string, boolean> = {};
    for (const i in lang) tags[lang[i]] = false;
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

  useEffect(() => {
    const field = searchField.trim().toLowerCase();
    const filteredProjects = allProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(field) ||
        project.description.toLowerCase().includes(field) ||
        project.language.toLowerCase().includes(field) ||
        project.topics.some((topic) => topic.toLowerCase().includes(field))
    );
    setCurrentPage(1);
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

  const handleBadgeClick = (language: string) => {
    setTags((prev) => ({
      ...prev,
      [language]: !prev[language],
    }));
  };

  const items = paginate(projects, currentPage, pageSize);

  return (
    <Container className="animate__animated animate__fadeIn">
      <SearchBox
        searchField={searchField}
        searchChange={(e) => setSearchField(e.target.value)}
        placeholder="Search projects..."
      />
      <div className="mb-2 mt-2 text-center">
        <Tags
          tags={Object.keys(tags)}
          status={Object.values(tags)}
          onClick={handleBadgeClick}
        />
      </div>

      <Row>
        {items.map((project, index) => (
          <div key={index} className="col-md-4 col-sm-12 col-lg-4 mb-4">
            <MyCard
              image={
                project.src ??
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZ6IjB4FE5Dadyw8HmA2VuC_7QXJZ9h4HlQ&s"
              }
              title={project.title}
              description={project.description}
              tags={[project.language, ...project.topics]}
              links={[
                {
                  label: FaGithub,
                  url: project.clone_url,
                },
                {
                  label: FaGlobe,
                  url: project.live,
                },
              ]}
            />
          </div>
        ))}
      </Row>

      <MyPagination
        currentPage={currentPage}
        itemsCount={projects.length}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
      />
    </Container>
  );
};

export default Projects;
