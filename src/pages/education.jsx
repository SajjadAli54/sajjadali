import PropTypes from "prop-types";

import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { FaUniversity } from "react-icons/fa";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "../components/common/container";
import Card from "../components/common/card";
import ExperienceCard from "../components/ExperienceCard";

import useMediaQuery from "../hooks/useMediaQuery"; // Custom hook to detect screen size

function EducationContainer({ education, certifications }) {
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
            <Education education={education} />
          </Tab.Pane>
          <Tab.Pane eventKey="certifications">
            <Certifications certifications={certifications} />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default EducationContainer;

const Education = ({ education }) => {
  const isMobile = useMediaQuery("(max-width: 768px)"); // Mobile detection

  return (
    <Container>
      {education.map((edu, index) =>
        isMobile ? (
          <Card
            key={index}
            image={edu.image}
            title={edu.degree}
            description={edu.institution}
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

const Certifications = ({ certifications }) => {
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

Certifications.propTypes = {
  certifications: PropTypes.array.isRequired,
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

EducationContainer.propTypes = {
  education: PropTypes.array.isRequired,
  certifications: PropTypes.array.isRequired,
};
