"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import BlogCard from "@/app/components/cards/BlogCard";
import { useMediaQuery } from "@/app/hooks";
import Pagination from "@components/Pagination";
import SearchBox from "@components/search/SearchBox";
import Loader from "@components/Loader";
import { paginate } from "@utils/index";
import { Blog } from "@types";
import { FiAlertTriangle } from "react-icons/fi";

const Blogs = () => {
  const isMobile = useMediaQuery();
  const PAGE_SIZE = isMobile ? 4 : 8;
  const CURRENT_PAGE = 1;

  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<Blog[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(CURRENT_PAGE);
  const [error, setError] = useState("");

  const url = `https://dev.to/api/articles?username=sajjadali`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
        console.error("Error fetching posts:", err);
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
    setCurrentPage(1);
  }, [searchQuery, posts]);

  const items = paginate(filteredPosts, currentPage, PAGE_SIZE);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container className="glass-container p-4 rounded-4 my-5">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <SearchBox
          searchField={searchQuery}
          searchChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search blog posts..."
        />

        {error ? (
          <div className="text-center py-5 text-danger">
            <FiAlertTriangle className="mb-3" size={32} />
            <p>{error}</p>
          </div>
        ) : loading ? (
          <Loader />
        ) : (
          <>
            {items.length === 0 ? (
              <motion.div
                className="empty-state text-center py-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <FiAlertTriangle className="empty-icon mb-3" />
                <h4 className="text-muted">No posts found</h4>
                <p className="text-muted">Try adjusting your search terms</p>
              </motion.div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid-layout"
              >
                {items.map((post, index) => (
                  <motion.div
                    key={post.id || index}
                    variants={itemVariants}
                    className="grid-item"
                  >
                    <BlogCard blog={post} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            <Pagination
              itemsCount={filteredPosts.length}
              pageSize={PAGE_SIZE}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </>
        )}
      </motion.div>

      <style jsx global>{`
        .glass-container {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem 0;
        }

        .empty-state {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .empty-icon {
          font-size: 3rem;
          color: #6b7280;
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .grid-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Container>
  );
};

export default Blogs;
