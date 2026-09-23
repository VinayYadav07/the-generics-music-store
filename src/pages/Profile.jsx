import React, { useContext } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const Profile = () => {
  const { userEmail } = useContext(AuthContext);
  const navigate = useNavigate();

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
            👤 My Profile
          </h1>
          <p
            className="lead"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              opacity: 0.85,
              fontWeight: "300",
            }}
          >
            Manage your account details
          </p>
        </Container>
      </div>

      <Container className="my-4 my-md-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card
              className="p-3 p-md-5 shadow-lg border-0 rounded-4 text-center"
              style={{
                borderBottom: "4px solid #6C63FF",
              }}
            >
              <div
                className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                style={{
                  width: "clamp(80px, 10vw, 120px)",
                  height: "clamp(80px, 10vw, 120px)",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6C63FF, #5A52D5)",
                  color: "white",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  boxShadow: "0 8px 30px rgba(108, 99, 255, 0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(108, 99, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(108, 99, 255, 0.3)";
                }}
              >
                👤
              </div>

              <h2
                className="fw-bold mb-3"
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: "#1a1a2e",
                }}
              >
                Welcome Back! 👋
              </h2>

              <div
                className="p-3 mb-4 rounded-3"
                style={{
                  background: "#f8f9fa",
                  borderLeft: "4px solid #6C63FF",
                  borderRadius: "10px",
                }}
              >
                <p
                  className="mb-1 text-secondary"
                  style={{ fontSize: "0.9rem" }}
                >
                  📧 <strong>Email Address</strong>
                </p>
                <p
                  className="fw-bold mb-0"
                  style={{
                    fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
                    color: "#1a1a2e",
                    wordBreak: "break-all",
                  }}
                >
                  {userEmail || "Not available"}
                </p>
              </div>

              <div className="mb-4">
                <span
                  className="badge px-3 py-2"
                  style={{
                    fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
                    background: "linear-gradient(135deg, #28a745, #1e7e34)",
                    borderRadius: "20px",
                  }}
                >
                  ✅ Logged In
                </span>
              </div>

              <Button
                variant="primary"
                className="w-100 py-2 fw-semibold"
                style={{
                  borderRadius: "30px",
                  background: "linear-gradient(135deg, #6C63FF, #5A52D5)",
                  border: "none",
                  transition: "all 0.3s ease",
                  fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
                }}
                onClick={() => navigate("/change-password")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(108, 99, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                🔑 Change Password
              </Button>

              <Button
                variant="outline-secondary"
                className="w-100 mt-3 py-2 fw-semibold"
                style={{
                  borderRadius: "30px",
                  borderColor: "#6C63FF",
                  color: "#6C63FF",
                  transition: "all 0.3s ease",
                  fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
                }}
                onClick={() => navigate("/products")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#6C63FF";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#6C63FF";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                🛒 Browse Products
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
