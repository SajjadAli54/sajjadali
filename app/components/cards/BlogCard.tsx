"use client";

import { motion } from "framer-motion";
import { FiClock, FiMessageCircle, FiGlobe, FiHeart } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import Tags from "@components/Tags";
import { Blog } from "@/app/types";

import "./blogCard.css";

const BlogCard: React.FC<{ blog: Blog; className?: string }> = ({
  blog,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      whileHover={{ scale: 1.02 }}
      className={className}
    >
      <Card className="glass-card h-100 border-0 overflow-hidden shadow-lg">
        <Card.Link href={`/blogs/${blog.id}`} className="text-decoration-none">
          <div className="image-container position-relative">
            <Card.Img
              src={blog.cover_image || "/placeholder-blog.png"}
              alt={blog.title}
              className="blog-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder-blog.png";
              }}
            />
            <div className="image-overlay" />
          </div>
        </Card.Link>

        <Card.Body className="d-flex flex-column p-4">
          <div className="d-flex align-items-center mb-3">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Card.Img
                src={blog.user.profile_image || "/placeholder-avatar.png"}
                alt={blog.user.username}
                className="rounded-circle me-3 shadow-sm"
                style={{ width: "45px", height: "45px", objectFit: "cover" }}
              />
            </motion.div>
            <div>
              <div className="fw-bold text-dark">{blog.user.name}</div>
              <small className="text-muted d-flex align-items-center gap-2">
                <FiClock className="text-primary" />
                {blog.reading_time_minutes} min read •{" "}
                {new Date(blog.published_at).toLocaleDateString()}
              </small>
            </div>
          </div>

          <Card.Title className="text-gradient mb-3">
            <a
              href={`/blogs/${blog.id}`}
              className="text-decoration-none stretched-link"
            >
              {blog.title}
            </a>
          </Card.Title>

          <Card.Text className="text-muted mb-4">{blog.description}</Card.Text>

          <div className="mt-auto">
            <Tags tags={blog.tag_list} />
          </div>
        </Card.Body>

        <Card.Footer className="bg-transparent border-0 px-4 pb-4">
          <div className="d-flex justify-content-between align-items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={blog.canonical_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gradient d-flex align-items-center gap-2"
            >
              <FiGlobe />
              Read Article
            </motion.a>

            <div className="d-flex gap-3 text-muted">
              <div className="d-flex align-items-center gap-1">
                <FiHeart className="text-danger" />
                {blog.public_reactions_count}
              </div>
              <div className="d-flex align-items-center gap-1">
                <FiMessageCircle className="text-primary" />
                {blog.comments_count}
              </div>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
