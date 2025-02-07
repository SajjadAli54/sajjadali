import { FaHeart } from "react-icons/fa";
import { IconType } from "react-icons";

import Card from "react-bootstrap/Card";

import Tags from "./Tags";

interface Link {
  label: IconType;
  url?: string;
}

interface MyCardProps {
  image?: string;
  title: string;
  description?: string;
  links?: Link[];
  tags?: string[];
  reactions?: number;
}

const MyCard: React.FC<MyCardProps> = ({
  image = "https://via.placeholder.com/300",
  title,
  description,
  links = [],
  tags = [],
  reactions,
}) => {
  const component = (
    <Card key={title} className="h-100 mb-2">
      <Card.Header className="bg-transparent">
        <Card.Img
          src={image || "https://via.placeholder.com/300"}
          style={{ objectFit: "cover", height: "150px" }}
          className="card-img-top bg-transparent"
          alt={title}
        />
        <Card.Title className="text-center ">{title}</Card.Title>
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
                <Card.Link key={index} href={link.url} target="_blank">
                  {<link.label size={20} className="me-2" />}
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
