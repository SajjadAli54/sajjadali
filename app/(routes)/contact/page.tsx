"use client";

import React, { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { FaEnvelope, FaPhone, FaRegUser, FaPaperPlane } from "react-icons/fa";
import { Container } from "react-bootstrap";

import { Error } from "@/app/types";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors]: [
    Error,
    React.Dispatch<React.SetStateAction<Error>>
  ] = useState({});

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors: Error = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const mailtoLink = `mailto:imsajjadali54@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <Container className="py-5 animate__animated animate__fadeIn">
      <div className="text-center mb-5">
        <IoIosContact size={60} className="text-primary mb-2" />
        <h2 className="text-primary display-5 fw-bold">Contact Me</h2>
        <p className="text-muted">
          Have a question or project? Let&apos;s get in touch!
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card p-4 border-0 shadow-sm rounded">
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              action="/"
            >
              <input type="hidden" name="form-name" value="contact" />
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  <FaRegUser className="me-2" /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-control ${errors.name && "is-invalid"}`}
                  placeholder="Enter your name"
                  required
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  <FaEnvelope className="me-2" /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email && "is-invalid"}`}
                  placeholder="Enter your email"
                  required
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Phone Field */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label fw-semibold">
                  <FaPhone className="me-2" /> Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Subject Field */}
              <div className="mb-3">
                <label htmlFor="subject" className="form-label fw-semibold">
                  📌 Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-control ${errors.subject && "is-invalid"}`}
                  placeholder="Enter subject"
                  required
                />
                {errors.subject && (
                  <div className="invalid-feedback">{errors.subject}</div>
                )}
              </div>

              {/* Message Field */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">
                  ✏️ Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-control ${errors.message && "is-invalid"}`}
                  placeholder="Write your message here..."
                  required
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg px-4">
                  <FaPaperPlane className="me-2" /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
