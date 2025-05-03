"use client";

import ExperienceCard from "@/app/components/ExperienceCard";
import { jobs } from "@/app/data/jobs";
import { useParams } from "next/navigation";
import React from "react";

function Job() {
  const params = useParams();
  const job = jobs[Number(params.id)];
  return (
    <ExperienceCard
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
  );
}

export default Job;
