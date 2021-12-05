import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../style/App.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import StorePage from "../pages/StorePage";
import AboutUsPage from "../pages/AboutUsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import UserProfilePage from "../pages/UserProfilePage";
import InitializeItem from "./InitializeItem";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <InitializeItem />
          <Nav />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
