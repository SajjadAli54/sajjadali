"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiCalendar, FiArrowRight, FiBriefcase } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Tags from "@components/Tags";
import { calculateExperience } from "@utils/index";

interface Props {
  type: string;
  title: string;
  subtitle: string;
  institutionOrCompany: string;
  institutionOrCompanyUrl?: string;
  startDate: string;
  endDate?: string;
  achievementsOrDuties?: string[];
  tags?: string[];
  image?: string;
  icon?: React.ReactNode;
}

function ExperienceCard({
  type,
  title,
  subtitle,
  institutionOrCompany,
  institutionOrCompanyUrl = "#",
  startDate,
  endDate,
  achievementsOrDuties = [],
  tags = [],
  image = "/placeholder.png",
  icon = <FiBriefcase />,
}: Props) {
  const isJob = type === "job";
  const experience = isJob ? calculateExperience(startDate, endDate!) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <Card className="glass-card border-0 overflow-hidden shadow-lg mb-4">
        <div className="row g-0">
          <div className="col-md-8 p-4 d-flex flex-column">
            <Card.Header className="bg-transparent border-0 p-0">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-wrapper bg-primary">{icon}</div>
                  <Card.Title className="text-gradient mb-0">
                    {title}
                  </Card.Title>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="date-badge d-flex align-items-center gap-2"
                >
                  <FiCalendar />
                  {new Date(startDate).toString()} — {new Date(endDate!).toString() || "Present"}
                </motion.div>
              </div>

              <Card.Subtitle className="mb-3">
                <Link
                  href={institutionOrCompanyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-link d-inline-flex align-items-center gap-2"
                >
                  {institutionOrCompany}
                  <FiArrowRight className="link-arrow" />
                </Link>
              </Card.Subtitle>
            </Card.Header>

            <Card.Body className="p-0">
              <Card.Text className="text-muted mb-3">{subtitle}</Card.Text>

              {isJob && experience && (
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Experience</span>
                    <span className="text-primary">{experience}</span>
                  </div>
                  <div className="progress-bar-container">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>
              )}

              <div className="achievements-list mb-4">
                {achievementsOrDuties.map((item, index) => (
                  <motion.div
                    key={index}
                    className="d-flex align-items-start gap-3 mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bullet-point"></div>
                    <Card.Text className="mb-0">{item}</Card.Text>
                  </motion.div>
                ))}
              </div>

              {tags.length > 0 && <Tags tags={tags} className="mt-auto" />}
            </Card.Body>
          </div>

          <div className="col-md-4 image-container">
            <Image
              src={image}
              alt={title}
              className="object-fit-cover h-100 w-100"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.png";
              }}
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </Card>

      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .text-gradient {
          background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .date-badge {
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-weight: 500;
        }

        .company-link {
          color: #4f46e5;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .company-link:hover {
          color: #9333ea;
          transform: translateX(5px);
        }

        .link-arrow {
          transition: transform 0.3s ease;
        }

        .company-link:hover .link-arrow {
          transform: translateX(3px);
        }

        .progress-bar-container {
          height: 6px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          border-radius: 3px;
        }

        .bullet-point {
          width: 12px;
          height: 12px;
          background: #6366f1;
          border-radius: 50%;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .image-container {
          position: relative;
          min-height: 300px;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.1));
        }
      `}</style>
    </motion.div>
  );
}

export default ExperienceCard;
