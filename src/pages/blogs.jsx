import PropTypes from "prop-types";

import { useState, useEffect } from "react";
import { LiaBlogSolid } from "react-icons/lia";
import { FaGlobe } from "react-icons/fa";

import Container from "../components/common/container";
import Card from "../components/common/card";
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/utils";
import SearchBox from "../components/common/SearchBox";
import Loader from "../components/common/loader";

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
          (a, b) => b.public_reactions_count - a.public_reactions_count
        );
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const field = searchQuery.trim().toLowerCase();
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(field) ||
        post.description.toLowerCase().includes(field) ||
        post.tag_list.some((tag) => tag.toLowerCase().includes(field))
    );
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

  const items = paginate(filteredPosts, currentPage, PAGE_SIZE);

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
          <SearchBox
            searchField={searchQuery}
            searchChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
          />
          <BlogsList items={items} />
          <Pagination
            itemsCount={filteredPosts.length}
            pageSize={PAGE_SIZE}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      ) : (
        <p className="text-center">No Blogs available.</p>
      )}
    </Container>
  );
};

export default Blogs;

const BlogsList = ({ items }) => {
  return (
    <div className="row">
      {items.map((post, index) => (
        <div key={index} className="col-md-4 col-sm-12 mb-4">
          <Card
            image={post.cover_image}
            title={post.title}
            description={post.description}
            reactions={post.public_reactions_count}
            links={[
              {
                url: post.canonical_url,
                label: <FaGlobe size={20} className="me-2" />,
              },
            ]}
            tags={post.tag_list}
          />
        </div>
      ))}
    </div>
  );
};

BlogsList.propTypes = {
  items: PropTypes.array.isRequired,
};
