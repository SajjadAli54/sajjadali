import PropTypes from "prop-types";
import Container from "./container";
import Tags from "./tags";
import { calculateExperience } from "../utils/utils";

function ExperienceCard({
  type, // "education" or "job"
  title,
  institutionOrCompany,
  institutionOrCompanyUrl,
  startDate,
  endDate,
  subtitle,
  description,
  achievementsOrDuties = [],
  tags = [],
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_Upz1wUzZ05xdUafznHl79IbWrjzHk6cfA&s",
}) {
  const isJob = type === "job";
  const experience = isJob ? calculateExperience(startDate, endDate) : null;

  return (
    <Container className="card bg-transparent shadow-sm py-0">
      <div className="row g-0 bg-transparent">
        <div className="col-md-8">
          <div className="card-body bg-transparent">
            {/* Title & Date */}
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="card-title mb-0 text-light">{title}</h4>
              <small className="text-light">
                {`${startDate} - ${endDate || "Present"}`}
              </small>
            </div>

            {/* Institution / Company */}
            <p className="card-subtitle text-muted mb-2">
              <a
                href={institutionOrCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary fw-bold"
              >
                {institutionOrCompany}
              </a>
            </p>

            {/* Description or Subtitle */}
            {subtitle && <p className="text-secondary mb-3">{subtitle}</p>}
            {description && (
              <p className="text-secondary mb-3">{description}</p>
            )}

            {/* Experience (for Job) */}
            {isJob && (
              <p className="text-success mb-2">
                <strong>Experience:</strong> {experience}
              </p>
            )}

            {/* Achievements (Education) or Duties (Job) */}
            {achievementsOrDuties.length > 0 && (
              <ul className="list-unstyled">
                {achievementsOrDuties.map((item, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <span
                      className={`me-2 ${
                        isJob ? "text-primary" : "text-success"
                      }`}
                      style={{ fontSize: "1.2rem" }}
                    >
                      •
                    </span>
                    <span className="card-text text-light">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tags */}
            <Tags tags={tags} />
          </div>
        </div>

        {/* Image */}
        {image && (
          <div className="col-md-4 d-flex align-items-center">
            <img
              src={image}
              alt={title}
              className="img-fluid rounded-end w-100 h-100 object-cover bg-transparent shadow-sm"
              style={{
                objectFit: "cover",
                height: "70%",
              }}
            />
          </div>
        )}
      </div>
    </Container>
  );
}

ExperienceCard.propTypes = {
  type: PropTypes.oneOf(["education", "job"]).isRequired,
  title: PropTypes.string.isRequired,
  institutionOrCompany: PropTypes.string.isRequired,
  institutionOrCompanyUrl: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  achievementsOrDuties: PropTypes.array,
  tags: PropTypes.array,
  image: PropTypes.string,
};

export default ExperienceCard;
