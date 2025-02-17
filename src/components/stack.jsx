import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

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
      setPageSize(
        window.innerWidth < MOBILE_WIDTH ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE
      );
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => window.removeEventListener("resize", updatePageSize);
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

      <Row>
        {items.map((tech, index) => {
          const { category, items, icon: Icon } = tech;
          return (
            <Col sm={6} md={6} lg={4} className="mb-4" key={index}>
              <Card
                className="shadow-sm rounded-3 text-center p-4"
                style={{
                  background: `linear-gradient(145deg, ${tech.color} 30%, #fff)`,
                }}
              >
                <div
                  className="mb-3 d-flex justify-content-center align-items-center"
                  style={{
                    fontSize: "3rem",
                    color: "#fff",
                    backgroundColor: tech.color,
                    padding: "1rem",
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                  }}
                >
                  <Icon />
                </div>
                <Card.Title>{category}</Card.Title>
                <Card.Text className="text-muted">{items}</Card.Text>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Pagination
        itemsCount={techItems.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}

TechStack.propTypes = {
  techItems: PropTypes.array.isRequired,
};

export default TechStack;
