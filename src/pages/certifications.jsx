import React from "react";

import Education from "../components/education";

import VCS from "../assets/certs/vcs.png";
import ML from "../assets/certs/ml.jpg";
import Networking from "../assets/certs/networking.png";
import Mongodb from "../assets/certs/mongodb.jpg";
import Maths from "../assets/certs/math-image.jpeg";

import Container from "../components/container";

const certifications = [
  { src: VCS, alt: "Version Control" },
  { src: Mongodb, alt: "MongoDB Node.js Developer Path" },
  { src: ML, alt: "Machine Learning From Basics to Advanced" },
  { src: Networking, alt: "Bits and Bytes of Networking" },
  { src: Maths, alt: "Mathematical Thinking in Computer Science" },
];

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
            <div className="card h-100 bg-dark">
              <img
                src={cert.src}
                className="card-img-top"
                alt={cert.alt}
                style={{ maxHeight: "200px", objectFit: "contain" }}
              />
              <div className="card-body text-center bg-dark">
                <p className="card-text text-light">{cert.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Certifications;
