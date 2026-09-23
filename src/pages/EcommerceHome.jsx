import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EcommerceHome = () => {
  const navigate = useNavigate();

  const tours = [
    {
      date: "JUL16",
      location: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    { date: "JUL19", location: "TORONTO, ON", venue: "BUDWEISER STAGE" },
    { date: "JUL22", location: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
    { date: "JUL29", location: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
    { date: "AUG 2", location: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
    { date: "AUG 7", location: "CONCORD, CA", venue: "CONCORD PAVILION" },
  ];

  const handleBuyTickets = () => navigate("/products");

  return (
    <>
      <div
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
          minHeight: "clamp(300px, 50vh, 500px)",
          padding: "2rem 1rem",
          position: "relative",
          overflow: "hidden",
          borderBottom: "4px solid #6C63FF",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "60%",
            height: "200%",
            background:
              "radial-gradient(circle, rgba(108, 99, 255, 0.15), transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <Container style={{ position: "relative", zIndex: 1 }}>
          <h1
            className="fw-bold"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 5rem)",
              letterSpacing: "2px",
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            The Generics
          </h1>
          <p
            className="lead mt-3"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              opacity: 0.9,
              fontWeight: "300",
            }}
          >
            Get our Latest Album
          </p>
          <Button
            variant="outline-light"
            size="lg"
            className="mt-3 px-4 px-md-5 py-2 py-md-3 rounded-pill"
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
              borderWidth: "2px",
              borderColor: "#6C63FF",
              color: "#6C63FF",
              transition: "all 0.3s ease",
              background: "rgba(108, 99, 255, 0.1)",
            }}
            onClick={() => navigate("/products")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#6C63FF";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(108, 99, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(108, 99, 255, 0.1)";
              e.currentTarget.style.color = "#6C63FF";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ▶
          </Button>
        </Container>
      </div>

      <Container className="my-4 my-md-5">
        <h2
          className="text-center mb-3 mb-md-4 fw-bold"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: "#1a1a2e",
            letterSpacing: "1px",
            position: "relative",
            display: "inline-block",
            width: "100%",
          }}
        >
          🎤 TOURS
          <span
            style={{
              display: "block",
              width: "60px",
              height: "3px",
              background: "#6C63FF",
              margin: "8px auto 0",
              borderRadius: "2px",
            }}
          />
        </h2>

        {tours.map((tour, index) => (
          <Row
            key={index}
            className="align-items-center py-2 py-md-3 text-center text-sm-start"
            style={{
              borderBottom:
                index < tours.length - 1 ? "1px solid #e9ecef" : "none",
              transition: "all 0.2s ease",
              borderRadius: "8px",
              padding: "clamp(0.5rem, 1vw, 1rem) 0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f8f9fa";
              e.currentTarget.style.paddingLeft = "12px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.paddingLeft = "0";
            }}
          >
            <Col
              xs={12}
              sm={3}
              className="fw-bold"
              style={{
                fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
                color: "#1a1a2e",
              }}
            >
              {tour.date}
            </Col>

            <Col
              xs={12}
              sm={4}
              style={{
                fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
                fontWeight: "500",
                color: "#1a1a2e",
              }}
            >
              {tour.location}
            </Col>

            <Col
              xs={12}
              sm={3}
              className="text-secondary"
              style={{
                fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
              }}
            >
              {tour.venue}
            </Col>

            <Col xs={12} sm={2} className="mt-2 mt-sm-0">
              <Button
                variant="danger"
                size="sm"
                className="w-100 w-sm-auto"
                style={{
                  fontWeight: "600",
                  fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
                  padding:
                    "clamp(0.3rem, 0.5vw, 0.5rem) clamp(1rem, 1.5vw, 1.5rem)",
                  borderRadius: "30px",
                  background: "linear-gradient(135deg, #e94560, #c23152)",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                onClick={handleBuyTickets}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(233, 69, 96, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                BUY TICKETS
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default EcommerceHome;
