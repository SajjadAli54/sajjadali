import { Col, Container, Row } from "react-bootstrap";
import { IconType } from "react-icons";

interface BadgeProps {
  href: string;
  icon: IconType;
  className: string;
}

function MyFooter({ badges }: { badges: BadgeProps[] }) {
  const component = (
    <footer className="py-3 bg-transparent">
      <Container className="text-center">
        <Row className="justify-content-center">
          {badges.map((badge, index) => (
            <Col key={index}>
              <a
                key={index}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                className={badge.className}
              >
                <badge.icon size={30} />
              </a>
            </Col>
          ))}
        </Row>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Sajjad Ali. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
  return component;
}

export default MyFooter;
