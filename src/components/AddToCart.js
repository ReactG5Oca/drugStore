import React, { Component } from "react";
import { Snackbar, Alert } from "@mui/material";

export class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  onClickHandler = () => {
    const cartArray = localStorage.getItem("cartKey")
      ? JSON.parse(localStorage.getItem("cartKey"))
      : [];

    const cartAddArry = this.props.itemId;
    let exist = false;
    cartArray.forEach((element) => {
      if (element.id === cartAddArry.id) {
        exist = true;
      }
    });
    if (!exist) {
      cartArray.push(cartAddArry);
      this.handleClick();
    }
    localStorage.setItem("cartKey", JSON.stringify(cartArray));
  };
  handleClick = () => {
    this.setState((state) => ({ open: !this.state.open }));
  };
  handleClose = () => {
    this.setState((state) => ({ open: false }));
  };
  render() {
    return (
      <>
        <button className="add-to-cart-btn" onClick={this.onClickHandler}>
          <div className="btn-icon">
            <i className="fa-solid fa-cart-arrow-down"></i>
          </div>
          <div className="btn-text"> Add to Cart</div>
        </button>
        <Snackbar
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
        >
          <Alert
            onClose={this.handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Added Successfully!
          </Alert>
        </Snackbar>
      </>
    );
  }
}

export default AddToCart;
