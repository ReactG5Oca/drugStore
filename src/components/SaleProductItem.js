import React, { Component } from "react";
import "../style/saleStyle.css";
import AddToCart from "./AddToCart";
export class SaleProductItem extends Component {
  render() {
    return (
      <div>
        <div className="sale-card">
          <div className="image-container">
            <img src={this.props.src} alt="pic" />
            <div className="onSale-title">
              <p> On Sale</p>
            </div>
          </div>

          <div className="information-container">
            <div className="sale-title">{this.props.title}</div>
            <div className="card-brief-description">
              {this.props.description}
            </div>
            <div className="sale-price"> {this.props.price} JOD</div>
            <AddToCart itemId={this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default SaleProductItem;
