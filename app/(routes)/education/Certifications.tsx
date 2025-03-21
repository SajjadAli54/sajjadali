import CertificationCard from "@/app/components/cards/CertificationCard";
import { certifications } from "@data/certifications";

import "./certifications.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const Certifications = () => {
  return (
    <Container className="py-5 ">
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
