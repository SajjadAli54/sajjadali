import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "../components/container";
import Card from "../components/card";

import { certifications } from "../data/certifications";
import { education as list } from "../data/education";

import ExperienceCard from "../components/ExperienceCard";

function EducationContainer() {
  const [activeTab, setActiveTab] = useState("education"); // Default Tab

  return (
    <Container>
      <Tab.Container
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key)}
      >
        {/* Tabs Navigation */}
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

const Education = () => {
  return (
    <Container>
      {list.map((edu, index) => (
        <ExperienceCard
          key={index}
          type="education"
          title={edu.degree}
          image={edu.image}
          institutionOrCompany={edu.institution}
          institutionOrCompanyUrl={edu.institutionUrl}
          startDate={edu.startDate}
          endDate={edu.endDate}
          subtitle={edu.description}
          achievementsOrDuties={edu.achievements}
          tags={edu.tags}
        />
      ))}
    </Container>
  );
};
const Certifications = () => {
  return (
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={3}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 768, // Tablets & below
          settings: { slidesToShow: 2, slidesToScroll: 1 },
        },
        {
          breakpoint: 576, // Mobile
          settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
      ]}
    >
      {certifications.map((cert, index) => (
        <div key={index} className="px-2">
          <Card image={cert.src} title={cert.alt} />
        </div>
      ))}
    </Slider>
  );
};
