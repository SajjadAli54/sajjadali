import React from "react";

function JobCard({
  title,
  companyName,
  companyUrl,
  startDate,
  endDate,
  subtitle,
  duties,
  tags = [],
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_Upz1wUzZ05xdUafznHl79IbWrjzHk6cfA&s", // Optional image URL for the right side of the card
}) {
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
            {duties && duties.length > 0 && (
              <ul className="list-unstyled">
                {duties.map((item, index) => (
                  <li key={index} className="mb-1">
                    {item}
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
