import PropTypes from "prop-types";

import Tags from "./tags";

const Card = ({ key, image, title, description, links, tags }) => {
  return (
    <div
      key={key}
      className={`card project-card h-100 mb-4 shadow ${
        description ? "bg-secondary bg-opacity-25" : "bg-transparent"
      }`}
    >
      <img
        src={image || "https://via.placeholder.com/300"}
        height={"150px"}
        className="card-img-top bg-transparent shadow-sm mb-1"
        alt={title}
      />
      <div className="card-body d-flex flex-column bg-transparent">
        <h5 className="card-title text-center text-light">{title}</h5>
        {description && (
          <p className="card-text text-light text-center">{description}</p>
        )}
      </div>
      {tags && tags.length > 0 && (
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
                    className={link.className || "me-2"}
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
      )}
    </div>
  );
};

export default Card;

Card.propTypes = {
  key: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
  tags: PropTypes.array,
};
