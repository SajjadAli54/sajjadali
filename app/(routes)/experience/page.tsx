"use client";

import { jobs } from "@data/jobs";
import styles from "./Experience.module.css"; // You'll create this CSS module
import MyCard from "@/app/components/Card";
import { FaBuilding, FaLink } from "react-icons/fa";
import { useMediaQuery } from "@/app/hooks";

function Experience() {
  const isMobile = useMediaQuery();
  if (isMobile) {
    return (
      <div className="container">
        {jobs.map((job, index) => (
          <MyCard
            key={index}
            image={job.image}
            title={job.title}
            description={job.subtitle}
            tags={job.tags}
            links={[
              { url: job.companyUrl, label: FaBuilding },
              { url: `/experience/${index}`, label: FaLink },
            ]}
          />
        ))}
      </div>
    );
  }

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
                { url: `/experience/${index}`, label: FaLink },
              ]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
