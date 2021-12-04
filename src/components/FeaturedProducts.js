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
          src: "../assets/images/panadolvapor.jpg",
          onSale: false,
          name: "Panadol Vapor Release",
          description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
          price: "20",
        },
        {
          id: "1",
          src: "../assets/images/panadoljoint.jpg",
          onSale: false,
          name: "Panadol Joint",
          description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
          price: "20",
        },
        {
          id: "2",
          src: "../assets/images/PanadolColdandflu.png",
          onSale: false,
          name: "Panadol Cold&Flu",
          description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
          price: "20",
        },
      ],
    };

    this.Element = this.state.ArrProducts.map(function (element) {
      return (
        <Card
          id={element.id}
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
        {/* <AddToCart itemId={this.props.id} /> */}
      </div>
    );
  }
}

export default FeaturedProducts;
