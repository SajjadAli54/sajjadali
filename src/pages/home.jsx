import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { GoStack } from "react-icons/go";
import { AnimatedText } from "animated-backgrounds";

import TechStack from "../components/stack";

import Projects from "../pages/projects";
import Container from "../components/common/container";

export default function Home({ projects, ProfileImage, techItems }) {
  return (
    <Container>
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">
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
          <p className="lead mb-4 bg-secondary bg-opacity-25 card text-light">
            Building seamless digital experiences across Web, Mobile, and
            Desktop. Passionate Full-Stack Developer turning complex problems
            into elegant solutions.
          </p>
          <Link to="/projects" className="btn btn-primary btn-lg m-2">
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg m-2">
            Contact Me
          </Link>
        </div>
        <div className="col-lg-6 text-center position-relative">
          <img
            id="myImage"
            className="img-fluid rounded-circle mb-4 mt-4"
            src={ProfileImage}
            alt="Sajjad Ali"
          />
        </div>
      </div>
      <hr className="my-1 text-light" />
      <div className="text-center mb-5">
        <h2 className="display-5 text-primary">
          <GoStack className="text-warning" /> Tech Stack
        </h2>
        <TechStack techItems={techItems} />
      </div>

      <Projects projects={projects} size={3} />

      <div id="contact" className="text-center">
        <h2 className="display-5 mb-3">{"Let's Connect"}</h2>
        <p className="lead">
          I am always open to new opportunities and collaborations.
        </p>
        <Link to="/contact" className="btn btn-outline-light btn-lg">
          Get In Touch
        </Link>
      </div>
    </Container>
  );
}

Home.propTypes = {
  projects: PropTypes.array,
  ProfileImage: PropTypes.string,
  techItems: PropTypes.array,
};
