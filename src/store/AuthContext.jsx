import React, { createContext, useEffect, useState } from "react";
import { FIREBASE_API_KEY } from "../firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("userEmail") || "",
  );
  const [isLoading, setIsLoading] = useState(true);

  // Logout function
  const logout = () => {
    setToken(null);
    setUserEmail("");

    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    localStorage.removeItem("userEmail");
  };

  // Login function - 5 minutes
  const login = (newToken, email = "") => {
    const expiryTime = Date.now() + 5 * 60 * 1000;

    setToken(newToken);

    if (email) {
      setUserEmail(email);
      localStorage.setItem("userEmail", email);
    }

    localStorage.setItem("token", newToken);
    localStorage.setItem("tokenExpiry", expiryTime.toString());
  };

  // Check token when app loads
  useEffect(() => {
    const validateToken = async () => {
      const storedToken = localStorage.getItem("token");
      const storedEmail = localStorage.getItem("userEmail") || "";
      const tokenExpiry = localStorage.getItem("tokenExpiry");

      if (!storedToken) {
        setToken(null);
        setUserEmail("");
        setIsLoading(false);
        return;
      }

      // Check 5-minute expiry
      if (!tokenExpiry || Date.now() >= Number(tokenExpiry)) {
        logout();
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_API_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idToken: storedToken,
            }),
          },
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error?.message || "Invalid authentication token",
          );
        }

        const email = data.users?.[0]?.email || storedEmail;

        setToken(storedToken);
        setUserEmail(email);

        localStorage.setItem("userEmail", email);
      } catch (error) {
        console.error("Token validation failed:", error);
        logout();
      } finally {
        setIsLoading(false);
      }
    };

    validateToken();
  }, []);

  // Automatic logout after 5 minutes
  useEffect(() => {
    if (!token) return;

    const tokenExpiry = localStorage.getItem("tokenExpiry");

    if (!tokenExpiry) {
      logout();
      return;
    }

    const remainingTime = Number(tokenExpiry) - Date.now();

    if (remainingTime <= 0) {
      logout();
      return;
    }

    const logoutTimer = setTimeout(() => {
      alert("Your 5-minute session has expired. Please login again.");
      logout();
    }, remainingTime);

    return () => clearTimeout(logoutTimer);
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        userEmail,
        isLoggedIn: !!token,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
