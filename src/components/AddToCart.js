import React, { Component } from "react";

export class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickHandler = () => {
    // get user name to be used as key for cart
    const cartKey = localStorage.getItem("loggedinUserName")
      ? localStorage.getItem("loggedinUserName")
      : "tempCart";
    // get from local storage all the user cart items - key is logged in user name

    // check in case there is items saved on the local storage or no
    // if no local storage create new  array , add the id to the  array
    const cartArray = localStorage.getItem("cartKey")
      ? JSON.parse(localStorage.getItem("cartKey"))
      : [];

    const cartAddArry = this.props.itemId;
    cartArray.push(cartAddArry);
    localStorage.setItem("cartKey", JSON.stringify(cartArray));
    // console.log(cartArray);
    // in case there is already items ID in the local storage. add the ID to the

    // save the JSON array to the local storage
  };
  render() {
    return (
      <button
        className="add-to-cart-btn"
        // itemId="123"
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
