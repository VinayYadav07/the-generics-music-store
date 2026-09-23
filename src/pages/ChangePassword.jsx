import React, { useContext, useState, useEffect } from "react";
import { Container, Form, Button, Alert, Spinner, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import { FIREBASE_API_KEY } from "../firebase";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  const changePasswordHandler = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${FIREBASE_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken: token,
            password: newPassword,
            returnSecureToken: true,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        let errorMessage = "Password change failed.";

        if (
          data.error?.message === "INVALID_ID_TOKEN" ||
          data.error?.message === "TOKEN_EXPIRED"
        ) {
          errorMessage = "Your session has expired. Please login again.";
        } else if (data.error?.message === "WEAK_PASSWORD") {
          errorMessage = "Password must be at least 6 characters long.";
        } else {
          errorMessage = data.error?.message || "Password change failed.";
        }

        throw new Error(errorMessage);
      }

      // Password successfully changed
      setNewPassword("");
      setConfirmPassword("");

      setSuccess(
        "Password changed successfully! You will be logged out. Please login again.",
      );

      // Wait for success message
      setTimeout(() => {
        // Logout user
        logout();

        // Redirect to login page
        navigate("/login", { replace: true });
      }, 1500);
    } catch (error) {
      setError(error.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return null;
  }

  return (
    <Container className="mt-4 mt-md-5 mb-5" style={{ maxWidth: "500px" }}>
      <Card
        className="p-3 p-md-4 shadow-lg border-0"
        style={{
          borderRadius: "16px",
          borderBottom: "4px solid #6C63FF",
        }}
      >
        <div className="text-center mb-4">
          <div
            style={{
              fontSize: "3rem",
              marginBottom: "10px",
            }}
          >
            🔐
          </div>

          <h2
            className="fw-bold"
            style={{
              color: "#1a1a2e",
            }}
          >
            Change Password
          </h2>

          <p className="text-secondary mb-0">Update your account password</p>
        </div>

        {success && (
          <Alert
            variant="success"
            className="text-center"
            style={{
              borderRadius: "10px",
            }}
          >
            {success}
          </Alert>
        )}

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

        <Form onSubmit={changePasswordHandler}>
          {/* New Password */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">🔑 New Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Enter new password (min 6 chars)"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              minLength={6}
              required
              disabled={isLoading}
              style={{
                borderRadius: "10px",
                padding: "12px",
                borderColor: "#e0e0e0",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#6C63FF";
                e.target.style.boxShadow = "0 0 0 3px rgba(108, 99, 255, 0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0";
                e.target.style.boxShadow = "none";
              }}
            />

            <Form.Text className="text-muted">
              Password must be at least 6 characters.
            </Form.Text>
          </Form.Group>

          {/* Confirm Password */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">🔑 Confirm Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength={6}
              required
              disabled={isLoading}
              style={{
                borderRadius: "10px",
                padding: "12px",
                borderColor: "#e0e0e0",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#6C63FF";
                e.target.style.boxShadow = "0 0 0 3px rgba(108, 99, 255, 0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0";
                e.target.style.boxShadow = "none";
              }}
            />
          </Form.Group>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            className="w-100 fw-semibold"
            disabled={isLoading}
            style={{
              borderRadius: "50px",
              padding: "12px",
              background: "linear-gradient(135deg, #6C63FF, #5A52D5)",
              border: "none",
              transition: "all 0.3s ease",
              fontSize: "16px",
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(108, 99, 255, 0.4)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {isLoading ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Changing Password...
              </>
            ) : (
              "🔐 Change Password"
            )}
          </Button>
        </Form>

        {/* Back to Profile */}
        <div className="text-center mt-3">
          <Button
            variant="link"
            onClick={() => navigate("/profile")}
            disabled={isLoading}
            style={{
              color: "#6C63FF",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            ← Back to Profile
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default ChangePassword;
