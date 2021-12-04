import React, { Component } from "react";
import "../style/Card.css";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="image-containerCard">
          <img src={this.props.src} alt={this.props.name} />
        </div>
        <div className="information-containerCard">
          <h1>{this.props.title}</h1>
          <div className="card-brief-description">
            <p>{this.props.description}</p>
          </div>
          <div className="PriceCard"> Price :{this.props.price}</div>
          <div className="add-to-cart-btn">
            <div className="btn-icon">
              <i className="fa-solid fa-cart-arrow-down"></i>
            </div>
            <div className="btn-text"> Add to Cart</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
