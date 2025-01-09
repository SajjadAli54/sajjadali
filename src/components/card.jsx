import React from "react";

function calculateExperience(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(); // If no end date, use the current date
  const diffInMs = end - start;
  const diffInMonths = Math.ceil(diffInMs / (1000 * 60 * 60 * 24 * 30)); // Approximate months
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""}${
      months > 0 ? ` and ${months} month${months > 1 ? "s" : ""}` : ""
    }`;
  } else {
    return `${months} month${months > 1 ? "s" : ""}`;
  }
}

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
    <div className="card shadow-sm border-0 mb-3">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="card-title mb-0">{title}</h4>
              <small className="text-muted">{`${startDate} - ${
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
            {tags.length > 0 && (
              <div className="mt-3">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge bg-primary text-white me-2 mb-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
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
    </div>
  );
}

export default JobCard;
