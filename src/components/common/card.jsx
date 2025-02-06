import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";

import Tags from "./tags";

const MyCard = ({
  image = "https://via.placeholder.com/300",
  title,
  description,
  links,
  tags,
  reactions,
}) => {
  return (
    <Card
      key={title}
      className={`project-card h-100 mb-2 ${
        description ? "bg-secondary bg-opacity-25" : "bg-transparent"
      }`}
    >
      <Card.Header className="bg-transparent">
        <Card.Img
          src={image || "https://via.placeholder.com/300"}
          height={"150px"}
          className="card-img-top bg-transparent"
          alt={title}
        />
        <Card.Title className="text-center text-light">{title}</Card.Title>
      </Card.Header>
      <Card.Body className="d-flex flex-column bg-transparent">
        {description && (
          <Card.Text className="text-light text-center">
            {description}
          </Card.Text>
        )}
      </Card.Body>
      {tags && tags.length > 0 && (
        <Card.Footer className="bg-transparent">
          <Tags tags={tags} status={reactions} />
          <div className="d-flex">
            {reactions !== undefined && (
              <Card.Link
                key={reactions}
                href={links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light link-underline link-underline-opacity-0"
              >
                <FaHeart className="me-1" size={20} color="red" /> {reactions}
              </Card.Link>
            )}

            {links &&
              links.length > 0 &&
              links.map((link, index) => (
                <Card.Link key={index} href={link.url} target="_blank">
                  {link.label}
                </Card.Link>
              ))}
          </div>
        </Card.Footer>
      )}
    </Card>
  );
};

export default MyCard;

MyCard.propTypes = {
  key: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
  tags: PropTypes.array,
  reactions: PropTypes.number, // Added prop validation for reactions
};
