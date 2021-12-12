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
          <button
            onClick={() => {
              this.props.handleDecreaseQuantity(this.props.itemIndex);
            }}
          >
            -
          </button>
          <div className="itemQuantity">{this.props.itemQuantity}</div>
          <button
            onClick={() => {
              this.props.handleIncreaseQuantity(this.props.itemIndex);
            }}
          >
            +
          </button>
        </div>
        <div className="itemPrice">
          {Math.round(this.props.itemPriceQuantity * 100) / 100} Jd
        </div>

        <div
          class="delete"
          onClick={() => {
            this.props.handleDeleteItem(this.props.itemIndex);
          }}
        >
          {" "}
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
    );
  }
}

export default ChoosenItem;
