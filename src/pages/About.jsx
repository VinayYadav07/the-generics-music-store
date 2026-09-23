import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
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
            About Us
          </h1>
          <p
            className="lead"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              opacity: 0.85,
              fontWeight: "300",
            }}
          >
            Know more about our journey
          </p>
        </Container>
      </div>

      <Container className="my-4 my-md-5">
        <Row className="align-items-center g-4 g-md-5">
          <Col md={6} className="order-2 order-md-1">
            <h2
              className="fw-bold mb-3"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "#1a1a2e",
              }}
            >
              🎵 Who We Are
            </h2>
            <p
              className="text-secondary"
              style={{
                fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
                lineHeight: "1.8",
              }}
            >
              <strong>The Generics</strong> isn't just a music label — it's a
              movement. Born from a shared love for sound, we bring together
              artists who dare to be different and fans who crave authenticity.
              From indie gems to chart-topping anthems, we curate music that
              stays with you long after the last note fades.
            </p>
            <p
              className="text-secondary"
              style={{
                fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
                lineHeight: "1.8",
              }}
            >
              Founded in 2020, we've built a community where creativity knows no
              bounds. We don't just sell albums or merch — we create experiences
              that connect people, spark conversations, and celebrate the
              universal power of music.
            </p>
            <p
              className="text-secondary"
              style={{
                fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
                lineHeight: "1.8",
                fontStyle: "italic",
                color: "#6C63FF",
              }}
            >
              "Music is the language that speaks when words fail."
            </p>
          </Col>

          <Col md={6} className="order-1 order-md-2 text-center">
            <Image
              src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop"
              alt="The Generics"
              fluid
              rounded
              className="shadow"
              style={{
                maxWidth: "100%",
                height: "auto",
                border: "3px solid #6C63FF",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </Col>
        </Row>

        <Row className="mt-5 g-3 g-md-4 text-center">
          <Col sm={6} md={4}>
            <div
              className="p-4 rounded-4 shadow-sm h-100"
              style={{
                background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
                borderBottom: "4px solid #6C63FF",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>🎵</div>
              <h5 className="fw-bold mt-2" style={{ color: "#1a1a2e" }}>
                Curated Music
              </h5>
              <p
                className="text-secondary"
                style={{ fontSize: "clamp(0.85rem, 1vw, 0.95rem)" }}
              >
                Handpicked albums from emerging and legendary artists. Every
                track tells a story.
              </p>
            </div>
          </Col>

          <Col sm={6} md={4}>
            <div
              className="p-4 rounded-4 shadow-sm h-100"
              style={{
                background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
                borderBottom: "4px solid #6C63FF",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>👕</div>
              <h5 className="fw-bold mt-2" style={{ color: "#1a1a2e" }}>
                Premium Merch
              </h5>
              <p
                className="text-secondary"
                style={{ fontSize: "clamp(0.85rem, 1vw, 0.95rem)" }}
              >
                Exclusive T-shirts, mugs, and more. Wear your passion and
                represent the sound.
              </p>
            </div>
          </Col>

          <Col sm={6} md={4}>
            <div
              className="p-4 rounded-4 shadow-sm h-100"
              style={{
                background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
                borderBottom: "4px solid #6C63FF",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>❤️</div>
              <h5 className="fw-bold mt-2" style={{ color: "#1a1a2e" }}>
                Community First
              </h5>
              <p
                className="text-secondary"
                style={{ fontSize: "clamp(0.85rem, 1vw, 0.95rem)" }}
              >
                Built by fans, for fans. Because music sounds better when
                shared.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 g-3 g-md-4 text-center">
          <Col xs={4}>
            <div className="p-3">
              <h3 className="fw-bold" style={{ color: "#6C63FF" }}>
                50+
              </h3>
              <p className="text-secondary small">Artists</p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="p-3">
              <h3 className="fw-bold" style={{ color: "#6C63FF" }}>
                200+
              </h3>
              <p className="text-secondary small">Albums</p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="p-3">
              <h3 className="fw-bold" style={{ color: "#6C63FF" }}>
                10K+
              </h3>
              <p className="text-secondary small">Customers</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
