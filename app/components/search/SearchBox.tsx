import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { Row, Col } from "react-bootstrap";

import "./searchBox.css";

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
    </Row>
  );
};

export default SearchBox;
