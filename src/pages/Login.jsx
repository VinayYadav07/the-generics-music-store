import React, { useContext, useState } from "react";
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
import { AuthContext } from "../store/AuthContext";
import { FIREBASE_API_KEY } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const loginHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            password,
            returnSecureToken: true,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        let errorMessage = "Authentication failed";

        if (
          data.error?.message === "EMAIL_NOT_FOUND" ||
          data.error?.message === "INVALID_LOGIN_CREDENTIALS"
        ) {
          errorMessage =
            "❌ Email or password is incorrect. Please check and try again.";
        } else if (data.error?.message === "INVALID_PASSWORD") {
          errorMessage = "❌ Wrong password. Please try again.";
        } else if (data.error?.message === "INVALID_EMAIL") {
          errorMessage = "❌ Invalid email format. Please check and try again.";
        } else if (data.error?.message === "USER_DISABLED") {
          errorMessage = "❌ This account has been disabled.";
        } else {
          errorMessage = data.error?.message || "Authentication failed";
        }

        throw new Error(errorMessage);
      }

      // Login with 5-minute session
      login(data.idToken, data.email || email.trim());

      navigate("/products");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
            🔐 Login
          </h1>

          <p
            className="lead"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              opacity: 0.85,
              fontWeight: "300",
            }}
          >
            Welcome back! Login to your account
          </p>
        </Container>
      </div>

      <Container className="my-4 my-md-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card
              className="p-3 p-md-5 shadow-lg border-0 rounded-4"
              style={{
                borderBottom: "4px solid #6C63FF",
              }}
            >
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

              <Form onSubmit={loginHandler}>
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

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">🔑 Password</Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                      Logging In...
                    </>
                  ) : (
                    "🚀 Login"
                  )}
                </Button>
              </Form>

              <div className="text-center mt-4">
                <p
                  className="text-secondary"
                  style={{
                    fontSize: "0.95rem",
                  }}
                >
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
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
                    Sign Up
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

export default Login;
