import { motion } from "framer-motion";
import CertificationCard from "@/app/components/cards/CertificationCard";
import { certifications } from "@data/certifications";
import { Container, Row, Col } from "react-bootstrap";

export const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container className="py-5 glass-container rounded-4">
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
        <Row className="g-4 justify-content-center">
          {certifications.map((cert, index) => (
            <Col
              key={index}
              xl={3}
              lg={4}
              md={6}
              className="d-flex align-items-stretch"
            >
              <motion.div variants={itemVariants} className="w-100 h-100">
                <CertificationCard certification={cert} className="h-100" />
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>

      <style jsx global>{`
        .glass-container {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .text-gradient {
          background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 1rem;
        }

        @media (max-width: 768px) {
          .certifications-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Container>
  );
};
