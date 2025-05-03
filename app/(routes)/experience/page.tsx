"use client";
import ExperienceCard from "@components/ExperienceCard";
import { jobs } from "@data/jobs";
import styles from "./Experience.module.css"; // You'll create this CSS module
import MyCard from "@/app/components/Card";
import { FaBuilding } from "react-icons/fa";
import { Fa42Group } from "react-icons/fa6";

function Experience() {
  return (
    <div className={`container ${styles.timelineContainer}`}>
      <div className={styles.timeline}>
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <MyCard
              image={job.image}
              title={job.title}
              description={job.subtitle}
              tags={job.tags}
              links={[
                { url: job.companyUrl, label: FaBuilding },
                { url: `/experience/${index}`, label: Fa42Group },
              ]}
            />
            {/* <ExperienceCard
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
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
