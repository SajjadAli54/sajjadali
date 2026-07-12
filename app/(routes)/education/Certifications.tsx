import { motion } from "framer-motion";
import CertificationCard from "@/app/components/cards/CertificationCard";
import { certifications } from "@data/certifications";

export const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="certifications-shell py-5 glass-panel">
      <motion.h2
        className="text-gradient text-center mb-5 display-5 fw-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Certifications & Credentials
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <div className="certification-list">
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants} className="certification-item">
              <CertificationCard certification={cert} className="h-100" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        .certifications-shell {
          background: var(--card-bg);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          width: 100%;
          padding: 2rem 2rem 2.5rem;
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .certification-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 900px) {
          .certification-list {
            grid-template-columns: 1fr 1fr;
          }
        }

        .certification-item {
          min-height: 100%;
        }
      `}</style>
    </div>
  );
};
