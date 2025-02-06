import PropTypes from "prop-types";
import { Card, ListGroup, Row, Col, Container } from "react-bootstrap";
import Tags from "./common/tags";
import { calculateExperience } from "../utils/utils";

function ExperienceCard({
  type,
  title,
  subtitle,
  institutionOrCompany,
  institutionOrCompanyUrl,
  startDate,
  endDate,
  achievementsOrDuties = [],
  tags = [],
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_Upz1wUzZ05xdUafznHl79IbWrjzHk6cfA&s",
}) {
  const isJob = type === "job";
  const experience = isJob ? calculateExperience(startDate, endDate) : null;

  return (
    <Container className="mb-2">
      <Card className="bg-secondary bg-opacity-25 shadow-sm border-0">
        <Row className="g-0">
          <Col md={8} className="p-1">
            <Card.Header className="bg-transparent">
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title className="text-light mb-1">{title}</Card.Title>
                <Card.Subtitle className="mb-2">
                  <Card.Link
                    href={institutionOrCompanyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-primary fw-bold"
                    style={{ alignContent: "left !important" }}
                  >
                    {institutionOrCompany}
                  </Card.Link>
                </Card.Subtitle>

                <small className="text-light">{`${startDate} - ${
                  endDate || "Present"
                }`}</small>
              </div>
            </Card.Header>

            <Card.Body className="bg-transparent opacity-75">
              <Card.Text className="text-success mb-2 fw-bold fs-5">
                {subtitle}
              </Card.Text>
              {isJob && (
                <Card.Text className="text-success mb-2">
                  <strong>Experience:</strong> {experience}
                </Card.Text>
              )}
              {achievementsOrDuties.length > 0 && (
                <ListGroup variant="flush" className="text-light">
                  {achievementsOrDuties.map((item, index) => (
                    <ListGroup.Item
                      key={index}
                      className="bg-transparent text-light d-flex align-items-start border-0"
                    >
                      <span
                        className={`me-2 ${
                          isJob ? "text-primary" : "text-success"
                        }`}
                        style={{ fontSize: "1.2rem" }}
                      >
                        •
                      </span>
                      <Card.Text>{item}</Card.Text>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
              <Tags tags={tags} />
            </Card.Body>
          </Col>
          {image && (
            <Col md={4} className="d-flex align-items-center">
              <Card.Img
                src={image}
                alt={title}
                className="rounded-end w-100 h-100 object-fit-cover shadow-sm"
                style={{ height: "70%" }}
              />
            </Col>
          )}
        </Row>
      </Card>
    </Container>
  );
}

ExperienceCard.propTypes = {
  type: PropTypes.oneOf(["education", "job"]).isRequired,
  title: PropTypes.string.isRequired,
  institutionOrCompany: PropTypes.string.isRequired,
  institutionOrCompanyUrl: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  subtitle: PropTypes.string,
  achievementsOrDuties: PropTypes.array,
  tags: PropTypes.array,
  image: PropTypes.string,
};

export default ExperienceCard;
