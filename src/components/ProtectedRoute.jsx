import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import { AuthContext } from "../store/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "60vh",
        }}
      >
        <Spinner
          animation="border"
          variant="danger"
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderWidth: "0.3rem",
          }}
        />
        <p
          className="mt-3 text-secondary"
          style={{
            fontSize: "1.1rem",
            fontWeight: "500",
          }}
        >
          🔐 Checking authentication...
        </p>
      </Container>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
