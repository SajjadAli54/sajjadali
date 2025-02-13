"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoIosContact } from "react-icons/io";
import { FaEnvelope, FaPhone, FaRegUser, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Name is required"),
    email: Yup.string()
      .trim()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .trim()
      .matches(/^\d{10,15}$/, "Invalid phone number")
      .optional(),
    subject: Yup.string().trim().required("Subject is required"),
    message: Yup.string().trim().required("Message cannot be empty"),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    const mailtoLink = `mailto:imsajjadali54@gmail.com?subject=${encodeURIComponent(
      values.subject
    )}&body=${encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\n\nMessage:\n${values.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="text-center mb-4">
        <IoIosContact size={60} className="text-primary mb-2" />
        <h2 className="text-primary fw-bold">Contact Me</h2>
        <p className="text-muted">
          Have a question or project? Let&apos;s get in touch!
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card p-3 p-md-4 border-0 shadow-sm rounded">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ touched, errors }) => (
                <Form>
                  {/* Name Field */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">
                      <FaRegUser className="me-2" /> Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className={`form-control w-100 p-3 ${
                        touched.name && errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your name"
                    />
                    <ErrorMessage
                      component="div"
                      name="name"
                      className="invalid-feedback"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      <FaEnvelope className="me-2" /> Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control w-100 p-3 ${
                        touched.email && errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-semibold">
                      <FaPhone className="me-2" /> Phone (Optional)
                    </label>
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control w-100 p-3"
                      placeholder="Enter your phone number"
                    />
                    <ErrorMessage
                      component="div"
                      name="phone"
                      className="invalid-feedback"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-semibold">
                      📌 Subject
                    </label>
                    <Field
                      type="text"
                      id="subject"
                      name="subject"
                      className={`form-control w-100 p-3 ${
                        touched.subject && errors.subject ? "is-invalid" : ""
                      }`}
                      placeholder="Enter subject"
                    />
                    <ErrorMessage
                      component="div"
                      name="subject"
                      className="invalid-feedback"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-semibold">
                      ✏️ Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows={5}
                      className={`form-control w-100 p-3 ${
                        touched.message && errors.message ? "is-invalid" : ""
                      }`}
                      placeholder="Write your message here..."
                    />
                    <ErrorMessage
                      component="div"
                      name="message"
                      className="invalid-feedback"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg px-4 py-2 w-100"
                    >
                      <FaPaperPlane className="me-2" /> Send Message
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
