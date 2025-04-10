import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div
      className="py-2 my-2"
      style={{ backgroundColor: "#f8f9fa", minHeight: "60vh" }}
    >
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h2 className="fw-bold mb-4">{"Let's Connect!"}</h2>
          <p className="lead mb-4">
            {
              "I'm always open to collaborations, discussions, projects, or just a friendly chat!"
            }{" "}
          </p>

          <Row className="g-4 justify-content-center">
            <Col xs={12} md={5}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body>
                  <FaEnvelope size={32} className="text-primary mb-3" />
                  <Card.Title>Email</Card.Title>
                  <Card.Text>
                    <a
                      href="mailto:imsajjadali54@gmail.com"
                      className="text-decoration-none"
                    >
                      imsajjadali54@gmail.com
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={5}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body>
                  <FaMapMarkerAlt size={32} className="text-danger mb-3" />
                  <Card.Title>Location</Card.Title>
                  <Card.Text>Karachi, Pakistan</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="mt-4">
            <Link href="/contact" passHref legacyBehavior>
              <Button variant="primary" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactSection;
