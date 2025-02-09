"use client";

import { FaHeart } from "react-icons/fa";
import { IconType } from "react-icons";

import Card from "react-bootstrap/Card";

import Tags from "@components/Tags";

interface Link {
  label: IconType;
  url?: string;
  className?: string;
  onClick?: () => void;
}

interface MyCardProps {
  image?: string;
  title: string;
  description?: string;
  links?: Link[];
  tags?: string[];
  reactions?: number;
  className?: string;
}

const MyCard: React.FC<MyCardProps> = ({
  image = "https://via.placeholder.com/300",
  title,
  description,
  links = [],
  tags = [],
  reactions,
  className,
}) => {
  const component = (
    <Card
      key={title}
      className={`h-100 mb-2 glassmorphism ${className}`}
      style={{ height: "100%", overflow: "hidden" }}
    >
      <Card.Header className="bg-transparent">
        <Card.Img
          src={image || "https://via.placeholder.com/300"}
          style={{ objectFit: "cover", width: "100%", height: "200px" }}
          className="card-img-top bg-transparent"
          alt={title}
        />
        <Card.Title className="text-center mt-4">{title}</Card.Title>
      </Card.Header>
      <Card.Body className="d-flex flex-column bg-transparent">
        {description && (
          <Card.Text className=" text-center">{description}</Card.Text>
        )}
      </Card.Body>
      {tags && tags.length > 0 && (
        <Card.Footer className="bg-transparent">
          <Tags tags={tags} />
          <div className="d-flex mt-3">
            {reactions !== undefined && (
              <Card.Link
                key={reactions}
                href={links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className=" link-underline link-underline-opacity-0"
              >
                <FaHeart className="me-1" size={20} color="red" /> {reactions}
              </Card.Link>
            )}

            {links &&
              links.length > 0 &&
              links.map((link, index) => (
                <Card.Link
                  key={index}
                  href={link.url}
                  onClick={link.onClick}
                  target="_blank"
                >
                  {
                    <link.label
                      size={20}
                      className={`me-2 ${link.className}`}
                    />
                  }
                </Card.Link>
              ))}
          </div>
        </Card.Footer>
      )}
    </Card>
  );

  return component;
};

export default MyCard;
