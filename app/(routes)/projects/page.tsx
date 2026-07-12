"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  const [showModal, setShowModal] = useState(false);
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
    <section className="page-section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass-panel p-4 rounded-4"
        >
          <div className="section-heading text-center mb-4">
            <span className="accent-line mb-3 d-block mx-auto"></span>
            <h2 className="text-gradient">Projects</h2>
            <p className="section-subtitle">
              Search, explore, and filter projects built for real users.
            </p>
          </div>
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
          background: var(--card-bg);
          box-shadow: var(--shadow);
          border: 1px solid var(--border);
          backdrop-filter: blur(16px);
          color: var(--foreground);
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 1rem;
        }

        .glass-tag {
          background: var(--surface-soft);
          border: 1px solid rgba(var(--border-rgb), 0.2);
          color: var(--foreground);
          transition: all 0.3s ease;
        }

        .glass-tag.active {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: #fff;
          box-shadow: 0 12px 30px rgba(99, 102, 241, 0.18);
        }

        .empty-state {
          min-height: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--muted);
        }

        .empty-icon {
          font-size: 3rem;
          color: rgba(var(--border-rgb), 0.6);
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .grid-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.div>
      </div>
    </section>
  );
  
};

export default Projects;
