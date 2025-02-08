import { FaSearch } from "react-icons/fa";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./SearchBox.css";

interface Props {
  searchField: string;
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBox = ({ searchField, searchChange, placeholder }: Props) => {
  return (
    <Row className="row justify-content-center">
      <Col className="col-lg-6 text-center text-lg-start mb-4">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            className="search-input"
            type="search"
            placeholder={placeholder}
            value={searchField}
            onChange={searchChange}
          />
        </div>
      </Col>
    </Row>
  );
};

export default SearchBox;
