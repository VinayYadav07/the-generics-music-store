import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkStyle = {
    transition: "all 0.3s ease",
    display: "inline-block",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = "#6C63FF";
    e.currentTarget.style.transform = "translateX(8px)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = "#6c757d";
    e.currentTarget.style.transform = "translateX(0)";
  };

  const socialStyle = {
    transition: "all 0.3s ease",
    display: "inline-block",
  };

  const handleSocialEnter = (e) => {
    e.currentTarget.style.color = "#6C63FF";
    e.currentTarget.style.transform = "translateY(-5px) scale(1.2)";
  };

  const handleSocialLeave = (e) => {
    e.currentTarget.style.color = "#6c757d";
    e.currentTarget.style.transform = "translateY(0) scale(1)";
  };

  return (
    <footer
      className="bg-dark text-white pt-5 pb-4 mt-5"
      style={{
        borderTop: "4px solid #6C63FF",
      }}
    >
      <Container>
        <Row className="gy-4 text-center text-md-start">
          {/* About */}
          <Col md={4}>
            <h5 className="fw-bold mb-3" style={{ color: "#6C63FF" }}>
              🎵 The Generics
            </h5>

            <p
              className="text-secondary"
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.7",
              }}
            >
              Your one-stop shop for music &amp; merch. We bring you the best
              albums and exclusive merchandise from your favorite artists.
            </p>

            <div className="mt-3">
              <span
                className="badge me-2"
                style={{
                  background: "linear-gradient(135deg, #6C63FF, #5A52D5)",
                  padding: "5px 14px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                ⭐ 4.8/5
              </span>

              <span
                className="badge"
                style={{
                  background: "#28a745",
                  padding: "5px 14px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                10K+ Customers
              </span>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5 className="fw-bold mb-3" style={{ color: "#6C63FF" }}>
              Quick Links
            </h5>

            <ul className="list-unstyled" style={{ fontSize: "0.95rem" }}>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-secondary text-decoration-none"
                  style={linkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  🏠 Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/products"
                  className="text-secondary text-decoration-none"
                  style={linkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  🛍️ Products
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-secondary text-decoration-none"
                  style={linkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  ℹ️ About
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-secondary text-decoration-none"
                  style={linkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  📧 Contact Us
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/cart"
                  className="text-secondary text-decoration-none"
                  style={linkStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  🛒 Cart
                </Link>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4}>
            <h5 className="fw-bold mb-3" style={{ color: "#6C63FF" }}>
              Connect With Us
            </h5>

            <div className="d-flex justify-content-center justify-content-md-start gap-4 mb-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-decoration-none fs-2"
                style={socialStyle}
                onMouseEnter={handleSocialEnter}
                onMouseLeave={handleSocialLeave}
                aria-label="Instagram"
              >
                📸
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-decoration-none fs-2"
                style={socialStyle}
                onMouseEnter={handleSocialEnter}
                onMouseLeave={handleSocialLeave}
                aria-label="Facebook"
              >
                📘
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-decoration-none fs-2"
                style={socialStyle}
                onMouseEnter={handleSocialEnter}
                onMouseLeave={handleSocialLeave}
                aria-label="Twitter"
              >
                🐦
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-decoration-none fs-2"
                style={socialStyle}
                onMouseEnter={handleSocialEnter}
                onMouseLeave={handleSocialLeave}
                aria-label="YouTube"
              >
                ▶️
              </a>

              <a
                href="https://www.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-decoration-none fs-2"
                style={socialStyle}
                onMouseEnter={handleSocialEnter}
                onMouseLeave={handleSocialLeave}
                aria-label="Spotify"
              >
                🎵
              </a>
            </div>

            {/* Contact Information */}
            <div className="mt-3">
              <p className="text-secondary mb-1" style={{ fontSize: "0.9rem" }}>
                ✉️{" "}
                <a
                  href="mailto:support@thegenerics.com"
                  className="text-secondary text-decoration-none"
                  style={{ transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#6C63FF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#6c757d";
                  }}
                >
                  support@thegenerics.com
                </a>
              </p>

              <p className="text-secondary" style={{ fontSize: "0.9rem" }}>
                📞{" "}
                <a
                  href="tel:+15551234567"
                  className="text-secondary text-decoration-none"
                  style={{ transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#6C63FF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#6c757d";
                  }}
                >
                  +1 (555) 123-4567
                </a>
              </p>
            </div>
          </Col>
        </Row>

        {/* Bottom Section */}
        <Row>
          <Col className="text-center pt-4 mt-4 border-top border-secondary">
            <p className="text-secondary mb-0" style={{ fontSize: "0.85rem" }}>
              © 2026 The Generics. All rights reserved. | Made with ❤️ in India
            </p>

            <p
              className="text-secondary mt-1"
              style={{
                fontSize: "0.75rem",
                opacity: 0.6,
              }}
            >
              Built with React &amp; Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
