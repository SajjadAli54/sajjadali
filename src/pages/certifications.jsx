import React from "react";

import Education from "../components/education";

import VCS from "../assets/certs/vcs.png";
import ML from "../assets/certs/ml.jpg";
import Networking from "../assets/certs/networking.png";
import Mongodb from "../assets/certs/mongodb.jpg";
import Maths from "../assets/certs/math-image.jpeg";

const certifications = [
  { src: VCS, alt: "Version Control" },
  { src: Mongodb, alt: "MongoDB Node.js Developer Path" },
  { src: ML, alt: "Machine Learning From Basics to Advanced" },
  { src: Networking, alt: "Bits and Bytes of Networking" },
  { src: Maths, alt: "Mathematical Thinking in Computer Science" },
];

function Certifications() {
  return (
    <section className="py-5 bg-light animate__animated animate__fadeIn">
      <div className="container">
        <Education />
        <h2 className="text-center text-primary mb-4 display-4 fw-bold">
          🎓 Certifications
        </h2>
        <div className="row">
          {certifications.map((cert, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src={cert.src}
                  className="card-img-top"
                  alt={cert.alt}
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <p className="card-text">{cert.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
