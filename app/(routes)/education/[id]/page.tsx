"use client";

import { education } from "@/app/data/education";
import { useParams } from "next/navigation";
import { FaCalendarAlt, FaMapMarkerAlt, FaRocket } from "react-icons/fa";
import { motion, useAnimate } from "framer-motion";
import Tags from "@/app/components/Tags";
import BackLink from "@/app/components/BackLink";

import React from "react";

export default EducationPage;

function EducationPage() {
  const params = useParams();
  const edu = education[Number(params.id)];
  const scope = useAnimate()[0];

  if (!edu) {
    return (
      <section className="not-found-shell py-5 text-center">
        <h3 className="text-danger">Education item not found</h3>
        <BackLink link="/education" page="Education" />
      </section>
    );
  }

  return (
    <section className="education-detail-shell bg-surface-soft py-5">
      <div className="education-detail-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="education-hero"
        >
          <div className="education-hero-meta">
            <div className="image-wrapper position-relative">
              <img
                src={edu.image || "/placeholder.png"}
                alt={edu.degree}
                className="company-logo"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.png";
                }}
              />
              <div className="gradient-border"></div>
            </div>

            <div className="education-hero-copy">
              <h2 className="fw-bold mb-3 text-gradient">{edu.degree}</h2>
              <p className="text-muted mb-1">
                <FaMapMarkerAlt className="me-2 text-primary" />
                <a
                  href={edu.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none company-link"
                >
                  {edu.institution}
                </a>
              </p>
              <p className="text-muted mb-0">
                <FaCalendarAlt className="me-2 text-primary" />
                <span className="date-text">
                  {edu.startDate} — {edu.endDate || "Present"}
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Role Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="glass-card p-4 mb-4">
            <h5 className="fw-semibold mb-3 section-title">
              <FaRocket className="me-2 text-purple" />
              Role Overview
            </h5>
            <p className="text-secondary mb-0 role-description">
              {edu.description}
            </p>
          </div>
        </motion.div>

        {/* Key Contributions */}
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="glass-card p-4 mb-4">
            <h5 className="fw-semibold mb-3 section-title">
              Key Contributions
            </h5>
            <ul className="contribution-list">
              {edu.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  className="mb-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                >
                  <div className="d-flex align-items-start">
                    <span className="bullet-icon me-3">
                      <div className="bullet-gradient"></div>
                    </span>
                    <span className="duty-text">{achievement}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Tech Stack */}
        {edu.tags?.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="glass-card p-4 mb-4">
              <h5 className="fw-semibold mb-3 section-title">Tech Stack</h5>
              <Tags tags={edu.tags} />
            </div>
          </motion.div>
        )}

        {/* Back Button */}
        <BackLink link="/education" page="Education" />
      </div>

      <style jsx global>{`
        .education-detail-shell {
          width: min(1140px, 100%);
          margin: 0 auto;
        }

        .education-detail-inner {
          padding: 0 1.5rem;
        }

        .education-hero {
          margin-bottom: 2rem;
        }

        .education-hero-meta {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 2rem;
          align-items: center;
        }

        .education-hero-copy {
          min-width: 0;
        }

        .company-logo {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid var(--surface);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          display: block;
        }

        .glass-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          backdrop-filter: blur(16px);
          border-radius: 1.25rem;
          box-shadow: var(--shadow);
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .company-link {
          color: var(--primary) !important;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .company-link:hover {
          color: var(--accent) !important;
          text-decoration: underline;
        }

        .section-title {
          color: var(--foreground);
          font-size: 1.25rem;
          letter-spacing: -0.02em;
        }

        .contribution-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contribution-list .bullet-gradient {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contribution-list .bullet-icon {
          position: relative;
        }

        .contribution-list .bullet-icon::after {
          content: "";
          position: absolute;
          width: 28px;
          height: 28px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 50%;
          top: -2px;
          left: -2px;
          z-index: -1;
        }

        .duty-text {
          color: var(--muted);
          line-height: 1.75;
        }

        .back-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.12),
            transparent
          );
          transition: 0.6s;
        }

        .back-button:hover::before {
          left: 100%;
        }

        .gradient-border {
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 50%;
          z-index: -1;
          animation: rotate 6s linear infinite;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .education-hero-meta {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .education-hero-copy {
            align-items: center;
          }

          .company-logo {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
