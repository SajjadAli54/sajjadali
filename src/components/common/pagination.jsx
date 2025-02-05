import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const PAGES_TO_SHOW = 2; // Number of pages to show around currentPage
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
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center mt-4 mb-4">
        {/* Previous Button */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="page-link"
            disabled={currentPage === 1}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        {/* Page Numbers */}
        {displayedPages.map((page, index) => (
          <li
            key={index}
            className={`page-item ${page === currentPage ? "active" : ""}`}
          >
            {page === "..." ? (
              <span className="page-link">...</span>
            ) : (
              <button onClick={() => onPageChange(page)} className="page-link">
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next Button */}
        <li
          className={`page-item ${
            currentPage === pagesCount ? "disabled" : ""
          }`}
        >
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className="page-link"
            disabled={currentPage === pagesCount}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
