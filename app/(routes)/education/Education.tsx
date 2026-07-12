import { motion } from "framer-motion";
import useMediaQuery from "@hooks/useMediaQuery";
import Card from "@components/Card";
import { education } from "@data/education";
import { FiCalendar } from "react-icons/fi";

export const Education = () => {
  const isMobile = useMediaQuery();

  type EducationType = (typeof education)[number];

  const renderCard = (edu: EducationType, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ delay: index * 0.1 }}
      className="education-card-wrapper"
    >
      <Card
        image={edu.image}
        title={edu.degree}
        subtitle={edu.institution}
        description={edu.description}
        tags={edu.tags}
        url={`/education/${index}`}
        companyUrl={edu.institutionUrl}
        className="mb-3 px-3 glass-card"
      />
    </motion.div>
  );

  if (isMobile) {
    return (
      <section className="education-section py-5">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gradient education-heading mb-4 fw-bold display-6"
        >
          Academic Journey
        </motion.h3>

        <div className="education-list">
          {education.map((edu, index) => renderCard(edu, index))}
        </div>
      </section>
    );
  }

  return (
    <section className="education-section py-5">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gradient education-heading mb-5 fw-bold display-4 position-relative"
      >
        <div className="title-line"></div>
        Academic Journey
        <div className="title-line"></div>
      </motion.h3>

      <div className="education-timeline">
        <div className="timeline-line"></div>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="date-wrapper">
              <motion.div className="date-box" whileHover={{ scale: 1.05 }}>
                <FiCalendar className="date-icon" />
                {edu.startDate} — {edu.endDate || "Present"}
                <div className="duration-badge">{edu.endDate || "Present"}</div>
              </motion.div>
              <div className="timeline-connector"></div>
            </div>

            <motion.div className="card-wrapper" whileHover={{ scale: 1.02 }}>
              {renderCard(edu, index)}
              <div className="timeline-dot"></div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        .education-section {
          max-width: 1140px;
          margin: 0 auto;
          position: relative;
          width: min(100%, 1140px);
        }

        .education-heading {
          text-align: center;
          margin: 0 auto 3rem;
          max-width: 760px;
        }

        .education-list {
          display: grid;
          gap: 1.5rem;
        }

        .education-card-wrapper {
          width: 100%;
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-line {
          position: absolute;
          top: 50%;
          width: 25%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
        }

        .title-line:first-of-type {
          left: 0;
        }

        .title-line:last-of-type {
          right: 0;
        }

        .education-timeline {
          position: relative;
          padding: 50px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, var(--primary) 0%, var(--accent) 50%, var(--primary) 100%);
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .timeline-item {
          width: 100%;
          margin: 40px 0;
          display: flex;
          justify-content: space-between;
          position: relative;
          gap: 1.5rem;
        }

        .timeline-item.left {
          flex-direction: row-reverse;
        }

        .date-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          position: relative;
          padding: 0 30px;
        }

        .date-box {
          background: var(--surface-soft);
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
          color: var(--foreground);
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          position: relative;
          border: 1px solid var(--border);
        }

        .date-icon {
          font-size: 1.4rem;
          color: var(--primary);
        }

        .duration-badge {
          position: absolute;
          bottom: -8px;
          right: -8px;
          background: var(--primary);
          color: white;
          padding: 4px 12px;
          border-radius: 1rem;
          font-size: 0.8rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .timeline-connector {
          position: absolute;
          width: 40px;
          height: 2px;
          background: var(--primary);
        }

        .timeline-item.left .timeline-connector {
          left: -20px;
        }

        .timeline-item:not(.left) .timeline-connector {
          right: -20px;
        }

        .card-wrapper {
          flex: 1;
          max-width: 600px;
          position: relative;
          transition: transform 0.3s ease;
        }

        .timeline-dot {
          position: absolute;
          width: 20px;
          height: 20px;
          background: var(--primary);
          border: 4px solid var(--surface);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
        }

        .timeline-item.left .timeline-dot {
          right: -45px;
        }

        .timeline-item:not(.left) .timeline-dot {
          left: -45px;
        }

        .glass-card {
          background: var(--card-bg);
          backdrop-filter: blur(16px);
          border-radius: 1.5rem;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          color: var(--foreground);
        }

        @media (max-width: 992px) {
          .timeline-item,
          .date-wrapper {
            flex-direction: column;
            align-items: stretch;
          }

          .date-wrapper {
            padding: 0;
          }

          .timeline-item.left,
          .timeline-item:not(.left) {
            flex-direction: column;
          }

          .timeline-item.left .timeline-dot,
          .timeline-item:not(.left) .timeline-dot {
            left: 0;
            right: auto;
            position: relative;
            transform: translateY(0);
            margin: 1rem 0 0;
          }

          .timeline-line {
            left: 10px;
          }

          .timeline-connector {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
