import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
  Card,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FIREBASE_API_KEY } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const signupHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError("");
    setSuccess(false);

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            password: password,
            returnSecureToken: true,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        let errorMessage = "Signup failed";

        if (data.error?.message === "EMAIL_EXISTS") {
          errorMessage = "❌ Email already registered. Please login.";
        } else if (data.error?.message === "WEAK_PASSWORD") {
          errorMessage = "❌ Password must be at least 6 characters.";
        } else if (data.error?.message === "INVALID_EMAIL") {
          errorMessage = "❌ Invalid email format. Please check and try again.";
        } else {
          errorMessage = data.error?.message || "Signup failed";
        }

        throw new Error(errorMessage);
      }

      // Account created successfully
      // Login function intentionally NOT called here
      setSuccess(true);

      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Signup ke baad Login page par jayega
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <div
        className="text-center text-white"
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
            📝 Sign Up
          </h1>

          <p
            className="lead"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              opacity: 0.85,
              fontWeight: "300",
            }}
          >
            Create your account and start shopping
          </p>
        </Container>
      </div>

      {/* Signup Form */}
      <Container className="my-4 my-md-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card
              className="p-3 p-md-5 shadow-lg border-0 rounded-4"
              style={{
                borderBottom: "4px solid #6C63FF",
              }}
            >
              {/* Success Message */}
              {success && (
                <Alert
                  variant="success"
                  className="text-center"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  Account created successfully! Redirecting to login...
                </Alert>
              )}

              {/* Error Message */}
              {error && (
                <Alert
                  variant="danger"
                  className="text-center"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  {error}
                </Alert>
              )}

              <Form onSubmit={signupHandler}>
                {/* Email */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">
                    📧 Email Address
                  </Form.Label>

                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

                {/* Password */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">
                    🔑 Password (min 6 chars)
                  </Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
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

                {/* Confirm Password */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">
                    🔑 Confirm Password
                  </Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
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

                {/* Signup Button */}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-100 py-2 fw-semibold"
                  disabled={isLoading}
                  style={{
                    borderRadius: "30px",
                    background: "linear-gradient(135deg, #6C63FF, #5A52D5)",
                    border: "none",
                    transition: "all 0.3s ease",
                    fontSize: "clamp(0.9rem, 1vw, 1rem)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      e.currentTarget.style.transform = "scale(1.02)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(108, 99, 255, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {isLoading ? (
                    <>
                      <Spinner animation="border" size="sm" className="me-2" />
                      Creating Account...
                    </>
                  ) : (
                    "🚀 Sign Up"
                  )}
                </Button>
              </Form>

              {/* Login Link */}
              <div className="text-center mt-4">
                <p
                  className="text-secondary"
                  style={{
                    fontSize: "0.95rem",
                  }}
                >
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    style={{
                      color: "#6C63FF",
                      fontWeight: "600",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = "underline";
                      e.currentTarget.style.color = "#5A52D5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = "none";
                      e.currentTarget.style.color = "#6C63FF";
                    }}
                  >
                    Login
                  </Link>
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
