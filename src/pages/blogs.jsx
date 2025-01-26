import React, { useState, useEffect } from "react";
import Container from "../components/container";
import Card from "../components/card";

import Pagination from "../components/pagination";

import { paginate } from "../utils/utils";

const Blogs = () => {

  const size = 3;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // const url = `https://dev.to/api/articles?username=sajjadali&&per_page=${size}&page=${currentPage}`;

  const url = `https://dev.to/api/articles?username=sajjadali`;

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

  const items = paginate(posts, currentPage, size);

  return (
    <Container>
      <h2 className="text-center text-primary mb-4 display-4 fw-bold bg-dark">
        Blogs
      </h2>
      {loading ? (
        <p className="text-center bg-dark">Loading...</p>
      ) : 
      posts.length > 0 ? (
        <>
            <div className="row">
          {items.map((post, index) => (
            <div key={index} className="col-md-4 col-sm-12 mb-4">
              <Card
                image={post.cover_image}
                title={post.title}
                description={post.description}
                links={[{ url: post.canonical_url, label: "Read More" }]}
                tags={post.tag_list}
              />
            </div>
          ))}
        </div>
        <Pagination
          itemsCount={posts.length}
          pageSize={size}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        </>
      ) : (
        <p className="text-center">No Blogs available.</p>
      )}
    </Container>
  );
};

export default Blogs;
