"use client";

import { GoPackage, GoStack } from "react-icons/go";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TechStack from "@components/stack/TechStack";
import ProjectCard from "./components/cards/ProjectCard";
import { techItems } from "@data/tech-items";
import projects from "./data/projects";

import { useMediaQuery } from "./hooks";
import HeroSection from "./components/home/hero";

export default function Home() {
  const isMobile = useMediaQuery();
  const firstThreeProjects = projects.slice(0, 3);

  return (
    <>
      <HeroSection />

      <section className="page-section">
        <div className="section-inner">
          <div className="section-heading">
            {/* <span className="accent-line mb-3 d-block"></span> */}
            <h2 className="text-gradient">What I build</h2>
            <p>
              Modern interfaces, scalable backend services, and polished
              products built for growth, performance, and strong visual clarity.
            </p>
          </div>

          <div className="glass-panel p-5">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-5 flex-column flex-md-row text-center text-md-start">
              <GoStack className="tech-stack-icon" />
              <div>
                <h3 className="mb-1">Tech Stack</h3>
                <p className="text-muted mb-0">
                  A curated set of tools and frameworks I use every day.
                </p>
              </div>
            </div>

            <Row className="g-4">
              <Col>
                <TechStack techItems={techItems} isMobile={isMobile} />
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner">
          <div className="section-heading">
            {/* <span className="accent-line mb-3 d-block"></span> */}
            <h2 className="text-gradient">Selected Projects</h2>
            <p>
              Featured work with clean UI, meaningful interactions, and thoughtful
              data flows.
            </p>
          </div>

          <div className="section-grid">
            {firstThreeProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
