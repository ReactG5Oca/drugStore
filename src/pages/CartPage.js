import React, { Component } from "react";
import CartComponent from "../components/CartComponent";
import Nav from "../components/Nav";

export class CartPage extends Component {
  render() {
    return (
      <>
        <Nav />
        <CartComponent />
      </>
    );
  }
}

export default CartPage;
