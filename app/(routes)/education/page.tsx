"use client";

import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import { Education } from "./Education";
import { Certifications } from "./Certifications";

function EducationContainer() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    // <Container className="py-5 ">
    <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key!)}>
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
    // </Container>
  );
}

export default EducationContainer;
