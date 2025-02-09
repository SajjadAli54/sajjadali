"use client";

import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container } from "react-bootstrap";

import { Education } from "./Education";
import { Certifications } from "./Certifications";

function EducationContainer() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <Container className="py-5 animate__animated animate__fadeIn">
      <Tab.Container
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key!)}
      >
        <Nav variant="tabs" className="mb-4 justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="education" className="fw-bold">
              🎓 Degrees
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="certifications" className="fw-bold">
              🏆 Certifications
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="education">
            <Education />
          </Tab.Pane>
          <Tab.Pane eventKey="certifications">
            <Certifications />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default EducationContainer;
