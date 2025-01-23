import React from "react";
import Container from "./container";
import Tags from "./tags";

function EducationCard({
  degree,
  institution,
  institutionUrl,
  startDate,
  endDate,
  description,
  achievements = [], // Optional list of key achievements or activities
  tags = [], // Optional tags like "GPA", "Honors", etc.
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_Upz1wUzZ05xdUafznHl79IbWrjzHk6cfA&s", // Optional image of the institution or degree
}) {
  return (
    <Container className="card shadow-sm py-0">
      <div className="row g-0 bg-dark">
        <div className="col-md-8">
          <div className="card-body bg-dark">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="card-title mb-0 text-light">{degree}</h4>
              <small className="text-light">{`${startDate} - ${
                endDate || "Present"
              }`}</small>
            </div>
            <p className="card-subtitle text-muted mb-2">
              <a
                href={institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary"
              >
                {institution}
              </a>
            </p>
            {description && (
              <p className="text-secondary mb-3">{description}</p>
            )}
            {achievements.length > 0 && (
              <ul className="list-unstyled">
                {achievements.map((item, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <span
                      className="me-2 text-success"
                      style={{ fontSize: "1.2rem" }}
                    >
                      •
                    </span>
                    <span className="text-light">{item}</span>
                  </li>
                ))}
              </ul>
            )}
            <Tags tags={tags} />
          </div>
        </div>
        {image && (
          <div className="col-md-4 d-flex align-items-center">
            <img
              src={image}
              alt={degree}
              className="img-fluid rounded-end w-100 h-100 object-cover"
              style={{
                objectFit: "cover",
                height: "70%",
              }}
            />
          </div>
        )}
      </div>
    </Container>
  );
}

export default EducationCard;
