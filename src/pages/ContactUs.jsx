import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";

const DATABASE_URL =
  "https://ecommerce-movies-2c252-default-rtdb.firebaseio.com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(`${DATABASE_URL}/contacts.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
          padding: "clamp(2rem, 5vw, 4rem) 1rem",
          borderBottom: "4px solid #6C63FF",
        }}
      >
        <Container>
          <h1
            className="fw-bold"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              letterSpacing: "2px",
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            Contact Us
          </h1>
          <p
            className="lead"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              opacity: 0.85,
              fontWeight: "300",
            }}
          >
            We'd love to hear from you
          </p>
        </Container>
      </div>

      <Container className="my-4 my-md-5">
        <Row className="justify-content-center g-4 g-md-5">
          <Col lg={7}>
            <Card
              className="p-3 p-md-4 shadow-sm border-0 rounded-4"
              style={{
                transition: "all 0.3s ease",
              }}
            >
              <h2
                className="text-center mb-4 fw-bold"
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: "#1a1a2e",
                }}
              >
                📬 Send us a Message
              </h2>

              {success && (
                <Alert
                  variant="success"
                  className="text-center"
                  style={{ borderRadius: "10px" }}
                >
                  Message sent successfully! We'll get back to you soon. 🙏
                </Alert>
              )}

              {error && (
                <Alert
                  variant="danger"
                  className="text-center"
                  style={{ borderRadius: "10px" }}
                >
                  {error}
                </Alert>
              )}

              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="py-2"
                    style={{
                      borderRadius: "10px",
                      borderColor: "#e0e0e0",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#6C63FF";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(108, 99, 255, 0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e0e0e0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="py-2"
                    style={{
                      borderRadius: "10px",
                      borderColor: "#e0e0e0",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#6C63FF";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(108, 99, 255, 0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e0e0e0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="py-2"
                    style={{
                      borderRadius: "10px",
                      borderColor: "#e0e0e0",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#6C63FF";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(108, 99, 255, 0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e0e0e0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="py-2"
                    style={{
                      borderRadius: "10px",
                      borderColor: "#e0e0e0",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#6C63FF";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(108, 99, 255, 0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e0e0e0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-100 py-2 fw-semibold"
                  style={{
                    fontSize: "clamp(0.9rem, 1vw, 1rem)",
                    borderRadius: "30px",
                    background: "linear-gradient(135deg, #6C63FF, #5A52D5)",
                    border: "none",
                    transition: "all 0.3s ease",
                  }}
                  disabled={isSubmitting}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(108, 99, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Sending...
                    </>
                  ) : (
                    "✉️ Send Message"
                  )}
                </Button>
              </Form>
            </Card>
          </Col>

          <Col lg={4}>
            <Card
              className="p-3 p-md-4 shadow-sm border-0 rounded-4 h-100"
              style={{
                background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
                borderBottom: "4px solid #6C63FF",
              }}
            >
              <h4
                className="fw-bold mb-4"
                style={{
                  fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)",
                  color: "#1a1a2e",
                }}
              >
                📍 Get in Touch
              </h4>

              <div className="mb-4">
                <p className="fw-semibold mb-1" style={{ color: "#1a1a2e" }}>
                  📍 Address
                </p>
                <p className="text-secondary" style={{ fontSize: "0.95rem" }}>
                  123 Music Street,
                  <br />
                  Los Angeles, CA 90001
                </p>
              </div>

              <div className="mb-4">
                <p className="fw-semibold mb-1" style={{ color: "#1a1a2e" }}>
                  📞 Phone
                </p>
                <p className="text-secondary" style={{ fontSize: "0.95rem" }}>
                  <a
                    href="tel:+15551234567"
                    className="text-secondary text-decoration-none"
                    style={{ transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#6C63FF";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#6c757d";
                    }}
                  >
                    +1 (555) 123-4567
                  </a>
                </p>
              </div>

              <div className="mb-4">
                <p className="fw-semibold mb-1" style={{ color: "#1a1a2e" }}>
                  ✉️ Email
                </p>
                <p className="text-secondary" style={{ fontSize: "0.95rem" }}>
                  <a
                    href="mailto:support@thegenerics.com"
                    className="text-secondary text-decoration-none"
                    style={{ transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#6C63FF";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#6c757d";
                    }}
                  >
                    support@thegenerics.com
                  </a>
                </p>
              </div>

              <div>
                <p className="fw-semibold mb-2" style={{ color: "#1a1a2e" }}>
                  🕒 Working Hours
                </p>
                <p className="text-secondary" style={{ fontSize: "0.95rem" }}>
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat - Sun: Closed
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
