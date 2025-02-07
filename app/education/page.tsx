"use client";

import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { FaUniversity } from "react-icons/fa";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container } from "react-bootstrap";

import Card from "../components/Card";
import ExperienceCard from "../components/ExperienceCard";

import useMediaQuery from "../hooks/useMediaQuery";

import { education } from "../data/education";
import { certifications } from "../data/certifications";

function EducationContainer() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <Container>
      <Tab.Container
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key)}
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

const Education = () => {
  const isMobile = useMediaQuery("(max-width: 768px)"); // Mobile detection

  return (
    <Container>
      {education.map((edu, index) =>
        isMobile ? (
          <Card
            key={index}
            image={edu.image}
            title={`${edu.degree} @ ${edu.institution}`}
            description={edu.description}
            links={[
              {
                url: edu.institutionUrl,
                label: <FaUniversity size={20} className="me-2" />,
              },
            ]}
            tags={edu.tags}
          />
        ) : (
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
        )
      )}
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
