import React from "react";

import Container from "../components/container";
import Card from "../components/card";
import Pagination from "../components/pagination";

import { certifications } from "../data/certifications";
import { education as list } from "../data/education";

import { paginate } from "../utils/utils";
import ExperienceCard from "../components/ExperienceCard";

function Certifications() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const items = paginate(certifications, currentPage, 3);

  return (
    <Container>
      <div className="mb-1">
        <h2 className="text-center text-primary mb-0 display-4 fw-bold">
          🎓 Education
        </h2>
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
      </div>

      <h2 className="text-center text-primary mb-4 display-4 fw-bold">
        🎓 Certifications
      </h2>
      <div className="row">
        {items.map((cert, index) => (
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
    </Container>
  );
}

export default Certifications;
