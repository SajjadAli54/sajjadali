import React from "react";
import Tags from "./tags";

// style the Card as the bg image is bluish and pinkish
const Card = ({ image, title, description, links, tags }) => {
  return (
    <div className="card project-card h-100 shadow bg-transparent">
      <img
        src={image || "https://via.placeholder.com/300"}
        height={"200px"}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body d-flex flex-column bg-transparent">
        <h5 className="card-title text-center text-light">{title}</h5>
        {description && <p className="card-text text-light">{description}</p>}
      </div>
      <div className="card-footer bg-transparent d-flex flex-column">
        <Tags tags={tags} />
        {links && links.length > 0 && (
          <div className="mt-auto">
            {links.map((link, index) =>
              link.url ? (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link.className || "btn btn-secondary me-2"}
                >
                  {link.label}
                </a>
              ) : (
                <></>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
