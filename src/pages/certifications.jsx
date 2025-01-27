import React from "react";

import Education from "../components/education";
import Container from "../components/container";
import Card from "../components/card";
import Pagination from "../components/pagination";

import { certifications } from "../data/certifications";

import { paginate } from "../utils/utils";

function Certifications() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const items = paginate(certifications, currentPage, 3);

  return (
    <Container>
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
      <Education />
    </Container>
  );
}

export default Certifications;
