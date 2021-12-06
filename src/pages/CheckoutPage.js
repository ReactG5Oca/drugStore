import React, { Component, useEffect } from "react";
import CheckoutComponent from "../components/CheckoutComponent";
import { useNavigate } from "react-router-dom";
import "../style/checkout.css"
export default function NewCheckout() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      navigate("/login");
    }
  });
  return <CheckoutPage />;
}
class CheckoutPage extends Component {
  render() {
    return (
      <div className="checkoutPageContainer">
        <CheckoutComponent />
      </div>
    );
  }
}

// export default CheckoutPage
