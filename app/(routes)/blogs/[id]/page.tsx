"use client";

import ReactMarkdown from "react-markdown";
import "highlight.js/styles/github-dark.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Post } from "@/app/types";
import { FaClock, FaHeart, FaComment } from "react-icons/fa";

import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "./blogpost.css"; // Custom styles for additional Bootstrap tweaks

const BlogPost = () => {
  const [blog, setBlog] = useState<Post | null>(null);
  const params = useParams();
  const postId = params.id;

  const url = "https://dev.to/api/articles/";

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`${url}${postId}`);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogPost();
  }, [postId]);

  if (!blog) return <p className="text-center my-5">Loading...</p>;

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={8} md={10} sm={12}>
          {/* Blog Cover Image */}
          {blog.cover_image && (
            <Image
              src={blog.cover_image}
              alt={blog.title}
              className="img-fluid rounded shadow cover-image"
            />
          )}

          {/* Blog Title */}
          <h1 className="my-4 text-center">{blog.title}</h1>

          {/* Meta Info */}
          <div className="text-muted text-center mb-3">
            <Image
              src={blog.user.profile_image}
              alt={blog.user.name}
              className="rounded-circle me-2"
              width={40}
              height={40}
            />
            <span className="fw-bold">{blog.user.name}</span> •{" "}
            <span>{blog.readable_publish_date}</span> •{" "}
            <FaClock className="me-1" /> {blog.reading_time_minutes} min read
          </div>

          {/* Reactions */}
          <div className="d-flex justify-content-center gap-3 my-3">
            <span className="text-danger">
              <FaHeart size={18} /> {blog.public_reactions_count}
            </span>
            <span className="text-primary">
              <FaComment size={18} /> {blog.comments_count}
            </span>
          </div>

          {/* Blog Content */}
          <Card className="shadow-sm p-4 border-0">
            <Card.Body>
              <ReactMarkdown
                components={{
                  img: ({ ...props }) => (
                    <Image {...props} className="blog-image" />
                  ),
                  code(obj) {
                    const { className, children, ...props } = obj;
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                      <SyntaxHighlighter
                        style={atomDark}
                        language={match[1]}
                        PreTag="div"
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {blog.body_markdown}
              </ReactMarkdown>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPost;
