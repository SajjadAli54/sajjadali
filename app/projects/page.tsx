"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import MyCard from "../components/Card";
import Tags from "../components/Tags";
import MyPagination from "../components/Pagination";
import MyModal from "../components/modal/Modal";
import SearchBox from "../components/search/SearchBox";
import { paginate } from "../utils";

import { fetchProjects, deleteProjectById } from "../services/projectService";
import { useWindowSize } from "../hooks/useWindowSize";
import { FaGithub, FaGlobe, FaTrash } from "react-icons/fa";

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

interface Tag {
  [key: string]: boolean;
}

const Projects = () => {
  const MOBILE_WIDTH = 768;
  const MOBILE_PAGE_SIZE = 3;
  const DESKTOP_PAGE_SIZE = 6;

  const ref = useRef([]);
  const [searchField, setSearchField] = useState("");
  const [projects, setProjects] = useState(ref.current);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(MOBILE_PAGE_SIZE);
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState(0);
  const [tags, setTags]: [Tag, React.Dispatch<React.SetStateAction<Tag>>] =
    useState({});

  const { width } = useWindowSize();

  useEffect(() => {
    const getProjects = async () => {
      const fetchedProjects = await fetchProjects();
      ref.current = fetchedProjects;
      setProjects(fetchedProjects);
    };
    getProjects();
  }, []);

  useEffect(() => {
    setPageSize(width < MOBILE_WIDTH ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE);
  }, [width]);

  // Search functionality
  useEffect(() => {
    const field = searchField.trim().toLowerCase();
    const filteredProjects = ref.current.filter(
      (project: Project) =>
        project.title.toLowerCase().includes(field) ||
        project.description.toLowerCase().includes(field) ||
        project.language.toLowerCase().includes(field) ||
        project.topics.some((topic) => topic.toLowerCase().includes(field))
    );
    setProjects(filteredProjects);
    setCurrentPage(1);
  }, [searchField]);

  // Tag filtering
  useEffect(() => {
    if (new Set(Object.values(tags)).size === 1) {
      setProjects(ref.current);
      setCurrentPage(1);
      return;
    }
    const filteredProjects = ref.current.filter(
      (project: Project) => tags[project.language.toLowerCase()]
    );
    setProjects(filteredProjects);
  }, [tags]);

  const handleBadgeClick = (language: string) => {
    setTags((prev) => ({
      ...prev,
      [language]: !prev[language],
    }));
  };

  const items: Project[] = paginate(projects, currentPage, pageSize);

  const handleDelete = async () => {
    setShowModal(false);
    await deleteProjectById(projectId);
    ref.current = ref.current.filter((proj: Project) => proj.id !== projectId);
    setProjects(ref.current);
  };

  return (
    <Container className="animate__animated animate__fadeIn">
      <MyModal
        title="Delete Project"
        subtitle="Are you sure?"
        ok="Yes"
        cancel="No"
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleYes={handleDelete}
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
