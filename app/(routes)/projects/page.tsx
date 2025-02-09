"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import MyCard from "@components/Card";
import Tags from "@components/Tags";
import MyPagination from "@components/Pagination";
import MyModal from "@components/modal/Modal";
import SearchBox from "@components/search/SearchBox";
import { paginate } from "@utils/index";

import { fetchProjects, deleteProjectById } from "@services/projectService";
import { FaEdit, FaGithub, FaGlobe, FaTrash } from "react-icons/fa";

import useMediaQuery from "@hooks/useMediaQuery";

import { Tag, LinkType, Project } from "@types";

import { useSelector } from "react-redux";
import { selectUser } from "@/app/redux/slices/admin";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";

const Projects = () => {
  const MOBILE_PAGE_SIZE = 3;
  const DESKTOP_PAGE_SIZE = 6;

  const ref = useRef<Project[]>([]);

  const router = useRouter();

  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false);
  const [searchField, setSearchField] = useState("");

  const [projects, setProjects]: [
    Project[],
    React.Dispatch<React.SetStateAction<Project[]>>
  ] = useState(ref.current);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(MOBILE_PAGE_SIZE);
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId]: [
    number | undefined,
    React.Dispatch<React.SetStateAction<number | undefined>>
  ] = useState();

  const [tags, setTags]: [Tag, React.Dispatch<React.SetStateAction<Tag>>] =
    useState({});

  const [adminButtons, setAdminButtons]: [
    LinkType[] | undefined,
    React.Dispatch<React.SetStateAction<LinkType[] | undefined>>
  ] = useState();

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
        project.title.toLowerCase().includes(field) ||
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

  useEffect(() => {
    if (user) {
      setAdminButtons([
        {
          label: FaEdit,
          className: "text-success",
        },
        {
          label: FaTrash,
          className: "text-danger",
        },
      ]);
    } else {
      setAdminButtons([]);
    }
  }, [user]);

  const handleBadgeClick = (language: string) => {
    setTags((prev) => ({
      ...prev,
      [language]: !prev[language],
    }));
  };

  const items: Project[] = paginate(projects, currentPage, pageSize);

  const handleDelete = async () => {
    setShowModal(false);
    await deleteProjectById(projectId!);
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

      <div className="mb-2 text-center">
        <Tags
          tags={Object.keys(tags)}
          status={Object.values(tags)}
          onClick={handleBadgeClick}
        />
      </div>

      {loading ? (
        <Loader />
      ) : (
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
                    ...adminButtons!.map((value) => {
                      return {
                        label: value.label,
                        className: value.className,
                        onClick: () => {
                          if (value.label === FaEdit) {
                            router.push(`/projects/${project.id}`);
                          }
                          if (value.label === FaTrash) {
                            setShowModal(true);
                            setProjectId(project.id);
                          }
                        },
                      };
                    }),
                  ]}
                />
              </div>
            ))
          ) : (
            <div className="text-center">No projects found.</div>
          )}
        </Row>
      )}

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
