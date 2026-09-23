import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import EcommerceHome from "./pages/EcommerceHome";
import Products from "./components/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Cart from "./components/Cart";
import Movies from "./pages/Movies";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";

import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<EcommerceHome />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products/:productId"
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Protected Change Password */}
        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <div className="container text-center py-5">
              <h1>404</h1>
              <h3>Page Not Found</h3>
              <p className="text-secondary">
                The page you are looking for does not exist.
              </p>
            </div>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
