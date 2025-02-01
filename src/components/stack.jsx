import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Container from "./common/container";
import Pagination from "./common/pagination";
import { paginate } from "../utils/utils";

function TechStack({ techItems }) {
  const MOBILE_WIDTH = 768;
  const MOBILE_PAGE_SIZE = 2;
  const DESKTOP_PAGE_SIZE = 6;
  const CURRENT_PAGE = 1;

  const [currentPage, setCurrentPage] = useState(CURRENT_PAGE);
  const [pageSize, setPageSize] = useState(MOBILE_PAGE_SIZE);

  useEffect(() => {
    const updatePageSize = () => {
      if (window.innerWidth < MOBILE_WIDTH) {
        setPageSize(MOBILE_PAGE_SIZE);
      } else {
        setPageSize(DESKTOP_PAGE_SIZE);
      }
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize); // Listen for window resize

    return () => window.removeEventListener("resize", updatePageSize); // Cleanup
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const items = paginate(techItems, currentPage, pageSize);

  return (
    <Container>
      <h3 className="text-center text-light display-4 fw-bold mb-5">
        The technologies I work with to bring ideas to life
      </h3>
      <div className="row">
        {items.map((tech, index) => {
          const { category, items, icon: Icon } = tech;
          return (
            <div className="col-sm-6 col-md-6 col-lg-4 mb-4" key={index}>
              <div
                className="card shadow-sm rounded-3 p-4 text-center"
                style={{
                  background: `linear-gradient(145deg, ${tech.color} 30%, #fff)`,
                }}
              >
                <div
                  className="icon mb-3"
                  style={{
                    fontSize: "3rem",
                    color: "#fff",
                    backgroundColor: tech.color,
                    padding: "1rem",
                    borderRadius: "50%",
                  }}
                >
                  {<Icon />}
                </div>
                <h4 className="card-title mb-3">{category}</h4>
                <p className="card-text text-muted">{items}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        itemsCount={techItems.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}

export default TechStack;

TechStack.propTypes = {
  techItems: PropTypes.array.isRequired,
};
