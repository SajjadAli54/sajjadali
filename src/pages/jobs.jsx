import Container from "../components/container";

import { jobs } from "../data/jobs";
import ExperienceCard from "../components/ExperienceCard";

function Jobs() {
  return (
    <Container>
      <h2 className="text-center text-primary mb-4 display-4 fw-bold">
        🌟 Experience
      </h2>
      <p className="text-center mb-5">
        Here are some of the exciting roles I have had, where I have grown my
        skills and contributed to impactful projects.
      </p>
      <div className="d-flex flex-column align-items-stretch gap-4">
        {jobs.map((job, index) => (
          <ExperienceCard
            key={index}
            type="job"
            title={job.title}
            image={job.image}
            institutionOrCompany={job.companyName}
            institutionOrCompanyUrl={job.companyUrl}
            startDate={job.startDate}
            endDate={job.endDate}
            subtitle={job.subtitle}
            achievementsOrDuties={job.duties}
            tags={job.tags}
          />
        ))}
      </div>
    </Container>
  );
}

export default Jobs;
