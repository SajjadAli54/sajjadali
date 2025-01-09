import React from "react";

const Card = ({ image, title, description, link, buttonText }) => {
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
        {/* <p className="card-text text-light">{description}</p> */}
        {link && (
          <div className="mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
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
