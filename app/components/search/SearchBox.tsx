import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { Row, Col } from "react-bootstrap";

interface Props {
  searchField: string;
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBox = ({ searchField, searchChange, placeholder }: Props) => {
  return (
    <Row className="justify-content-center mb-5">
      <Col xl={6} lg={8} md={10}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="search-container position-relative"
        >
          <FiSearch className="search-icon" />
          <input
            className="search-input"
            type="search"
            placeholder={placeholder}
            value={searchField}
            onChange={searchChange}
          />
          <div className="input-highlight"></div>
        </motion.div>
      </Col>

      <style jsx global>{`
        .search-container {
          position: relative;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .search-input {
          width: 100%;
          padding: 1.2rem 1.5rem 1.2rem 3.5rem;
          font-size: 1rem;
          border: none;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .search-input:focus {
          outline: none;
          box-shadow: 0 4px 25px rgba(99, 102, 241, 0.2);
        }

        .search-input:focus + .input-highlight {
          opacity: 1;
        }

        .search-input:focus ~ .search-icon {
          color: #4f46e5;
          transform: translateY(-50%) scale(1.1);
        }

        .input-highlight {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          background: linear-gradient(135deg, #6366f155, #a855f755);
          filter: blur(12px);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
      `}</style>
    </Row>
  );
};

export default SearchBox;
