import React from "react";

import Jobs from "./jobs";
import EducationCard from "../components/edu-card";
import Education from "../components/education";
import TechStack from "../components/stack";

export default function Home() {
  return (
    <section
      id="about"
      className="py-5 bg-light animate__animated animate__fadeIn"
    >
      <div className="container">
        {/* Introduction */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3 animate__animated animate__fadeIn">
            Hi, I'm Sajjad Ali 👋
          </h1>
          <p className="lead text-muted mb-4">
            Software Developer specializing in Web Development, Data Science,
            and Machine Learning. I enjoy creating seamless user experiences and
            solving challenging problems.
          </p>
        </div>

        <hr className="my-5" />

        <TechStack />

        {/* Education */}
        <Education />

        {/* Jobs */}
        <Jobs />
      </div>
    </section>
  );
}
