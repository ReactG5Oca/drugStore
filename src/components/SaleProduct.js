import React, { Component } from "react";
import SaleProductItem from "./SaleProductItem";

export class SaleProduct extends Component {
  render() {
    const Supplements = [
      {
        id: "n1",
        src: "../assets/images/Biotin.jpg",
        sale: "On Sale",
        title: "Crossover Hem T-Shirt",
        price: "28 JD",
      },
      {
        id: "n2",
        src: "../assets/images/colon.jpg",
        sale: "On Sale",
        title: "High-Low Set",
        price: "65 JD",
      },
      {
        id: "n3",
        src: "../assets/images/omega3.jpg",
        sale: "On Sale",
        title: "Jogger SweatPants",
        price: "38 JD",
      },
    ];
    return (
      <div>
        <h2 className="titleOfSupplements"> Special Offers</h2>
        <div className="main-container">
          {Supplements.map((item, index) => {
            return (
              <SaleProductItem
                key={index}
                src={item.src}
                sale={item.sale}
                title={item.title}
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
