"use client";

import Card from "react-bootstrap/Card";

import Tags from "@components/Tags";
import { FaExternalLinkAlt } from "react-icons/fa";

interface MyCardProps {
  image?: string;
  url?: string;
  title?: string;
  subtitle?: string;
  companyUrl: string;
  description?: string;
  tags?: string[];
  className?: string;
}

const MyCard: React.FC<MyCardProps> = ({
  image = "https://via.placeholder.com/300",
  title,
  subtitle,
  url,
  companyUrl,
  description,
  tags = [],
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
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
            maxHeight: "200px",
          }}
          className="card-img-top bg-transparent"
          alt={title}
        />
        <Card.Title className="text-center mt-4">{title}</Card.Title>
        <Card.Subtitle className="text-center">
          <Card.Link
            href={companyUrl}
            className="link-underline link-underline-opacity-0"
            target="_blank"
            rel="noopener noreferrer "
          >
            {subtitle}
          </Card.Link>
        </Card.Subtitle>
      </Card.Header>
      <Card.Body className="d-flex flex-column bg-transparent">
        {description && (
          <Card.Text className=" text-center">{description}</Card.Text>
        )}
      </Card.Body>
      {tags && tags.length > 0 && (
        <Card.Footer className={"bg-transparent"}>
          <Tags tags={tags} />
          <div className="d-flex mt-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success d-flex align-items-center"
            >
              <FaExternalLinkAlt className="me-2" size={16} /> Read More
            </a>
          </div>
        </Card.Footer>
      )}
    </Card>
  );

  return component;
};

export default MyCard;
