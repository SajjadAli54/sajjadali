"use client";

import { FiClock, FiMessageCircle, FiGlobe, FiHeart } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import Tags from "@components/Tags";
import { Blog } from "@/app/types";

const BlogCard: React.FC<{ blog: Blog; className?: string }> = ({
  blog,
  className = "",
}) => {
  return (
    <div className={className}>
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
            <div className="d-flex align-items-center gap-2">
              <Card.Img
                src={blog.user.profile_image || "/placeholder-avatar.png"}
                alt={blog.user.username}
                className="rounded-circle me-3 shadow-sm"
                style={{ width: "45px", height: "45px", objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="fw-bold text-foreground">{blog.user.name}</div>
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
            <a
              href={blog.canonical_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gradient d-flex align-items-center gap-2"
            >
              <FiGlobe />
              Read Article
            </a>

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
          background: var(--card-bg);
          border: 1px solid var(--border);
          backdrop-filter: blur(16px);
          border-radius: 1.5rem;
          transition: all 0.3s ease;
          color: var(--foreground);
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
          background: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.12));
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass-tag {
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.16);
          padding: 0.5rem 1rem;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
        }

        .glass-card:hover .blog-image {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default BlogCard;
