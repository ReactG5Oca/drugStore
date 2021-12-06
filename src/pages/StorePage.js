import React, { Component } from "react";
import Products from "../components/Products";
import InitializeItem from "../components/InitializeItem";
import SaleProduct from "../components/SaleProduct";
import Nav from "../components/Nav";


export class StorePage extends Component {
  render() {
    return (
      <>
        <Nav />
        <InitializeItem />
        <Products />
        <SaleProduct />
      </>
    );
  }
}

export default StorePage;
