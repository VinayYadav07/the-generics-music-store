import React, { useContext } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../store/CartContext";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartElements,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
    clearCart,
  } = useContext(CartContext);

  const handleClose = () => {
    navigate("/products");
  };

  // Place Order
  const handlePlaceOrder = () => {
    alert("🎉 Thank you for your purchase! Your order has been placed.");

    // Clear cart after order
    clearCart();

    // Go back to products
    navigate("/products");
  };

  // Empty Cart
  if (cartElements.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <Card
          className="p-5 shadow-lg border-0"
          style={{
            maxWidth: "480px",
            margin: "0 auto",
            borderRadius: "20px",
            background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
          }}
        >
          <div style={{ fontSize: "72px", marginBottom: "16px" }}>🛍️</div>

          <h2
            style={{
              fontWeight: "700",
              color: "#1a1a2e",
              marginBottom: "8px",
            }}
          >
            Your Cart
          </h2>

          <p className="text-muted fs-5" style={{ fontWeight: "400" }}>
            Looks like your cart is empty.
          </p>

          <p className="text-muted small" style={{ marginBottom: "24px" }}>
            Start adding some amazing products!
          </p>

          <Button
            variant="primary"
            onClick={() => navigate("/products")}
            style={{
              borderRadius: "50px",
              padding: "12px 40px",
              fontWeight: "600",
              fontSize: "16px",
              background: "linear-gradient(135deg, #6C63FF, #5A52D5)",
              border: "none",
              boxShadow: "0 8px 24px rgba(108, 99, 255, 0.35)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 32px rgba(108, 99, 255, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(108, 99, 255, 0.35)";
            }}
          >
            Continue Shopping
          </Button>
        </Card>
      </Container>
    );
  }

  // Cart with Items
  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: "72px",
        height: "calc(100% - 72px)",
        width: "min(440px, 100%)",
        background: "#ffffff",
        padding: "24px 24px 28px",
        boxShadow:
          "-8px 0 40px rgba(0, 0, 0, 0.08), -2px 0 12px rgba(0, 0, 0, 0.04)",
        zIndex: 1040,
        display: "flex",
        flexDirection: "column",
        animation: "slideIn 0.3s ease-out",
      }}
    >
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }

            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .cart-item:hover {
            background: #f8f9fa;
            border-radius: 12px;
            transition: all 0.2s ease;
          }

          .quantity-btn {
            transition: all 0.2s ease;
            border: 2px solid #e9ecef;
            background: white;
          }

          .quantity-btn:hover:not(:disabled) {
            background: #6C63FF;
            border-color: #6C63FF;
            color: white;
            transform: scale(1.05);
          }

          .quantity-btn:disabled {
            opacity: 0.4;
            cursor: not-allowed;
          }

          .remove-btn {
            transition: all 0.2s ease;
          }

          .remove-btn:hover {
            color: #dc3545 !important;
            background: #fff5f5 !important;
            transform: scale(1.05);
          }
        `}
      </style>

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid #f1f3f5",
          paddingBottom: "16px",
          marginBottom: "20px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "28px" }}>🛒</span>

          <h4
            style={{
              fontWeight: "700",
              margin: 0,
              color: "#1a1a2e",
              letterSpacing: "-0.5px",
            }}
          >
            Your Cart
          </h4>

          <span
            style={{
              background: "#6C63FF",
              color: "white",
              borderRadius: "20px",
              padding: "2px 12px",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            {cartElements.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        </div>

        <Button
          variant="link"
          onClick={handleClose}
          style={{
            color: "#868e96",
            fontSize: "28px",
            fontWeight: "300",
            textDecoration: "none",
            padding: "0 8px",
            lineHeight: 1,
          }}
        >
          ✕
        </Button>
      </div>

      {/* Items List */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          paddingRight: "6px",
        }}
      >
        {cartElements.map((item) => (
          <div
            key={item.id}
            className="cart-item"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "12px 10px",
              marginBottom: "4px",
              borderBottom: "1px solid #f1f3f5",
            }}
          >
            {/* Product Information */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                width: "100%",
              }}
            >
              {/* Product Image */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "#f1f3f5",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/300";
                  }}
                />
              </div>

              {/* Product Details */}
              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#1a1a2e",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    fontWeight: "700",
                    color: "#28a745",
                    fontSize: "16px",
                    marginTop: "2px",
                  }}
                >
                  ${Number(item.price).toFixed(2)}
                </div>
              </div>

              {/* Remove */}
              <Button
                variant="link"
                size="sm"
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
                style={{
                  color: "#adb5bd",
                  fontSize: "13px",
                  fontWeight: "500",
                  padding: "6px 14px",
                  textDecoration: "none",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                Remove
              </Button>
            </div>

            {/* Quantity Controls */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                paddingLeft: "4px",
                marginTop: "8px",
              }}
            >
              {/* Decrease */}
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => decreaseQuantity(item.id)}
                disabled={item.quantity <= 1}
                className="quantity-btn"
                style={{
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                −
              </Button>

              {/* Quantity */}
              <Form.Control
                type="number"
                min="1"
                value={item.quantity}
                readOnly
                style={{
                  width: "55px",
                  textAlign: "center",
                  padding: "4px 2px",
                  fontSize: "15px",
                  height: "30px",
                  border: "2px solid #e9ecef",
                  borderRadius: "8px",
                  fontWeight: "600",
                  color: "#1a1a2e",
                  background: "white",
                }}
              />

              {/* Increase */}
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => increaseQuantity(item.id)}
                className="quantity-btn"
                style={{
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                +
              </Button>

              <span
                style={{
                  fontSize: "12px",
                  color: "#6c757d",
                  marginLeft: "4px",
                }}
              >
                Qty: {item.quantity}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "2px solid #f1f3f5",
          paddingTop: "20px",
          marginTop: "8px",
          flexShrink: 0,
          background: "white",
        }}
      >
        {/* Subtotal */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
            padding: "0 4px",
          }}
        >
          <span
            style={{
              fontWeight: "600",
              fontSize: "17px",
              color: "#1a1a2e",
            }}
          >
            Subtotal
          </span>

          <span
            style={{
              fontWeight: "700",
              fontSize: "24px",
              color: "#28a745",
            }}
          >
            ${Number(cartTotal).toFixed(2)}
          </span>
        </div>

        {/* Place Order */}
        <Button
          variant="success"
          className="w-100"
          onClick={handlePlaceOrder}
          style={{
            borderRadius: "50px",
            padding: "14px",
            fontWeight: "700",
            fontSize: "16px",
            background: "linear-gradient(135deg, #28a745, #1e7e34)",
            border: "none",
            boxShadow: "0 8px 24px rgba(40, 167, 69, 0.35)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 12px 30px rgba(40, 167, 69, 0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 8px 24px rgba(40, 167, 69, 0.35)";
          }}
        >
          📦 Place Order
        </Button>

        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#adb5bd",
            marginTop: "12px",
            marginBottom: 0,
          }}
        >
          🔐 Secure checkout · Free delivery on orders above $500
        </p>
      </div>
    </div>
  );
};

export default Cart;
