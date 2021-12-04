import React, { Component } from "react";
import Products from "../components/Products";
import InitializeItem from "../components/InitializeItem";
import SaleProduct from "../components/SaleProduct";

export class StorePage extends Component {
  render() {
    return (
      <>
        <InitializeItem />
        <Products />
        <SaleProduct />
      </>
    );
  }
}

export default StorePage;
