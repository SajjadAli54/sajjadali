import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

import "./SearchBox.css";

const SearchBox = ({ searchField, searchChange, placeholder }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 text-center text-lg-start mb-4">
        <div className="search-container">
          <input
            className="form-control search-input bg-opacity-25 shadow-sm"
            type="search"
            placeholder={placeholder}
            value={searchField}
            onChange={searchChange}
            aria-label="Search"
            aria-describedby="search"
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  searchField: PropTypes.string,
  searchChange: PropTypes.func,
  placeholder: PropTypes.string,
};
