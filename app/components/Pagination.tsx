import { FC } from "react";

interface MyPaginationProps {
    itemsCount: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const MyPagination: FC<MyPaginationProps> = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;

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
        <div className="flex items-center space-x-2">
            <button
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 text-sm bg-transparent rounded-md hover:bg-gray-300 ${currentPage === 1 && 'cursor-not-allowed'}`}
            >
                First
            </button>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 text-sm bg-transparent rounded-md hover:bg-gray-300 ${currentPage === 1 && 'cursor-not-allowed'}`}
            >
                Prev
            </button>

            {displayedPages.map((page, index) =>
                page === "..." ? (
                    <span key={index} className="text-sm">...</span>
                ) : (
                    <button
                        key={index}
                        onClick={() => onPageChange(page as number)}
                        className={`px-3 py-1 text-sm rounded-md ${page === currentPage ? "bg-blue-500 text-white" : "bg-transparent text-blue-500"} hover:bg-blue-200`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === pagesCount}
                className={`px-3 py-1 text-sm bg-transparent rounded-md hover:bg-gray-300 ${currentPage === pagesCount && 'cursor-not-allowed'}`}
            >
                Next
            </button>
            <button
                onClick={() => onPageChange(pagesCount)}
                disabled={currentPage === pagesCount}
                className={`px-3 py-1 text-sm bg-transparent rounded-md hover:bg-gray-300 ${currentPage === pagesCount && 'cursor-not-allowed'}`}
            >
                Last
            </button>
        </div>
    );
};

export default MyPagination;
