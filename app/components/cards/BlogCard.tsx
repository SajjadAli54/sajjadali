"use client";

import { motion } from "framer-motion";
import { FiClock, FiMessageCircle, FiGlobe, FiHeart } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import Tags from "@components/Tags";
import { Blog } from "@/app/types";

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

      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 1.5rem;
          transition: all 0.3s ease;
        }

        .image-container {
          height: 250px;
          overflow: hidden;
          position: relative;
        }

        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.1));
        }

        .text-gradient {
          background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .btn-gradient {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          border: none;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 500;
        }

        .glass-tag {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
        }

        .glass-card:hover .blog-image {
          transform: scale(1.05);
        }
      `}</style>
    </motion.div>
  );
};

export default BlogCard;
