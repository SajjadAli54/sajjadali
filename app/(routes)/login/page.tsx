"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Button, Row, Col, Card, Alert } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setUser } from "@/app/redux/slices/admin";

interface Error {
  email?: string;
  password?: string;
}

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors]: [
    Error,
    React.Dispatch<React.SetStateAction<Error>>
  ] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.id]: "" }));
  };

  const validateForm = () => {
    const newErrors: Error = {};
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const email = formData.email.trim();
    const password = formData.password.trim();

    setLoading(true);
    setTimeout(() => {
      if (
        process.env.NEXT_PUBLIC_EMAIL == email &&
        process.env.NEXT_PUBLIC_PASSWORD == password
      ) {
        dispatch(setUser({ email }));
        router.push("/projects");
      } else {
        setErrorMessage("Invalid email or password.");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <Row className="w-100">
      <Col md={6} lg={4} className="mx-auto">
        <Card className="shadow-lg p-4 rounded">
          <Card.Body>
            <h3 className="text-center text-primary fw-bold">Login</h3>
            <p className="text-center text-muted">Sign in to your account</p>

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  <FaUser className="me-2" /> Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  placeholder="Enter your email"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  <FaLock className="me-2" /> Password
                </Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                  placeholder="Enter your password"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                type="submit"
                className="w-100"
                variant="primary"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
