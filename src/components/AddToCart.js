import React, { Component } from "react";

export class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickHandler = () => {
    
    const cartArray = localStorage.getItem("cartKey")
      ? JSON.parse(localStorage.getItem("cartKey"))
      : [];

    const cartAddArry = this.props.itemId;
    let exist =false
    cartArray.forEach(element => {
      if (element.id===cartAddArry.id) {
        exist=true
      }
    });
    if (!exist) {
      cartArray.push(cartAddArry);
    }
    localStorage.setItem("cartKey", JSON.stringify(cartArray));

  };
  render() {
    return (
      <button
        className="add-to-cart-btn"
        onClick={this.onClickHandler}
      >
        <div className="btn-icon">
          <i className="fa-solid fa-cart-arrow-down"></i>
        </div>
        <div className="btn-text"> Add to Cart</div>
      </button>
    );
  }
}

export default AddToCart;
