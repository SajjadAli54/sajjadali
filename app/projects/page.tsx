"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaGlobe, FaTrash } from "react-icons/fa";

import { Container, Row } from "react-bootstrap";

import MyCard from "../components/Card";
import Tags from "../components/Tags";
import { paginate } from "../utils/";

// import { projects as allProjects } from "../data/projects";

import MyPagination from "../components/Pagination";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import MyModal from "../components/Modal";

interface Project {
  id: number;
  title: string;
  description: string;
  language: string;
  topics: string[];
  clone_url: string;
  live: string;
  image: string;
}

const Projects = () => {
  const MOBILE_WIDTH = 768;
  const MOBILE_PAGE_SIZE = 3;
  const DESKTOP_PAGE_SIZE = 6;

  const ref = useRef<Project[]>([]);

  const [searchField, setSearchField] = useState("");
  const [projects, setProjects] = useState(ref.current);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(MOBILE_PAGE_SIZE);

  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState(0);

  const [tags, setTags] = useState(() => {
    const lang = [
      ...new Set(ref.current.map((proj) => proj.language.toLowerCase())),
    ];
    const tags: Record<string, boolean> = {};
    for (const i in lang) tags[lang[i]] = false;
    return tags;
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        ref.current = response.data.data;
        console.log("Fetched Projects:", ref.current); // Add more logging to inspect the data
        setProjects(ref.current);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

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
    const filteredProjects = ref.current.filter(
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
      setProjects(ref.current);
      setCurrentPage(1);
      return;
    }
    const filteredProjects = ref.current.filter(
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
      <MyModal
        title="Delete Project"
        subtitle="Are you sure?"
        ok="Yes"
        cancel="No"
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleYes={() => {
          setShowModal(false);
          ref.current = ref.current.filter((proj) => proj.id !== projectId);
          setProjects(ref.current);
          axios.delete(`/api/projects/`, { data: { id: projectId } });
        }}
      />
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
        {items.length > 0 ? (
          items.map((project, index) => (
            <div key={index} className="col-md-4 col-sm-12 col-lg-4 mb-4">
              <MyCard
                image={
                  project.image ??
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZ6IjB4FE5Dadyw8HmA2VuC_7QXJZ9h4HlQ&s"
                }
                title={project.title}
                description={project.description}
                tags={[project.language, ...project.topics]}
                links={[
                  {
                    label: FaGithub,
                    url: project.clone_url,
                    className: "text-dark",
                  },
                  {
                    label: FaGlobe,
                    url: project.live,
                  },
                  {
                    label: FaTrash,
                    className: "text-danger",
                    onClick: () => {
                      setShowModal(true);
                      setProjectId(project.id);
                    },
                  },
                ]}
              />
            </div>
          ))
        ) : (
          <div>No projects found.</div>
        )}
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
