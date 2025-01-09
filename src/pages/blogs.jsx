import React, { useState, useEffect } from "react";
import Container from "../components/container";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://dev.to/api/articles?username=sajjadali";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      <h2 className="text-center text-primary mb-4 display-4 fw-bold">Blogs</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : posts.length > 0 ? (
        <div className="row">
          {posts.map((post, index) => (
            <div key={index} className="col-md-4 col-sm-12 mb-4">
              <div className="card project-card h-100 bg-dark">
                <img
                  src={post.cover_image || "https://via.placeholder.com/300"}
                  className="card-img-top"
                  alt={post.slug}
                />
                <div className="card-body d-flex flex-column bg-dark">
                  <h5 className="card-title text-light">{post.title}</h5>
                  <p className="card-text text-light">{post.description}</p>
                  <div className="mt-auto">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No posts available.</p>
      )}
    </Container>
  );
};

export default Blogs;
