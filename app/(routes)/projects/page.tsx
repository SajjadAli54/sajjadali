"use client";

import React, { useState, useEffect, useRef } from "react";
import { Row } from "react-bootstrap";
import ProjectCard from "@/app/components/cards/ProjectCard";
import Tags from "@components/Tags";
import MyPagination from "@components/Pagination";
import MyModal from "@components/modal/Modal";
import SearchBox from "@components/search/SearchBox";
import { paginate } from "@utils/index";

import { fetchProjects } from "@services/projectService";

import useMediaQuery from "@hooks/useMediaQuery";

import { Tag, Project } from "@types";

import Loader from "@/app/components/Loader";

const Projects = () => {
  const MOBILE_PAGE_SIZE = 2;
  const DESKTOP_PAGE_SIZE = 3;

  const ref = useRef<Project[]>([]);

  const [loading, setLoading] = useState(false);
  const [searchField, setSearchField] = useState("");

  const [projects, setProjects]: [
    Project[],
    React.Dispatch<React.SetStateAction<Project[]>>
  ] = useState(ref.current);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(MOBILE_PAGE_SIZE);
  const [showModal, setShowModal] = useState(false);

  const [tags, setTags]: [Tag, React.Dispatch<React.SetStateAction<Tag>>] =
    useState({});

  const isMobile = useMediaQuery();

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      const fetchedProjects = await fetchProjects();
      ref.current = fetchedProjects;
      setProjects(fetchedProjects);

      setLoading(false);

      setTags(
        fetchedProjects.reduce((acc: Tag, project: Project) => {
          acc[project.language.toLowerCase()] = false;
          return acc;
        }, {})
      );
    };
    getProjects();
  }, []);

  useEffect(() => {
    setPageSize(isMobile ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE);
  }, [isMobile]);

  useEffect(() => {
    const field = searchField.trim().toLowerCase();
    const filteredProjects = ref.current.filter(
      (project: Project) =>
        project.title!.toLowerCase().includes(field) ||
        project.description.toLowerCase().includes(field) ||
        project.language.toLowerCase().includes(field) ||
        project.topics!.some((topic: string) =>
          topic.toLowerCase().includes(field)
        )
    );
    setProjects(filteredProjects);
    setCurrentPage(1);
  }, [searchField]);

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

  return (
    <div className="animate__animated animate__fadeIn">
      <MyModal
        title="Delete Project"
        subtitle="Are you sure?"
        ok="Yes"
        cancel="No"
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleYes={async () => {}}
      />

      <SearchBox
        searchField={searchField}
        searchChange={(e) => setSearchField(e.target.value)}
        placeholder="Search projects..."
      />

      <div className="mb-2 d-flex justify-content-center">
        <Tags
          tags={Object.keys(tags)}
          status={Object.values(tags)}
          className={`bg-dark text-white cursor-pointer px-2 py-1 rounded`}
          onClick={handleBadgeClick}
        />
      </div>

      <Row>
        {loading ? (
          <Loader />
        ) : (
          items.map((project, index) => (
            <div key={index} className="col-md-4 col-sm-12 col-lg-4 mb-4">
              <ProjectCard project={project} />
            </div>
          ))
        )}
      </Row>

      <MyPagination
        currentPage={currentPage}
        itemsCount={projects.length}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
      />
    </div>
  );
};

export default Projects;
