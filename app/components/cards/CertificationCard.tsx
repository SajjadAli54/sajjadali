"use client";

import Card from "react-bootstrap/Card";

interface Certification {
  src?: string; // Optional for PDFs
  alt: string;
  url?: string;
}

const CertificationCard: React.FC<{
  certification: Certification;
  className?: string;
}> = ({ certification, className = "" }) => {
  const isPdf = certification.url?.endsWith(".pdf");

  return (
    <Card
      className={`h-100 mb-3 glassmorphism ${className}`}
      style={{ overflow: "hidden" }}
    >
      {/* Embed PDF or Show Image */}
      {isPdf ? (
        <iframe
          src={certification.url}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "contain",
            border: "none",
          }}
          title={certification.alt}
        ></iframe>
      ) : (
        <Card.Img
          src={certification.src || "https://via.placeholder.com/300"}
          alt={certification.alt}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "180px",
            objectPosition: "center",
            OObjectFit: "contain",
            maxHeight: "250px",
          }}
          className="card-img-top"
        />
      )}

      {/* Certification Title */}
      <Card.Body className="d-flex flex-column align-items-center bg-transparent">
        <Card.Title className="text-center">{certification.alt}</Card.Title>
      </Card.Body>

      {/* Footer with View Certification Link */}
      {certification.url && (
        <Card.Footer className="text-center bg-transparent">
          <a
            href={certification.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Open PDF in New Tab
          </a>
        </Card.Footer>
      )}
    </Card>
  );
};

export default CertificationCard;
