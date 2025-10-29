"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/app/components/cards/ProjectCard";
import Tags from "@components/Tags";
import MyPagination from "@components/Pagination";
import SearchBox from "@components/search/SearchBox";
import { paginate } from "@utils/index";
import { fetchProjects } from "@services/projectService";
import useMediaQuery from "@hooks/useMediaQuery";
import { Tag, Project } from "@types";
import Loader from "@/app/components/Loader";
import { FiAlertTriangle } from "react-icons/fi";

const Projects = () => {
  const MOBILE_PAGE_SIZE = 4;
  const DESKTOP_PAGE_SIZE = 8;

  const ref = useRef<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [projects, setProjects] = useState<Project[]>(ref.current);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(MOBILE_PAGE_SIZE);
  const [tags, setTags] = useState<Tag>({});
  const isMobile = useMediaQuery();

  // Data fetching and effect hooks remain the same...

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-container p-4 rounded-4"
    >
      <SearchBox
        searchField={searchField}
        searchChange={(e) => setSearchField(e.target.value)}
        placeholder="Search projects..."
      />

      <motion.div className="mb-4 text-center d-flex flex-wrap justify-content-center">
        <Tags
          tags={Object.keys(tags)}
          status={Object.values(tags)}
          className="glass-tag px-3 py-2 rounded-pill"
          onClick={handleBadgeClick}
        />
      </motion.div>

      {loading ? (
        <Loader />
      ) : (
        <>
          {items.length === 0 ? (
            <motion.div
              className="empty-state text-center py-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FiAlertTriangle className="empty-icon mb-3" />
              <h4 className="text-muted">No projects found</h4>
              <p className="text-muted">Try adjusting your search or filters</p>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid-layout"
            >
              {items.map((project, index) => (
                <motion.div
                  key={project.id || index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="grid-item"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}

          <MyPagination
            currentPage={currentPage}
            itemsCount={projects.length}
            onPageChange={setCurrentPage}
            pageSize={pageSize}
          />
        </>
      )}

      <style jsx global>{`
        .glass-container {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 1rem;
        }

        .glass-tag {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          transition: all 0.3s ease;
        }

        .glass-tag.active {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          color: white;
        }

        .empty-state {
          min-height: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .empty-icon {
          font-size: 3rem;
          color: #6b7280;
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .grid-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Projects;
