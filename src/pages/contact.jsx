import React, { useState } from "react";
import { IoIosContact } from "react-icons/io";

import Container from "../components/common/container";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Clear errors as the user types
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if name is provided
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    // Check if phone is valid (basic regex for numbers)
    // const phoneRegex = /^[0-9]{10,15}$/; // Allows 10-15 digits
    // if (!formData.phone.trim()) {
    //   newErrors.phone = "Phone number is required.";
    // } else if (!phoneRegex.test(formData.phone)) {
    //   newErrors.phone = "Invalid phone number (10-15 digits only).";
    // }

    // Check if subject is provided
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    // Check if message is provided
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no errors, construct mailto link
    const mailtoLink = `mailto:imsajjadali54@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <Container id="contact" className="py-5 animate__animated animate__fadeIn">
      <h2 className="text-center text-primary mb-4 display-4 fw-bold">
        <IoIosContact className="me-2 text-warning" />
        Contact Me
      </h2>
      <p className="text-center text-light mb-5">
        Feel free to reach out! Fill in the form below and I’ll get back to you
        as soon as possible.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control bg-secondary bg-opacity-5 text-light ${
              errors.name && "is-invalid"
            }`}
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control bg-secondary bg-opacity-5 text-light ${
              errors.email && "is-invalid"
            }`}
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className={`form-control bg-secondary bg-opacity-5 text-light ${
              errors.phone && "is-invalid"
            }`}
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            // required
          />
          {/* {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )} */}
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className={`form-control bg-secondary bg-opacity-5 text-light ${
              errors.subject && "is-invalid"
            }`}
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter the subject of your message"
            required
          />
          {errors.subject && (
            <div className="invalid-feedback">{errors.subject}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className={`form-control bg-secondary bg-opacity-5 text-light ${
              errors.message && "is-invalid"
            }`}
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            required
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg">
            Send Message
          </button>
        </div>
      </form>
    </Container>
  );
}

export default Contact;
