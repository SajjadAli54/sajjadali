import React, { useState, useEffect } from "react";
import { LiaBlogSolid } from "react-icons/lia";
import { GrView } from "react-icons/gr";

import Container from "../components/container";
import Card from "../components/card";
import Pagination from "../components/pagination";
import { paginate } from "../utils/utils";

const Loader = () => (
  <div className="d-flex justify-content-center align-items-center vh-50">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const Blogs = () => {
  const size = 3;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
      <h2 className="text-center text-primary mb-4 display-4 fw-bold bg-transparent">
        <LiaBlogSolid className="me-2 text-warning" />
        Blogs
      </h2>
      {loading ? (
        <Loader />
      ) : posts.length > 0 ? (
        <>
          <div className="row">
            {items.map((post, index) => (
              <div key={index} className="col-md-4 col-sm-12 mb-4">
                <Card
                  image={post.cover_image}
                  title={post.title}
                  description={post.description}
                  links={[
                    {
                      url: post.canonical_url,
                      label: (
                        <GrView className="me-2 text-secondary display-6" />
                      ),
                    },
                  ]}
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
