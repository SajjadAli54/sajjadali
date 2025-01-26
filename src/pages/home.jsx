import React from "react";
import { Link } from "react-router-dom"; // If you're using react-router
import TechStack from "../components/stack";

import Projects from "../pages/projects"; // Assuming you have a 'Projects' component
import Page from "../components/container";

import ProfileImage from "../assets/picofme.png";

export default function Home() {
  return (
    <Page>
      {/* Hero Section */}
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">
            Hi, I'm Sajjad Ali 👋
          </h1>
          <p className="lead mb-4 animate__fadeIn">
            Software Developer specializing in multiple stacks including Web,
            Mobile, Desktop. I love solving challenging problems and creating
            seamless user experiences.
          </p>
          <Link to="/projects" className="btn btn-primary btn-lg m-2">
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg m-2">
            Contact Me
          </Link>
        </div>
        <div className="col-lg-6 text-center">
          <img
            id="myImage"
            src={ProfileImage} // Add your image here
            style={{ maxWidth: "300px", backgroundColor: "transparent" }}
            height={"300px"}
            alt="Sajjad Ali"
            className="img-fluid rounded-circle mb-4 mt-4 animate__animated animate__fadeIn"
          />
        </div>
      </div>
      <hr className="my-1 text-light" />
      {/* Tech Stack Section */}
      <div className="text-center mb-5">
        <h2 className="display-5">Tech Stack</h2>
        <TechStack />
      </div>
      {/* Projects Section */}
      <Projects /> {/* This should display your project cards */}
      {/* Contact Section */}
      <div id="contact" className="text-center">
        <h2 className="display-5 mb-3">Let's Connect</h2>
        <p className="lead">
          I'm always open to new opportunities and collaborations.
        </p>
        <Link to="/contact" className="btn btn-outline-light btn-lg">
          Get In Touch
        </Link>
      </div>
    </Page>
  );
}
