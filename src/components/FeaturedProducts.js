import React, { Component } from "react";
import Card from "./Card";
import "../style/FeaturedProducts.css";

class FeaturedProducts extends Component {
  constructor() {
    super();

    this.state = {
      ArrProducts: [
        {
          id: "0",
          src: "../assets/images/omega3.jpg",
          onSale: false,
          name: "Panadol",
          description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
          price: "20",
        },
        {
          id: "1",
          src: "../assets/images/omega3.jpg",
          onSale: false,
          name: "Panadol",
          description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
          price: "20",
        },
        {
          id: "2",
          src: "../assets/images/omega3.jpg",
          onSale: false,
          name: "Panadol",
          description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
          price: "20",
        },
      ],
    };

    this.Element = this.state.ArrProducts.map(function (element) {
      return (
        <Card
          key={element.id}
          src={element.src}
          title={element.name}
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
