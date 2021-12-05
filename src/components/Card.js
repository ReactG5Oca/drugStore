import React, { Component } from "react";
import "../style/Card.css";
import AddToCart from "./AddToCart";
import Products from "./Products";

class Card extends Component {
  render() {
    return (
      <div>
      <div className="Card">
        <div className="image-containerCard">
          <img src={this.props.src} alt={this.props.name} />
        </div>
        <div className="information-containerCard">
         <div className="card-title">{this.props.title}</div>
          <div className="card-brief-description">
            <p>{this.props.description}</p>
          </div>
          <div className="PriceCard"> Price :{this.props.price}</div>
          <AddToCart itemId={this.props.id} />
        </div>
      </div>
      </div>

    );
  }
}

export default Card;
