"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { paginate } from "@utils/index";
import Pagination from "@components/Pagination";
import "./stack.css";

interface Stack {
  category: string;
  color: string;
  items: string;
  icon: IconType;
}

interface Props {
  techItems: Stack[];
  isMobile: boolean;
}

const TechStack = ({ techItems, isMobile }: Props) => {
  const MOBILE_PAGE_SIZE = 4;
  const DESKTOP_PAGE_SIZE = 9;
  const CURRENT_PAGE = 1;

  const [currentPage, setCurrentPage] = useState(CURRENT_PAGE);
  const [pageSize, setPageSize] = useState(
    isMobile ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE
  );


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const items = paginate(techItems, currentPage, pageSize);

  return (
    <div className="tech-stack-container">
      <Row className="g-4">
        {items.map((tech, index) => {
          const { category, items, icon: Icon } = tech;
          return (
            <Col xs={12} sm={6} lg={4} key={`${currentPage}-${index}`}>
              <div className="tech-card-wrapper">
                <Card className="h-100 tech-card shadow-lg">
                  <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                    <div className="icon-wrapper mb-4">
                      <Icon className="tech-icon" size={60} />
                    </div>
                    <Card.Title className="mb-3 fw-bold text-gradient">
                      {category}
                    </Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {items.split(", ").map((item, i) => (
                        <span key={i} className="tech-item">
                          {item}
                          {i < items.split(", ").length - 1 && " • "}
                        </span>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>

      <div className="mt-5">
        <Pagination
          itemsCount={techItems.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default TechStack;
