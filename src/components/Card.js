import React, { Component } from "react";
import "../style/Card.css";
import AddToCart from "./AddToCart";

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
            <div className="PriceCard"> {this.props.price} JOD</div>
            <AddToCart itemId={this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
