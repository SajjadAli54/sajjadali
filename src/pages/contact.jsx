import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:imsajjadali54@gmail.com?subject=Message from ${
      formData.name
    }&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="py-5 bg-light animate__animated animate__fadeIn"
    >
      <div className="container">
        <h2 className="text-center text-primary mb-4 display-4 fw-bold">
          Contact
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
