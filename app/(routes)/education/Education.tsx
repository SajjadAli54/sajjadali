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
      <div className="container py-5">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gradient text-center mb-4 fw-bold display-6"
        >
          Academic Journey
        </motion.h3>
        <div className="d-flex flex-column gap-4">
          {education.map((edu, index) => renderCard(edu, index))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5 position-relative">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gradient text-center mb-5 fw-bold display-4 position-relative"
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
                <div className="duration-badge">{edu.endDate}</div>
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
        .text-gradient {
          background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-line {
          position: absolute;
          top: 50%;
          width: 25%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #6366f1, transparent);
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
          background: linear-gradient(
            180deg,
            #6366f1 0%,
            #a855f7 50%,
            #6366f1 100%
          );
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .timeline-item {
          width: 100%;
          margin: 40px 0;
          display: flex;
          justify-content: space-between;
          position: relative;
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
          background: rgba(99, 102, 241, 0.1);
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
          color: #4f46e5;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          position: relative;
        }

        .date-icon {
          font-size: 1.4rem;
          color: #4f46e5;
        }

        .duration-badge {
          position: absolute;
          bottom: -8px;
          right: -8px;
          background: #4f46e5;
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
          background: #6366f1;
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
          background: #6366f1;
          border: 4px solid white;
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
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};
