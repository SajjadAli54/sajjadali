"use client";

import Link from "next/link";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";

import Tags from "@components/Tags";
import { calculateExperience } from "@utils/index";

interface Props {
  type: string;
  title: string;
  subtitle: string;
  institutionOrCompany: string;
  institutionOrCompanyUrl?: string;
  startDate: string;
  endDate?: string;
  achievementsOrDuties?: string[];
  tags?: string[];
  image?: string;
}

function ExperienceCard({
  type,
  title,
  subtitle,
  institutionOrCompany,
  institutionOrCompanyUrl = "#",
  startDate,
  endDate,
  achievementsOrDuties = [],
  tags = [],
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_Upz1wUzZ05xdUafznHl79IbWrjzHk6cfA&s",
}: Props) {
  const isJob = type === "job";
  const experience = isJob ? calculateExperience(startDate, endDate!) : null;

  return (
    // Width of the card: half the screen
    <Card className="bg-white shadow-sm border-0 mb-4">
      <Row className="g-0">
        <Col md={8} className="p-3">
          <Card.Header className="bg-transparent border-0">
            <div className="d-flex justify-content-between align-items-center">
              <Card.Title className="text-dark mb-2">{title}</Card.Title>
              <Badge className="bg-success">{`${startDate} - ${
                endDate || "Present"
              }`}</Badge>
            </div>
            <Card.Subtitle className="mb-2 text-muted text-start">
              <Link
                href={institutionOrCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary"
              >
                {institutionOrCompany}
              </Link>
            </Card.Subtitle>
          </Card.Header>

          <Card.Body className="bg-transparent">
            <Card.Text className="text-success mb-2 fw-semibold">
              {subtitle}
            </Card.Text>
            {isJob && (
              <Card.Text className="text-warning mb-2">
                <strong>Experience:</strong> {experience}
              </Card.Text>
            )}

            <ListGroup variant="flush" className="text-dark">
              {achievementsOrDuties.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  className="bg-transparent text-dark d-flex align-items-start border-0"
                >
                  <span
                    className="me-2 text-primary"
                    style={{ fontSize: "1.2rem" }}
                  >
                    •
                  </span>
                  <Card.Text>{item}</Card.Text>
                </ListGroup.Item>
              ))}
            </ListGroup>

            {tags.length > 0 && <Tags tags={tags} />}
          </Card.Body>
        </Col>

        {image && (
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="rounded-end overflow-hidden shadow-sm w-100">
              <Image
                src={image}
                alt={title}
                width={300}
                height={200}
                className="object-fit-cover w-100 h-auto"
              />
            </div>
          </Col>
        )}
      </Row>
    </Card>
  );
}

export default ExperienceCard;
