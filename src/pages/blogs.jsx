import React, { useState, useEffect } from "react";
import Container from "../components/container";
import Card from "../components/card";

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
              <Card
                image={post.cover_image}
                title={post.title}
                description={post.description}
                link={post.url}
                buttonText="Read More"
              />
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
