"use client";

import { jobs } from "@data/jobs";
import styles from "./Experience.module.css";
import MyCard from "@/app/components/Card";
import { useMediaQuery } from "@/app/hooks";

function Experience() {
  const isMobile = useMediaQuery();

  type JobType = (typeof jobs)[number];

  const renderCard = (job: JobType, index: number) => (
    <MyCard
      key={index}
      url={`/experience/${index}`}
      image={job.image}
      title={job.title}
      subtitle={job.companyName}
      description={job.subtitle}
      tags={job.tags}
      companyUrl={job.companyUrl}
    />
  );

  if (isMobile) {
    return (
      <div className="container py-5">
        <h3 className="text-center mb-4 fw-bold">My Professional Journey</h3>
        <div className="d-flex flex-column gap-4">
          {jobs.map((job, index) => renderCard(job, index))}
        </div>
      </div>
    );
  }

  return (
    <div className={`container py-5 ${styles.timelineContainer}`}>
      <h3 className="text-center mb-5 fw-bold">My Professional Journey</h3>
      <div className={styles.timeline}>
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.date}>
              {job.startDate} - {job.endDate ? job.endDate : "Present"}
            </div>
            <div className={styles.cardWrapper}>{renderCard(job, index)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
