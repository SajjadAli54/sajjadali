"use client";

import { FaComment, FaGlobe, FaHeart } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Tags from "@components/Tags";
import { Blog } from "@/app/types";

const BlogCard: React.FC<{ blog: Blog; className?: string }> = ({
  blog,
  className = "",
}) => {
  return (
    <Card
      className={`h-100 glassmorphism ${className}`}
      style={{ overflow: "hidden" }}
    >
      <Card.Img
        src={blog.cover_image || "https://via.placeholder.com/300"}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "auto",
          maxHeight: "200px",
        }}
        className="card-img-top"
        alt={blog.title}
      />

      <Card.Body className="d-flex flex-column bg-transparent">
        <Card.Title className="text-center">{blog.title}</Card.Title>
        <Card.Text className="text-center">{blog.description}</Card.Text>
      </Card.Body>

      <Card.Footer className="bg-transparent">
        <Tags tags={blog.tag_list} />
        <div className="d-flex  mt-3">
          <Card.Link
            href={blog.canonical_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FaGlobe className="me-1" size={20} />
          </Card.Link>
          <Card.Link
            href={blog.canonical_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FaHeart className="me-1" size={20} color="red" />{" "}
            {blog.public_reactions_count}
          </Card.Link>

          <Card.Link
            href={blog.canonical_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FaComment className="me-1" size={20} color="blue" />{" "}
            {blog.comments_count}
          </Card.Link>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default BlogCard;
