import React, { Component } from "react";
import "../style/CheckoutPage.css";
import ChoosenItem from "./ChoosenItem";
import { Link } from "react-router-dom";

export class CartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItemsPrice: 0,
      cartItems: [],
    };
  }
  async componentDidMount() {
    let receivedItems = localStorage.getItem("cartKey")
      ? JSON.parse(localStorage.getItem("cartKey"))
      : [];

    await this.setState({
      cartItems: receivedItems,
    });
    console.log(this.state.cartItems);
    this.calculateTotalPrice();
  }
  handleIncreaseQuantity = async (index) => {
    let prevStorageData = this.state.cartItems;
    if (prevStorageData[index].quantity <= 8) {
      prevStorageData[index].quantity += 1;

      await this.setState({
        cartItems: prevStorageData,
      });
      localStorage.setItem("cartKey", JSON.stringify(this.state.cartItems));
      this.calculateTotalPrice();
    }
  };
  handleDecreaseQuantity = async (index) => {
    let prevStorageData = this.state.cartItems;
    if (prevStorageData[index].quantity >= 2) {
      prevStorageData[index].quantity -= 1;

      await this.setState({
        cartItems: prevStorageData,
      });
      localStorage.setItem("cartKey", JSON.stringify(this.state.cartItems));
      this.calculateTotalPrice();
    } else {
      let prevStorageData = this.state.cartItems;
      prevStorageData.splice(index, 1);
      this.setState({
        cartItems: prevStorageData,
      });
      localStorage.setItem("cartKey", JSON.stringify(this.state.cartItems));
      this.calculateTotalPrice();
    }
  };
  calculateTotalPrice = async () => {
    let sum = 0;
    this.state.cartItems.forEach((data) => (sum += data.price * data.quantity));
    await this.setState({
      totalItemsPrice: sum,
    });
    this.updateUserCart();
  };
  updateUserCart = () => {
    if (localStorage.getItem("currentUser")) {
      let userInfoObj = JSON.parse(localStorage.getItem("currentUser"));

      userInfoObj.userCartItems = this.state.cartItems;

      localStorage.setItem("currentUser", JSON.stringify(userInfoObj));
    }
  };
  render() {
    return (
      <div className="CheckoutPageContainer">
        <h2 className="CheckoutPageTitle"> Your Cart</h2>
        <div className="choosenIemsContainer">
          {this.state.cartItems.length > 0 ? (
            <>
              {this.state.cartItems.map((data, index) => (
                <ChoosenItem
                  key={index}
                  itemIndex={index}
                  itemName={data.title}
                  itemPrice={data.price}
                  itemQuantity={data.quantity}
                  itemImage={data.src}
                  itemPriceQuantity={data.price * data.quantity}
                  handleIncreaseQuantity={this.handleIncreaseQuantity}
                  handleDecreaseQuantity={this.handleDecreaseQuantity}
                />
              ))}
              <h4 className="totalPriceResulth4">
                Total Price : {this.state.totalItemsPrice} Jd
              </h4>
              <button className="checkoutBtn" onClick={this.saveCartToStorage}>
                <Link to="/checkout"> Checkout</Link>
              </button>
            </>
          ) : (
            <div className="emptyCartContainer">
              <img
                src="https://professionalscareer.com/assets/images/emptycart.png"
                alt="empty cart"
              />
              <button className="addItemBtn">
                <Link to="/store"> Add Item</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CartComponent;
