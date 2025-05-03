"use client";

import ExperienceCard from "@/app/components/ExperienceCard";
import { education } from "@/app/data/education";
import { useParams } from "next/navigation";
import React from "react";

function EducationPage() {
  const params = useParams();
  const id = Number(params.id);

  const edu = education[id];
  return (
    <ExperienceCard
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
  );
}

export default EducationPage;
