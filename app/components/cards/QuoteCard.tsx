import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";
import { FaQuoteLeft as FiQuote } from "react-icons/fa6";

function QuoteCard() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchQuote = () => {
    setIsLoading(true);
    setError("");
    fetch("https://quotes-api-self.vercel.app/quote")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch quote");
        return res.json();
      })
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
        setError("Failed to load quote. Please try again.");
        setIsLoading(false);
      });
  };

  useEffect(fetchQuote, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="quote-section my-5"
    >
      <div className="glass-quote-card rounded-4 position-relative">
        <FiQuote className="quote-icon top-icon text-primary" size={32} />
        <FiQuote className="quote-icon bottom-icon text-primary" size={32} />

        <div className="text-center mb-4">
          <h2 className="text-gradient mb-0">Daily Inspiration</h2>
          <motion.button
            whileHover={{ rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="refresh-button"
            onClick={fetchQuote}
            disabled={isLoading}
          >
            <FiRefreshCw size={24} />
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-danger"
            >
              {error}
            </motion.div>
          ) : isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="skeleton-loader"
            >
              <div className="skeleton-line long" />
              <div className="skeleton-line medium" />
              <div className="skeleton-line short" />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <blockquote className="blockquote mb-4">
                <p className="quote-text fs-3 fst-italic text-dark">
                  {`"${quote}"`}
                </p>
              </blockquote>
              <footer className="blockquote-footer text-end text-primary fw-bold mt-3">
                — {author}
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .glass-quote-card {
          background: var(--card-bg);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(var(--border-rgb), 0.18);
          box-shadow: 0 8px 32px rgba(15, 23, 42, 0.1);
        }

        .text-gradient {
          background: linear-gradient(45deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .quote-icon {
          position: absolute;
          opacity: 0.12;
        }

        .top-icon {
          top: 1rem;
          left: 1rem;
        }

        .bottom-icon {
          bottom: 1rem;
          right: 1rem;
          transform: rotate(180deg);
        }

        .refresh-button {
          border: none;
          background: none;
          color: var(--primary);
          margin-top: 0.5rem;
          transition: color 0.3s ease;
        }

        .refresh-button:hover {
          color: var(--accent);
        }

        .skeleton-loader {
          padding: 1rem;
        }

        .skeleton-line {
          height: 1.5rem;
          background: rgba(var(--border-rgb), 0.12);
          border-radius: 4px;
          margin-bottom: 1rem;
          animation: pulse 1.5s infinite;
        }

        .skeleton-line.long {
          width: 100%;
        }

        .skeleton-line.medium {
          width: 80%;
        }

        .skeleton-line.short {
          width: 60%;
        }

        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }

        .quote-text {
          line-height: 1.6;
          position: relative;
          z-index: 1;
          color: var(--foreground);
        }
      `}</style>
    </motion.div>
  );
}

export default QuoteCard;
