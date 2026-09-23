import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../store/CartContext";
import { AuthContext } from "../store/AuthContext";

const Header = () => {
  const { cartElements } = useContext(CartContext);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const cartCount = cartElements.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const logoutHandler = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="py-2 shadow"
      style={{
        borderBottom: "3px solid #6C63FF",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container fluid>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="fw-bold fs-4"
          style={{
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#6C63FF";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "white";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          🎵 The Generics
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center text-lg-start">
            <Nav.Link
              as={NavLink}
              to="/"
              className="px-3"
              style={{
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#6C63FF";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              🏠 Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/products"
              className="px-3"
              style={{
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#6C63FF";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              🛍️ Store
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className="px-3"
              style={{
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#6C63FF";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              ℹ️ About
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              className="px-3"
              style={{
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#6C63FF";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              📧 Contact
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/movies"
              className="px-3"
              style={{
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#6C63FF";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              🎬 Movies
            </Nav.Link>

            {!isLoggedIn ? (
              <Nav.Link
                as={NavLink}
                to="/login"
                className="px-3"
                style={{
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#6C63FF";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                🔑 Login
              </Nav.Link>
            ) : (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/profile"
                  className="px-3"
                  style={{
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#6C63FF";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  👤 Profile
                </Nav.Link>

                <Button
                  variant="outline-light"
                  size="sm"
                  className="ms-2 px-3"
                  onClick={logoutHandler}
                  style={{
                    borderRadius: "20px",
                    fontWeight: "500",
                    borderColor: "#6C63FF",
                    color: "#6C63FF",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#6C63FF";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.borderColor = "#6C63FF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#6C63FF";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.borderColor = "#6C63FF";
                  }}
                >
                  🚪 Logout
                </Button>
              </>
            )}
          </Nav>

          <Button
            variant="outline-light"
            as={NavLink}
            to="/cart"
            className="mt-2 mt-lg-0 px-3"
            style={{
              borderRadius: "20px",
              fontWeight: "600",
              borderColor: "#6C63FF",
              color: "white",
              background: "linear-gradient(135deg, #6C63FF, #5A52D5)",
              border: "none",
              transition: "all 0.3s ease",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(108, 99, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            🛒 Cart
            {cartCount > 0 && (
              <span
                style={{
                  background: "#ff4444",
                  color: "white",
                  borderRadius: "50%",
                  padding: "1px 8px",
                  fontSize: "12px",
                  fontWeight: "700",
                  marginLeft: "6px",
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                }}
              >
                {cartCount}
              </span>
            )}
            {cartCount > 0 && (
              <span style={{ marginLeft: "8px" }}>({cartCount})</span>
            )}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
