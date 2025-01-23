import React from "react";

import Container from "./container";

import { calculateExperience } from "../utils/utils";
import Tags from "./tags";

function JobCard({
  title,
  companyName,
  companyUrl,
  startDate,
  endDate,
  subtitle,
  duties,
  tags = [],
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_Upz1wUzZ05xdUafznHl79IbWrjzHk6cfA&s",
}) {
  const experience = calculateExperience(startDate, endDate);

  return (
    <Container className="card shadow-sm py-0">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body bg-dark">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="card-title mb-0">{title}</h4>
              <small className="text-light">{`${startDate} - ${
                endDate || "Present"
              }`}</small>
            </div>
            <p className="card-subtitle text-muted mb-2">
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary"
              >
                {companyName}
              </a>
            </p>
            {subtitle && <p className="text-secondary mb-3">{subtitle}</p>}
            <p className="text-success mb-2">
              <strong>Experience:</strong> {experience}
            </p>
            {duties && duties.length > 0 && (
              <ul className="list-unstyled">
                {duties.map((item, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <span
                      className="me-2 text-primary"
                      style={{ fontSize: "1.2rem" }}
                    >
                      •
                    </span>
                    <span>{item}</span>
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
              alt={title}
              className="img-fluid rounded-end w-100"
              style={{ objectFit: "cover", height: "70%" }}
            />
          </div>
        )}
      </div>
      <div className="border-top border-primary "></div>
    </Container>
  );
}

export default JobCard;
