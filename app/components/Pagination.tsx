import { FC } from "react";

import Pagination from "react-bootstrap/Pagination";
interface MyPaginationProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const MyPagination: FC<MyPaginationProps> = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount <= 1) return null;

  const PAGES_TO_SHOW = 2;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const getDisplayedPages = () => {
    if (pagesCount <= 5) return pages; // Show all pages if <= 5 pages

    const displayedPages: (number | string)[] = [];

    // Always show the first page
    displayedPages.push(1);

    // Show "..." if there's a gap between first and current pages
    if (currentPage > PAGES_TO_SHOW + 2) {
      displayedPages.push("...");
    }

    // Show pages around current page
    const start = Math.max(2, currentPage - PAGES_TO_SHOW);
    const end = Math.min(pagesCount - 1, currentPage + PAGES_TO_SHOW);
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
    <Pagination className="justify-content-center mt-4">
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
            onClick={() => onPageChange(page as number)}
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

export default MyPagination;
