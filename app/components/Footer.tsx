import { Col, Container, Row } from "react-bootstrap";
import { IconType } from "react-icons";

import "./footer.css";

interface BadgeProps {
  href: string;
  icon: IconType;
  className: string;
}

const MyFooter = ({ badges }: { badges: BadgeProps[] }) => {
  return (
    <footer className="modern-footer py-4">
      <Container>
        <Row className="align-items-center text-center">
          {/* Left Side: Social Icons */}
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="fw-bold">{"Let's Connect"}</h5>
            <div className="d-flex justify-content-center gap-3">
              {badges.map((badge, index) => (
                <a
                  key={index}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon ${badge.className}`}
                >
                  <badge.icon size={30} />
                </a>
              ))}
            </div>
          </Col>

          <Col>
            <h5 className="fw-bold">Stay Inspired</h5>
            <p className="small text-muted">
              {"Code is like humor. When you have to explain it, it's bad."}
            </p>
          </Col>
        </Row>

        {/* Bottom Copyright */}
        <Row className="mt-3">
          <Col className="text-center">
            <p className="small text-muted">
              © {new Date().getFullYear()} Sajjad Ali. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
