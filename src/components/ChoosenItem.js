import React, { Component } from "react";
import "../style/ChoosenItem.css";
export class ChoosenItem extends Component {
  render() {
    return (
      <div className="oneChosenItemContainer">
        <div className="itemName">{this.props.itemName}</div>
        <div className="choosenItemImageContainer">
          <img src={this.props.itemImage} alt={this.props.itemName} />
        </div>
        <div className="itemQuantityContainer">
          <button onClick={() => {
              this.props.handleDecreaseQuantity(this.props.itemIndex);
            }}>-</button>
          <div className="itemQuantity">{this.props.itemQuantity}</div>
          <button
            onClick={() => {
              this.props.handleIncreaseQuantity(this.props.itemIndex);
            }}
          >
            +
          </button>
        </div>
        <div className="itemPrice">{this.props.itemPriceQuantity} Jd</div>
      </div>
    );
  }
}

export default ChoosenItem;
