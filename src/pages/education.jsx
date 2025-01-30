import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import Container from "../components/container";
import Card from "../components/card";
import Pagination from "../components/pagination";

import { certifications } from "../data/certifications";
import { education as list } from "../data/education";

import { paginate } from "../utils/utils";
import ExperienceCard from "../components/ExperienceCard";

function Education() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("education"); // Default Tab

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedCertifications = paginate(certifications, currentPage, 3);

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

        {/* Tab Content */}
        <Tab.Content>
          {/* Education Tab */}
          <Tab.Pane eventKey="education">
            {/* <h2 className="text-center text-primary mb-4 display-4 fw-bold">
              🎓 Education
            </h2> */}
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
                description={edu.description}
                achievementsOrDuties={edu.achievements}
                tags={edu.tags}
              />
            ))}
          </Tab.Pane>

          {/* Certifications Tab */}
          <Tab.Pane eventKey="certifications">
            {/* <h2 className="text-center text-primary mb-4 display-4 fw-bold">
              🏆 Certifications
            </h2> */}
            <div className="row">
              {paginatedCertifications.map((cert, index) => (
                <div key={index} className="col-md-4 col-sm-6 mb-4">
                  <Card key={index} image={cert.src} title={cert.alt} />
                </div>
              ))}
            </div>
            <Pagination
              itemsCount={certifications.length}
              pageSize={3}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default Education;
