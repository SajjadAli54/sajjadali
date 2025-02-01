import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

import "./SearchBox.css";

const SearchBox = ({ searchField, searchChange, placeholder }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 text-center text-lg-start mb-4">
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
