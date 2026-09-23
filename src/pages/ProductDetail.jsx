import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { products } from "../data/products";
import { CartContext } from "../store/CartContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return (
      <Container className="text-center mt-5">
        <div style={{ fontSize: "4rem", marginBottom: "16px" }}>❌</div>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "bold",
            color: "#1a1a2e",
          }}
        >
          Product not found
        </h2>
        <p className="text-secondary">
          The product you're looking for doesn't exist.
        </p>
        <Button
          variant="primary"
          className="mt-3 px-4 py-2 rounded-pill"
          onClick={() => navigate("/products")}
          style={{
            background: "linear-gradient(135deg, #6C63FF, #5A52D5)",
            border: "none",
            transition: "all 0.3s ease",
          }}
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
          ← Back to Products
        </Button>
      </Container>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

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
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "2px",
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            {product.title}
          </h1>
          <p
            className="lead"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
              fontWeight: "bold",
              color: "#28a745",
            }}
          >
            ${product.price.toFixed(2)}
          </p>
          <span
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "4px 16px",
              borderRadius: "20px",
              fontSize: "14px",
            }}
          >
            {product.category}
          </span>
        </Container>
      </div>

      <Container className="my-4 my-md-5">
        <Row className="g-4 g-md-5">
          <Col lg={8}>
            <h3
              className="mb-3 mb-md-4 fw-bold"
              style={{
                fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
                color: "#1a1a2e",
              }}
            >
              🖼️ Product Images
            </h3>
            <Row className="g-3 g-md-4">
              {product.images.map((image, index) => (
                <Col key={index} xs={12} sm={6}>
                  <Card
                    className="border-0 shadow-sm rounded-4 overflow-hidden"
                    style={{
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 30px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 15px rgba(0,0,0,0.08)";
                    }}
                  >
                    <Card.Img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      style={{
                        height: "clamp(180px, 25vw, 280px)",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="mt-4 d-none d-lg-block">
              <Button
                variant="danger"
                size="lg"
                className="w-100 py-2 rounded-pill fw-semibold"
                style={{
                  fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
                  background: "linear-gradient(135deg, #e94560, #c23152)",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                onClick={handleAddToCart}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(233, 69, 96, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                🛒 Add to Cart
              </Button>
            </div>
          </Col>

          <Col lg={4}>
            <h3
              className="mb-3 mb-md-4 fw-bold"
              style={{
                fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
                color: "#1a1a2e",
              }}
            >
              ⭐ Customer Reviews
            </h3>

            {product.reviews.map((review, index) => (
              <Card
                key={index}
                className="mb-3 border-0 shadow-sm rounded-4"
                style={{
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0,0,0,0.08)";
                }}
              >
                <Card.Body>
                  <div className="d-flex align-items-center mb-1">
                    <span
                      style={{
                        fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)",
                        marginRight: "8px",
                      }}
                    >
                      ⭐
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(0.85rem, 1vw, 1rem)",
                        color: "#495057",
                      }}
                    >
                      {review}
                    </span>
                  </div>
                </Card.Body>
              </Card>
            ))}

            <div className="mt-3">
              <Button
                variant="primary"
                className="w-100 mb-2 py-2 rounded-pill fw-semibold"
                style={{
                  fontSize: "clamp(0.85rem, 1vw, 1rem)",
                  background: "linear-gradient(135deg, #6C63FF, #5A52D5)",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                onClick={() => navigate("/products")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(108, 99, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                ← Back to Products
              </Button>

              <Button
                variant="danger"
                className="w-100 py-2 rounded-pill fw-semibold d-lg-none"
                style={{
                  fontSize: "clamp(0.85rem, 1vw, 1rem)",
                  background: "linear-gradient(135deg, #e94560, #c23152)",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                onClick={handleAddToCart}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(233, 69, 96, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                🛒 Add to Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
