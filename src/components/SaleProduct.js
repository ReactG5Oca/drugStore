import React, { Component } from "react";
import SaleProductItem from "./SaleProductItem";
// import InitializeItem from "./InitializeItem";

export class SaleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Supplements = localStorage.getItem("itemVariables")
      ? JSON.parse(localStorage.getItem("itemVariables")).length==12? JSON.parse(localStorage.getItem("itemVariables")):JSON.parse(localStorage.getItem("itemVariables1"))
      : [];
    return (
      <div className="salesProductContainer">
        {/* <InitializeItem /> */}
        <h2 className="titleOfSupplements"> Special Offers</h2>
        <div className="main-container">
          {Supplements.filter((sup) => sup.onSale).map((item, index) => {
            return (
              <SaleProductItem
                key={index}
                src={item.src}
                title={item.name}
                description={item.description}
                price={item.price}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SaleProduct;
