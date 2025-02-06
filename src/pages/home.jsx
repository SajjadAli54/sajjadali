import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { GoStack } from "react-icons/go";
import { AnimatedText } from "animated-backgrounds";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import Container from "../components/common/container";
import TechStack from "../components/stack";
import Projects from "../pages/projects";

export default function Home({ projects, ProfileImage, techItems }) {
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg={6} className="text-center text-lg-start">
          <h1 className="display-4 fw-bold mb-3 text-light">
            Hi, I am{" "}
            <AnimatedText
              text="Sajjad Ali"
              effect="rainbow"
              config={{
                speed: 100,
                loop: true,
                delay: 1000,
                color: "#ff0000",
              }}
            />
          </h1>
          <Card className="bg-secondary bg-opacity-25 text-light p-3 mb-4">
            <Card.Text className="lead">
              Building seamless digital experiences across Web, Mobile, and
              Desktop. Passionate Full-Stack Developer turning complex problems
              into elegant solutions.
            </Card.Text>
          </Card>
          <Button
            as={Link}
            to="/projects"
            variant="primary"
            size="lg"
            className="m-2"
          >
            View My Work
          </Button>
          <Button
            as={Link}
            to="/contact"
            variant="secondary"
            size="lg"
            className="m-2"
          >
            Contact Me
          </Button>
        </Col>
        <Col lg={6} className="text-center position-relative">
          <Image
            id="myImage"
            className="img-fluid rounded-circle mb-4 mt-4"
            src={ProfileImage}
            alt="Sajjad Ali"
            roundedCircle
          />
        </Col>
      </Row>

      {/* Horizontal Divider */}
      <hr className="my-1 text-light" />

      {/* Tech Stack Section */}
      <div className="text-center mb-5">
        <h2 className="display-5 text-primary">
          <GoStack className="text-warning" /> Tech Stack
        </h2>
        <TechStack techItems={techItems} />
      </div>

      {/* Projects Section */}
      <Projects projects={projects} size={3} />

      {/* Contact Section */}
      <div id="contact" className="text-center">
        <h2 className="display-5 mb-3 text-primary">{"Let's Connect"}</h2>
        <p className="text-light">
          I am always open to new opportunities and collaborations.
        </p>
        <Button as={Link} to="/contact" variant="outline-light" size="lg">
          Get In Touch
        </Button>
      </div>
    </Container>
  );
}

Home.propTypes = {
  projects: PropTypes.array,
  ProfileImage: PropTypes.string,
  techItems: PropTypes.array,
};
