import CertificationCard from "@/app/components/cards/CertificationCard";
import { certifications } from "@data/certifications";

import "./certifications.css"; // Import CSS module
import { Col, Container, Row } from "react-bootstrap";

export const Certifications = () => {
  return (
    <Container className="py-5 animate__animated animate__fadeIn">
      <Row className="justify-content-center">
        {certifications.map((cert, index) => (
          <Col
            md={4}
            lg={3}
            sm={6}
            key={index}
            className="d-flex align-items-stretch mb-4"
          >
            <CertificationCard certification={cert} className="w-100 h-100" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
