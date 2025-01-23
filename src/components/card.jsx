import React from "react";
import Tags from "./tags";

const Card = ({ image, title, description, links, tags }) => {
  return (
    <div className="card project-card h-100 bg-dark">
      <img
        src={image || "https://via.placeholder.com/300"}
        height={"200px"}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body d-flex flex-column bg-dark">
        <h5 className="card-title text-light">{title}</h5>
        {description && <p className="card-text text-light">{description}</p>}
      </div>
      <div className="card-footer bg-dark d-flex flex-column">
        <Tags tags={tags} />
        {links && links.length > 0 && (
          <div className="mt-auto">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={link.className || "btn btn-secondary me-2"}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
