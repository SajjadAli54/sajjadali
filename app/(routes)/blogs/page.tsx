"use client";

import { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

import Container from "react-bootstrap/Container";

import Card from "@components/Card";
import Pagination from "@components/Pagination";

import SearchBox from "@components/search/SearchBox";
import Loader from "@components/Loader";
import { paginate } from "@utils/index";

import { Blog } from "@types";
import { Col, Row } from "react-bootstrap";

const Blogs = () => {
  const PAGE_SIZE = 3;
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
        data.sort(
          (a: Blog, b: Blog) =>
            b.public_reactions_count - a.public_reactions_count
        );
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
    <Container className="animate__animated animate__fadeIn">
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
            <BlogsList items={items} />
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

const BlogsList = ({ items }: { items: Blog[] }) => {
  return (
    <Row>
      {items.map((post, index) => (
        <Col key={index} md={4} sm={12}>
          <Card
            image={post.cover_image}
            title={post.title}
            description={post.description}
            reactions={post.public_reactions_count}
            links={[
              {
                url: post.canonical_url,
                label: FaGlobe,
              },
            ]}
            tags={post.tag_list}
          />
        </Col>
      ))}
    </Row>
  );
};
