import React from "react";

import { Container } from "react-bootstrap";

function IllegalPage() {
  return (
    <Container className="my-5 animate__animated animate__fadeIn">
      <h2 className="text-center text-primary mb-4 fw-bold">
        You do not have permission to this page! This is a private page for
        admin only.
      </h2>
    </Container>
  );
}

export default IllegalPage;
