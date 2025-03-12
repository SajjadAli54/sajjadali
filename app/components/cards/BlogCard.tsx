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
      className={`h-100 shadow-sm rounded ${className}`}
      style={{ overflow: "hidden" }}
    >
      <Card.Link
        href={blog.canonical_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card.Img
          src={blog.cover_image || "https://via.placeholder.com/600x300"}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "250px",
          }}
          className="card-img-top"
          alt={blog.title}
        />
      </Card.Link>

      <Card.Body className="d-flex flex-column">
        <div className="d-flex align-items-center mb-2">
          <Card.Img
            src={blog.user.profile_image || "https://via.placeholder.com/40"}
            alt={blog.user.username}
            className="rounded-circle me-2"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          <div>
            <small className="fw-bold">{blog.user.name}</small>
            <br />
            <small className="text-muted">
              {new Date(blog.published_at).toDateString()} -{" "}
              <span className="fw-bold">
                {blog.reading_time_minutes} minutes
              </span>
            </small>
          </div>
        </div>

        {/* Blog Title - Clickable */}
        <Card.Title className="text-dark">
          <a
            href={blog.canonical_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark"
          >
            {blog.title}
          </a>
        </Card.Title>

        <Card.Text className="text-muted">{blog.description}</Card.Text>
      </Card.Body>

      <Card.Footer>
        <Tags tags={blog.tag_list} />

        <div className="d-flex justify-content-between bg-light mt-2">
          <div className="d-flex align-items-center">
            <FaGlobe className="me-1" size={18} />
            <a
              href={blog.canonical_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              Read More
            </a>
          </div>
          <div>
            <FaHeart className="me-2 text-danger" size={18} />{" "}
            {blog.public_reactions_count}
            <FaComment className="ms-3 text-primary" size={18} />{" "}
            {blog.comments_count}
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default BlogCard;
