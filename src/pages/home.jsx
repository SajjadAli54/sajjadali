import { Link } from "react-router-dom"; // If you're using react-router
import { GoStack } from "react-icons/go";

import TechStack from "../components/stack";

import Projects from "../pages/projects"; // Assuming you have a 'Projects' component
import Container from "../components/container";

// import { BGCOLOR } from "../utils/utils";

import ProfileImage from "../assets/picofme.png";
import { AnimatedText } from "animated-backgrounds";

export default function Home() {
  return (
    <Container>
      {/* Hero Section */}
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">
            Hi, I am{" "}
            <AnimatedText
              text="Sajjad Ali"
              // effect="typewriter"
              effect="rainbow"
              config={{
                speed: 100,
                loop: true,
                delay: 1000,
                color: "#ff0000",
              }}
            />
          </h1>
          <p className="lead mb-4 bg-secondary bg-opacity-25 card text-light">
            I am a passionate full-stack Software Developer specializing in
            multiple stacks including Web, Mobile, Desktop. I love solving
            challenging problems and creating seamless user experiences.
          </p>
          <Link to="/projects" className="btn btn-primary btn-lg m-2">
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg m-2">
            Contact Me
          </Link>
        </div>
        <div className="col-lg-6 text-center bg-transparent">
          <img
            id="myImage"
            src={ProfileImage}
            style={{ maxWidth: "300px" }}
            height={"300px"}
            alt="Sajjad Ali"
            className="img-fluid rounded-circle mb-4 mt-4 animate__animated animate__fadeIn"
          />
        </div>
      </div>
      <hr className="my-1 text-light" />
      {/* Tech Stack Section */}
      <div className="text-center mb-5">
        <h2 className="display-5 text-primary">
          <GoStack className="text-warning" /> Tech Stack
        </h2>
        <TechStack />
      </div>
      {/* Projects Section */}
      <Projects /> {/* This should display your project cards */}
      {/* Contact Section */}
      <div id="contact" className="text-center">
        <h2 className="display-5 mb-3">{"Let's Connect"}</h2>
        <p className="lead">
          I'm always open to new opportunities and collaborations.
        </p>
        <Link to="/contact" className="btn btn-outline-light btn-lg">
          Get In Touch
        </Link>
      </div>
    </Container>
  );
}
