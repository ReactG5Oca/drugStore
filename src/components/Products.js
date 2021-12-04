import React, { Component } from "react";
import Card from "./Card";
import "../style/Products.css";

class Products extends Component {
  render() {
    const Supplements = localStorage.getItem("itemVariables")
      ? JSON.parse(localStorage.getItem("itemVariables"))
      : [];

    return (
      <>
        <div className="Productsh1">
          <h1>Products</h1>
        </div>
        <div className="Products">
          {Supplements.filter((sup) => sup.onSale === false).map(
            (item, index) => {
              return (
                <Card
                  key={index}
                  src={item.src}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  id={item.id}
                />
              );
            }
          )}
        </div>
      </>
    );
  }
}
export default Products;
