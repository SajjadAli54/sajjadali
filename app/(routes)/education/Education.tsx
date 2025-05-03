import ExperienceCard from "@components/ExperienceCard";
import useMediaQuery from "@hooks/useMediaQuery";
import Card from "@components/Card";

import { education } from "@data/education";

export const Education = () => {
  const isMobile = useMediaQuery(); // Mobile detection

  type Type = (typeof education)[number];

  const renderCard = (job: Type, index: number) => (
    <Card
      key={index}
      image={job.image}
      title={job.degree}
      subtitle={job.institution}
      description={job.description}
      tags={job.tags}
      companyUrl={job.institutionUrl}
      className="mb-3 px-3" // Margin-bottom and padding for mobile
    />
  );

  if (isMobile) {
    return (
      <div className="container py-5">
        <h3 className="text-center mb-4 fw-bold">My Professional Journey</h3>
        <div className="d-flex flex-column gap-4">
          {education.map((edu, index) => renderCard(edu, index))}
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center">
      {education.map((edu, index) => (
        <ExperienceCard
          key={index}
          type="education"
          title={edu.degree}
          image={edu.image}
          institutionOrCompany={edu.institution}
          institutionOrCompanyUrl={edu.institutionUrl}
          startDate={edu.startDate}
          endDate={edu.endDate}
          subtitle={edu.description}
          achievementsOrDuties={edu.achievements}
          tags={edu.tags}
        />
      ))}
    </div>
  );
};
