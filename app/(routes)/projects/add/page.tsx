"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  Container,
  Form as BootstrapForm,
  Alert,
  Spinner,
  Card,
} from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { MultiValue } from "react-select";

import * as Yup from "yup";
import { useRouter } from "next/navigation";

import { Project } from "@types";
import { TopicOption } from "@types";

import { createProject } from "@/app/services/projectService";
import { useSelector } from "react-redux";
import { selectUser } from "@/app/redux/slices/admin";
import IllegalPage from "../IllegalPage";
import { routes } from "@/app/data/routes";

const ProjectSchema = Yup.object({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title too long"),
  description: Yup.string().min(
    10,
    "Description must be at least 10 characters"
  ),
  image: Yup.string().url("Invalid Image URL"),
  language: Yup.string().min(2, "Language must be specified"),
  topics: Yup.array(Yup.string()).min(1, "At least one topic is required"),
  clone_url: Yup.string().url("Invalid URL").optional(),
  live: Yup.string().url("Invalid URL").optional(),
});

const topicOptions: TopicOption[] = [
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "prisma", label: "Prisma" },
  { value: "graphql", label: "GraphQL" },
  { value: "bootstrap", label: "Bootstrap" },
  { value: "sqlite", label: "SQLite" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "express", label: "Express.js" },
];

export default function ProjectForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [imagePreview, setImagePreview] = useState<string>("");

  const user = useSelector(selectUser);
  const router = useRouter();

  if (!user) {
    return <IllegalPage />;
  }

  const handleSubmit = async (values: Project) => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const res = await createProject(values);
    if (!res) {
      setErrorMessage("Failed to add project. Please try again.");
      setLoading(false);
      return;
    }
    setSuccessMessage("Project added successfully!");

    setTimeout(() => {
      router.push(routes.projects);
      setSelectedTopics([]);
    }, 1500);
  };

  return (
    <Container className="animate__animated animate__fadeIn">
      <h2 className="text-center text-primary mb-4 fw-bold">Add New Project</h2>

      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      <Formik
        initialValues={{
          title: "",
          description: "",
          language: "",
          topics: [],
          clone_url: "",
          live: "",
          image: "",
        }}
        validationSchema={ProjectSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="p-4 border rounded bg-light shadow-lg">
            <div className="row">
              <div className="col-md-8">
                {/* Title */}
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Title</BootstrapForm.Label>
                  <Field
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Enter project title"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                {/* Description */}
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Description</BootstrapForm.Label>
                  <Field
                    as="textarea"
                    name="description"
                    className="form-control"
                    rows={3}
                    placeholder="Describe your project"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                {/* Language */}
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>
                    Programming Language
                  </BootstrapForm.Label>
                  <Field
                    type="text"
                    name="language"
                    className="form-control"
                    placeholder="E.g., JavaScript, Python"
                  />
                  <ErrorMessage
                    name="language"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                {/* Topics (React-Select) */}
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>
                    Topics (Select or Add Custom)
                  </BootstrapForm.Label>
                  <CreatableSelect
                    isMulti
                    closeMenuOnSelect={false}
                    options={topicOptions}
                    value={selectedTopics}
                    onChange={(selected: MultiValue<TopicOption>) => {
                      setSelectedTopics(selected);
                      setFieldValue(
                        "topics",
                        selected.map((topic) => topic.value)
                      );
                    }}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="Select topics..."
                  />
                  <ErrorMessage
                    name="topics"
                    component="div"
                    className="text-danger mt-1"
                  />
                </BootstrapForm.Group>

                {/* GitHub Repo URL */}
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>
                    GitHub Repository URL
                  </BootstrapForm.Label>
                  <Field
                    type="text"
                    name="clone_url"
                    className="form-control"
                    placeholder="Enter repo URL (optional)"
                  />
                  <ErrorMessage
                    name="clone_url"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                {/* Live Demo URL */}
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Live Project URL</BootstrapForm.Label>
                  <Field
                    type="text"
                    name="live"
                    className="form-control"
                    placeholder="Enter live project URL (optional)"
                  />
                  <ErrorMessage
                    name="live"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                {/* Image URL */}
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Project Image URL</BootstrapForm.Label>
                  <Field
                    type="text"
                    name="image"
                    className="form-control"
                    placeholder="Enter image URL"
                    onChange={(e) => {
                      const url = e.target.value;
                      setFieldValue("image", url);
                      setImagePreview(url);
                    }}
                  />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>
              </div>

              {/* Image Preview */}
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                {imagePreview ? (
                  <Card
                    className="shadow-sm"
                    style={{ width: "100%", maxWidth: "300px" }}
                  >
                    <Card.Img
                      variant="top"
                      src={imagePreview}
                      alt="Project Image Preview"
                      className="rounded"
                    />
                  </Card>
                ) : (
                  <p className="text-muted">No image preview available</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting || loading}
              >
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Submit Project"
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
