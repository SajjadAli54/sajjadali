import ExperienceCard from "../components/ExperienceCard";

import { jobs } from "../data/jobs";

function Experience() {
  return (
    <div>
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
    </div>
  );
}

export default Experience;
