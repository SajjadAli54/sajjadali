import React from "react";

import Education from "../components/education";

const certifications = [
  { src: "/src/assets/certs/vcs.png", alt: "Version Control Systems" },
  { src: "/src/assets/certs/ml.jpg", alt: "Machine Learning with Python" },
];

function Certifications() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-4">Certifications</h2>
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
        <Education />
      </div>
    </section>
  );
}

export default Certifications;
