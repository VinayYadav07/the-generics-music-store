import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { isLoggedIn, userEmail } = useContext(AuthContext);

  const [cartElements, setCartElements] = useState([]);
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn || !userEmail) {
      setCartElements([]);
      setIsLoading(false);
      return;
    }

    const cartKey = `cart_${userEmail}`;

    setIsLoading(true);

    try {
      const savedCart = localStorage.getItem(cartKey);

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCartElements(parsedCart);
        } else {
          setCartElements([]);
        }
      } else {
        setCartElements([]);
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
      setCartElements([]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoggedIn, userEmail]);

  useEffect(() => {
    if (!isLoggedIn || !userEmail || isLoading) {
      return;
    }

    const cartKey = `cart_${userEmail}`;

    try {
      localStorage.setItem(cartKey, JSON.stringify(cartElements));
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  }, [cartElements, isLoggedIn, userEmail, isLoading]);

  const showNotification = (productName, action = "added") => {
    setNotification({
      productName,
      action,
    });

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const addToCart = (product) => {
    if (!isLoggedIn) {
      alert("⚠️ Please login to add items to cart");
      return false;
    }

    const existingProduct = cartElements.find((item) => item.id === product.id);

    // Product already exists
    if (existingProduct) {
      alert("⚠️ This item is already added to the cart");
      return false;
    }

    // Add product first time
    showNotification(product.title, "added");

    setCartElements((prevCart) => [
      ...prevCart,
      {
        ...product,
        quantity: 1,
      },
    ]);

    return true;
  };

  const removeFromCart = (productId) => {
    setCartElements((prevCart) =>
      prevCart.filter((item) => item.id !== productId),
    );
  };

  const increaseQuantity = (productId) => {
    setCartElements((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (productId) => {
    setCartElements((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => {
    setCartElements([]);

    if (userEmail) {
      localStorage.removeItem(`cart_${userEmail}`);
    }
  };

  const cartQuantity = cartElements.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const cartTotal = cartElements.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartElements,
        cartQuantity,
        cartTotal,
        isLoading,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        notification,
      }}
    >
      {children}

      {notification && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            maxWidth: "420px",
            padding: "16px 24px",
            background: "white",
            color: "#1a1a2e",
            borderRadius: "12px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            zIndex: 9999,
            fontSize: "14px",
            fontWeight: "500",
            border: "1px solid #e9ecef",
            borderLeft: "4px solid #28a745",
            animation: "slideInRight 0.3s ease-out",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "20px" }}>✅</span>

          <div>
            <strong style={{ color: "#6C63FF" }}>
              {notification.productName}
            </strong>

            <span style={{ color: "#495057" }}>
              {" "}
              {notification.action === "added"
                ? "added to cart"
                : "quantity updated"}
            </span>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes slideInRight {
            from {
              transform: translateX(100%);
              opacity: 0;
            }

            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </CartContext.Provider>
  );
};

export default CartProvider;
