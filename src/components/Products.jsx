import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../store/CartContext";
import { musicProducts, merchProducts } from "../data/products";

const Products = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const renderProduct = (product) => (
    <Col key={product.id} xs={12} sm={6} md={6} lg={6} className="mb-4">
      <Card
        className="h-100 border-0 shadow-sm rounded-4 overflow-hidden product-card"
        style={{
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
        }}
      >
        <div
          style={{
            height: "clamp(200px, 30vw, 280px)",
            overflow: "hidden",
            cursor: "pointer",
            backgroundColor: "#f8f9fa",
            position: "relative",
          }}
          onClick={() => navigate(`/products/${product.id}`)}
        >
          <Card.Img
            src={product.imageUrl}
            alt={product.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              padding: "15px",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onError={(e) => {
              e.currentTarget.src =
                product.images?.[0] || "https://via.placeholder.com/300";
            }}
          />
        </div>

        <Card.Body className="text-center p-3 d-flex flex-column">
          <Card.Title
            className="fw-bold"
            style={{
              fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
              color: "#1a1a2e",
              minHeight: "2.5rem",
            }}
          >
            {product.title}
          </Card.Title>

          <Card.Text
            className="fw-bold"
            style={{
              color: "#e94560",
              fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
            }}
          >
            ${product.price.toFixed(2)}
          </Card.Text>

          <div className="d-flex flex-wrap justify-content-center gap-2 mt-auto">
            <Button
              variant="dark"
              size="sm"
              className="rounded-pill px-3 px-md-4"
              style={{
                fontSize: "clamp(0.7rem, 0.9vw, 0.85rem)",
                transition: "all 0.3s ease",
              }}
              onClick={() => navigate(`/products/${product.id}`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              View Details
            </Button>

            <Button
              variant="danger"
              size="sm"
              className="rounded-pill px-3 px-md-4"
              style={{
                fontSize: "clamp(0.7rem, 0.9vw, 0.85rem)",
                transition: "all 0.3s ease",
                background: "linear-gradient(135deg, #e94560, #c23152)",
                border: "none",
              }}
              onClick={() => handleAddToCart(product)}
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
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <>
      <div
        className="text-center text-white"
        style={{
          background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
          padding: "clamp(2.5rem, 6vw, 5rem) 1rem",
          borderBottom: "4px solid #6C63FF",
        }}
      >
        <Container>
          <h1
            className="fw-bold"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              letterSpacing: "2px",
            }}
          >
            The Generics
          </h1>
          <p
            className="lead"
            style={{
              opacity: 0.85,
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            }}
          >
            Music & Merchandise
          </p>
        </Container>
      </div>

      <Container className="my-4 my-md-5">
        <h2
          className="text-center fw-bold mb-3 mb-md-4"
          style={{
            color: "#1a1a2e",
            fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
            position: "relative",
            display: "inline-block",
            width: "100%",
          }}
        >
          🎵 MUSIC
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

        <Row className="g-3 g-md-4 mb-4 mb-md-5">
          {musicProducts.map(renderProduct)}
        </Row>

        <h2
          className="text-center fw-bold mb-3 mb-md-4"
          style={{
            color: "#1a1a2e",
            fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
            position: "relative",
            display: "inline-block",
            width: "100%",
          }}
        >
          👕 MERCH
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

        <Row className="g-3 g-md-4">{merchProducts.map(renderProduct)}</Row>

        <div className="text-center mt-5">
          <Button
            variant="secondary"
            size="lg"
            className="px-5 py-2 rounded-pill fw-semibold"
            style={{
              fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
              transition: "all 0.3s ease",
              background: "linear-gradient(135deg, #6C63FF, #5A52D5)",
              border: "none",
              color: "white",
            }}
            onClick={() => navigate("/cart")}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(108, 99, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            🛒 See the cart
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Products;
