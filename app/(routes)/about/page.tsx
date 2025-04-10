"use client";

import { Container, Row, Col, Card, Image } from "react-bootstrap";
import ContactSection from "./ContactSection";

export default function AboutPage() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center mb-5">
        <Col md={8} className="text-center">
          <h1 className="fw-bold mb-3">About Me</h1>
          <Image
            src="/ntnu.jpg"
            roundedCircle
            width={250}
            height={300}
            className="mb-3 shadow"
            alt="Profile"
          />
          <p className="lead">
            Since I lost track of time untangling business logic puzzles and
            building “just for fun” prototypes, {"I've"} been driven by a
            relentless curiosity and a passion for learning new things. I thrive
            when I can turn complex requirements into intuitive, reliable
            software.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <Card.Title className="fw-semibold mb-3">Current Role</Card.Title>
              <Card.Text>
                As a Full-Stack Developer at Badri Solutions, I architect and
                deliver data-intensive dashboards, interactive graph UIs, and
                robust backend services for clients across Saudi Arabia, Kuwait,
                UAE, and Qatar. My day-to-day toolbox includes Python,
                JavaScript, ReactJS, FastAPI, Django, and modern ML
                frameworks—always focused on performance and scalability.
              </Card.Text>
              <Card.Text>
                I also work closely with various departments such as Actuarial,
                IT, Managerial, and Sales, ensuring I stay updated on industry
                trends and contribute holistically to our {"team's"} success.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <Card.Title className="fw-semibold mb-3">
                Academic Journey
              </Card.Title>
              <Card.Text>
                My journey took flight during a fully funded semester at the
                Norwegian University of Science and Technology, where I
                collaborated on medical imaging research using advanced
                machine-learning techniques.
              </Card.Text>
              <Card.Text>
                Between lab sessions, I explored Oslo, Milan, Venice, Warsaw,
                Prague, and Vienna—gaining invaluable cross-cultural insights
                and sharpening my agile problem-solving skills.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <Card.Title className="fw-semibold mb-3">
                Projects & Leadership
              </Card.Title>
              <Card.Text>
                During my final year project, I led a team to build a
                Flutter-based 3D brain-study app—integrating Blender-designed
                models and delivering a polished Android experience for medical
                students.
              </Card.Text>
              <Card.Text>
                Whether crafting efficient APIs or optimizing ML pipelines, I
                bring humility, humor, and a {"hacker's"} spirit to every
                challenge.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <Card.Title className="fw-semibold mb-3">
                Hobbies & Passions
              </Card.Title>
              <Card.Text>
                When {"I'm"} not debugging or brainstorming, {"you'll"} find me
                traveling to new places, experimenting with new recipes, diving
                into a great novel—or even writing one myself.
              </Card.Text>
              <Card.Text>
                {"I'm"} working on an Urdu-language novel as a creative side
                project, which keeps my storytelling muscles sharp and reminds
                me that every line of code, like every line of prose, should
                engage and resonate.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ContactSection />
    </Container>
  );
}
