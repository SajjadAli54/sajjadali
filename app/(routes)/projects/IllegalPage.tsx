import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import { useRouter } from "next/navigation";

function IllegalPage() {
  const router = useRouter();

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100 text-center animate__animated animate__fadeIn">
      <Image
        src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
        alt="Access Denied"
        className="mb-4"
        style={{ width: "150px", opacity: 0.8 }}
      />
      <h2 className="text-danger fw-bold">Access Denied</h2>
      <p className="text-muted mb-4" style={{ maxWidth: "500px" }}>
        Oops! You don't have permission to view this page. This area is
        restricted to admin users only.
      </p>
      <Button variant="primary" onClick={() => router.push("/")}>
        Return to Homepage
      </Button>
    </Container>
  );
}

export default IllegalPage;
