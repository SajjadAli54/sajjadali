import React from "react";
import JobCard from "../components/job-card";
import Container from "../components/container";

import { jobs } from "../data/jobs";

function Jobs() {
  return (
    <Container>
      <h2 className="text-center text-primary mb-4 display-4 fw-bold">
        🌟 Experience
      </h2>
      <p className="text-center mb-5 lead text-muted">
        Here are some of the exciting roles I've had, where I've grown my skills
        and contributed to impactful projects.
      </p>
      <div className="d-flex flex-column align-items-stretch gap-4">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </Container>
  );
}

export default Jobs;
