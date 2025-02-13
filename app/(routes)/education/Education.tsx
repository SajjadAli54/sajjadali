import { FaUniversity } from "react-icons/fa";
import ExperienceCard from "@components/ExperienceCard";
import useMediaQuery from "@hooks/useMediaQuery";
import Card from "@components/Card";

import { education } from "@data/education";

export const Education = () => {
  const isMobile = useMediaQuery(); // Mobile detection

  return (
    <div className="d-flex flex-column align-items-center">
      {education.map((edu, index) =>
        isMobile ? (
          <Card
            key={index}
            image={edu.image}
            title={`${edu.degree}`}
            description={edu.description}
            links={[{ url: edu.institutionUrl, label: FaUniversity }]}
            tags={edu.tags}
            className="mb-3 px-3" // Margin-bottom and padding for mobile
          />
        ) : (
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
        )
      )}
    </div>
  );
};
