import React from "react";
import Tags from "./tags";

const Card = ({ image, title, description, link, buttonText, tags }) => {
  return (
    <div className="card project-card h-100 bg-dark">
      <img
        src={image || "https://via.placeholder.com/300"}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body d-flex flex-column bg-dark">
        <h5 className="card-title text-light">{title}</h5>
        {description && <p className="card-text text-light">{description}</p>}
      </div>
      <div className="card-footer bg-dark d-flex flex-column">
        <Tags tags={tags} />
        {link && (
          <div className="mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success me-2"
            >
              {buttonText || "Learn More"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
