"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  Container,
  Form as BootstrapForm,
  Alert,
  Spinner,
  Image,
} from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { MultiValue } from "react-select";

import * as Yup from "yup";
import { useRouter, useParams } from "next/navigation";

import { Project, TopicOption } from "@types";
import { fetchProjectById, updateProject } from "@/app/services/projectService";
import { useSelector } from "react-redux";
import { selectUser } from "@/app/redux/slices/admin";
import IllegalPage from "../IllegalPage";
import Loader from "@/app/components/Loader";

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

export default function EditProjectForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [selectedTopics, setSelectedTopics]: [
    MultiValue<TopicOption> | undefined,
    Dispatch<SetStateAction<MultiValue<TopicOption> | undefined>>
  ] = useState();

  const [project, setProject] = useState<Project | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const user = useSelector(selectUser);
  const router = useRouter();
  const params = useParams();

  const id = params.id;

  useEffect(() => {
    if (!user) {
      router.push("/projects");
    }
  }, [user, router]);

  useEffect(() => {
    const getProject = async () => {
      try {
        if (!id) return;
        let valId;
        if (id instanceof Array) valId = parseInt(id[0]!);
        else valId = parseInt(id);
        const fetchedProject = await fetchProjectById(valId.toString());
        if (fetchedProject) {
          setProject(fetchedProject);
          setSelectedTopics(
            fetchedProject.topics.map((topic: string) => ({
              value: topic,
              label: topic,
            }))
          );
          setImagePreview(fetchedProject.image || "");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        setErrorMessage("Failed to load project details.");
      }
    };
    getProject();
  }, [id]);

  if (!user) {
    return <IllegalPage />;
  }

  if (!project) {
    return <Loader />;
  }

  const handleSubmit = async (values: Project) => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    console.log("Updated project data:", id, values);
    if (!id) return;
    let valId;
    if (id instanceof Array) valId = id[0]!;
    else valId = id;

    const res = await updateProject(valId, values);
    if (!res) {
      setLoading(false);
      setErrorMessage("Failed to update project. Please try again.");
      return;
    }
    setLoading(false);
    setSuccessMessage("Project updated successfully!");

    setTimeout(() => {
      router.push("/projects");
      setSelectedTopics([]);
    }, 2000);
  };

  return (
    <Container className="animate__animated animate__fadeIn">
      <h2 className="text-center text-primary mb-4 fw-bold">Edit Project</h2>

      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      <Formik
        initialValues={{
          title: project.title || "",
          description: project.description || "",
          language: project.language || "",
          topics: project.topics || [],
          clone_url: project.clone_url || "",
          live: project.live || "",
          image: project.image || "",
          createdAt: project.createdAt || "",
          updatedAt: project.updatedAt || "",
        }}
        validationSchema={ProjectSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="p-4 border rounded bg-light shadow">
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
              <BootstrapForm.Label>Programming Language</BootstrapForm.Label>
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

            {/* Topics */}
            <BootstrapForm.Group className="mb-3">
              <BootstrapForm.Label>Topics</BootstrapForm.Label>
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
              <BootstrapForm.Label>GitHub Repository URL</BootstrapForm.Label>
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

            {/* Image URL with Preview */}
            <BootstrapForm.Group className="mb-3">
              <BootstrapForm.Label>Project Image URL</BootstrapForm.Label>
              <Field
                type="text"
                name="image"
                className="form-control"
                placeholder="Enter image URL"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
              {imagePreview && (
                <div className="text-center mt-3">
                  <Image
                    src={imagePreview}
                    alt="Project Preview"
                    fluid
                    rounded
                    style={{ maxHeight: "200px", border: "1px solid #ccc" }}
                    onError={(e) =>
                      (e.currentTarget.src = "/fallback-image.png")
                    }
                  />
                </div>
              )}
            </BootstrapForm.Group>

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
                  "Update Project"
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
