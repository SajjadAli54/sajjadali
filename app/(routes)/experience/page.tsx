"use client";

import { jobs } from "@data/jobs";
import styles from "./Experience.module.css";
import MyCard from "@/app/components/Card";
import { useMediaQuery } from "@/app/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiBriefcase } from "react-icons/fi";

function Experience() {
  const isMobile = useMediaQuery();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  type JobType = (typeof jobs)[number];

  const renderCard = (job: JobType, index: number) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
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
    </motion.div>
  );

  if (isMobile) {
    return (
      <div className="container py-5">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gradient text-center mb-4 fw-bold display-6"
        >
          Professional Journey
        </motion.h3>
        <div className="d-flex flex-column gap-4">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {renderCard(job, index)}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`container py-5 ${styles.timelineContainer}`}>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gradient text-center mb-5 fw-bold display-4 position-relative"
      >
        <div className={styles.titleLine}></div>
        Professional Journey
        <div className={styles.titleLine}></div>
      </motion.h3>

      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>

        {jobs.map((job, index) => (
          <motion.div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.dateWrapper}>
              <motion.div className={styles.date} whileHover={{ scale: 1.05 }}>
                <FiBriefcase className={styles.dateIcon} />
                {job.startDate} — {job.endDate || "Present"}
              </motion.div>
              <div className={styles.connector}></div>
            </div>

            <motion.div
              className={styles.cardWrapper}
              whileHover={{ scale: 1.02 }}
            >
              {renderCard(job, index)}
              <div className={styles.timelineDot}></div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
