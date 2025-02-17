import Pagination from "react-bootstrap/Pagination";
import _ from "lodash";
import PropTypes from "prop-types";

const MyPagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const PAGES_TO_SHOW = 2;
  const pages = _.range(1, pagesCount + 1);

  const getDisplayedPages = () => {
    if (pagesCount <= 5) return pages; // Show all pages if <= 5 pages

    let displayedPages = [];

    // Always show the first page
    displayedPages.push(1);

    // Show "..." if there's a gap between first and current pages
    if (currentPage > PAGES_TO_SHOW + 2) {
      displayedPages.push("...");
    }

    // Show pages around current page
    let start = Math.max(2, currentPage - PAGES_TO_SHOW);
    let end = Math.min(pagesCount - 1, currentPage + PAGES_TO_SHOW);
    for (let i = start; i <= end; i++) {
      displayedPages.push(i);
    }

    // Show "..." if there's a gap before the last page
    if (currentPage < pagesCount - PAGES_TO_SHOW - 1) {
      displayedPages.push("...");
    }

    // Always show the last page
    displayedPages.push(pagesCount);

    return displayedPages;
  };

  const displayedPages = getDisplayedPages();

  return (
    <Pagination>
      <Pagination.First
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />
      {displayedPages.map((page, index) =>
        page === "..." ? (
          <Pagination.Ellipsis key={index} />
        ) : (
          <Pagination.Item
            key={index}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Pagination.Item>
        )
      )}
      <Pagination.Last
        disabled={currentPage === pagesCount}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </Pagination>
  );
};

MyPagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default MyPagination;
