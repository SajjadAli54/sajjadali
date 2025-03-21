"use client";

import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BlogCard from "@/app/components/cards/BlogCard";
import { useMediaQuery } from "@/app/hooks";

import Pagination from "@components/Pagination";
import SearchBox from "@components/search/SearchBox";
import Loader from "@components/Loader";

import { paginate } from "@utils/index";

import { Blog } from "@types";

const Blogs = () => {
  const isMobile = useMediaQuery();
  const PAGE_SIZE = isMobile ? 3 : 6;

  const CURRENT_PAGE = 1;

  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(CURRENT_PAGE);

  const url = `https://dev.to/api/articles?username=sajjadali`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // data.sort((a: Blog, b: Blog) => b.comments_count - a.comments_count);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [url]);

  useEffect(() => {
    const field = searchQuery.trim().toLowerCase();
    const filtered = posts.filter(
      (post: Blog) =>
        post.title.toLowerCase().includes(field) ||
        post.description.toLowerCase().includes(field) ||
        post.tag_list.some((tag) => tag.toLowerCase().includes(field))
    );
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

  const items = paginate(filteredPosts, currentPage, PAGE_SIZE);

  return (
    <Container className="">
      <>
        <SearchBox
          searchField={searchQuery}
          searchChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
        />

        {loading ? (
          <Loader />
        ) : (
          <>
            <Row>
              {items.map((post, index) => (
                <Col key={index} md={4} sm={12} className="mb-4">
                  <BlogCard key={index} blog={post} />
                </Col>
              ))}
            </Row>

            <Pagination
              itemsCount={filteredPosts.length}
              pageSize={PAGE_SIZE}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </>
        )}
      </>
    </Container>
  );
};

export default Blogs;
