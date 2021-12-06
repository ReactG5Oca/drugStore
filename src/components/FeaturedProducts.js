import React, { Component } from "react";
import Card from "./Card";
import "../style/FeaturedProducts.css";

class FeaturedProducts extends Component {
  constructor() {
    super();

    this.state = {
      ArrProducts: [
        {
          id: "12",
          src: "../assets/images/panadolvapor.jpg",
          onSale: false,
          name: "Panadol Vapor Release",
          description: "Headache, Colds & Influenza",
          quantity: 1,
          price: "3.45",
        },
        {
          id: "13",
          src: "../assets/images/panadoljoint.jpg",
          onSale: false,
          name: "Panadol Joint",
          description: "Headache  & Joint Pain",
          quantity: 1,
          price: "2.18",
        },
        {
          id: "14",
          src: "../assets/images/PanadolColdandflu.png",
          onSale: false,
          name: "Panadol Cold&Flu",
          description: "Headache, Colds & Influenza",
          quantity: 1,
          price: "2.75",
        },
      ],
    };

    this.Element = this.state.ArrProducts.map(function (element, index) {
      return (
        <Card
          key={index}
          id={element.id}
          src={element.src}
          title={element.name}
          quantity={element.quantity}
          description={element.description}
          price={element.price}
        />
      );
    });
  }

  render() {
    return (
      <div className="FeaturedProductsMain">
        <div className="FeaturedProductsh1">
          <h3>Featured Products</h3>
        </div>
        <div className="FeaturedProducts">{this.Element}</div>
      </div>
    );
  }
}

export default FeaturedProducts;
