import React from "react";

import Education from "../components/education";
import Container from "../components/container";
import Card from "../components/card";

import { certifications } from "../data/certifications";

function Certifications() {
  return (
    <Container>
      <Education />
      <h2 className="text-center text-primary mb-4 display-4 fw-bold">
        🎓 Certifications
      </h2>
      <div className="row">
        {certifications.map((cert, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4 bg-dark">
            <Card key={index} image={cert.src} title={cert.alt} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Certifications;
