import React, { Component } from "react";
import "../style/CheckoutPage.css";
import ChoosenItem from "./ChoosenItem";
import { Link } from "react-router-dom";

export class CartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfChoosenItems: [],
      totalItemsPrice: 0,
      arrayOfKeys: [],
    };
  }
  async componentDidMount() {
    if (
      localStorage.getItem("cartKey") &&
      localStorage.getItem("itemVariables")
    ) {
      let arrayOfKeys = JSON.parse(localStorage.getItem("cartKey"));
      await this.setState({
        arrayOfKeys: arrayOfKeys,
      });
      let allStorageProduct = JSON.parse(localStorage.getItem("itemVariables"));
      
      let ArrayOfNewDataObjects = [];
      allStorageProduct.forEach((item, index) => {
        if (arrayOfKeys.includes(item.id)) {
          item.itemQuantity = 1;
          ArrayOfNewDataObjects.push(item);
        }
      });
      await this.setState({
        arrayOfChoosenItems: ArrayOfNewDataObjects,
      });
      localStorage.setItem("cartData", JSON.stringify(ArrayOfNewDataObjects));
      this.calculateTotalPrice();
    }
  }
  handleIncreaseQuantity = async (index) => {
    let prevObj = this.state.arrayOfChoosenItems;
    if (prevObj[index].itemQuantity <= 8) {
      prevObj[index].itemQuantity+=1
      let prevArr = prevObj;
      await this.setState({
        arrayOfChoosenItems: prevArr,
      });
      localStorage.setItem("cartData", JSON.stringify(prevArr));
      this.calculateTotalPrice();
    }
  };
  handleDecreaseQuantity = async (index) => {
    
    let prevObj = this.state.arrayOfChoosenItems[index];
    if (prevObj.itemQuantity >= 2) {
      prevObj.itemQuantity -= 1;
      this.calculateTotalPrice();
    }
     else {
      let prevArr = this.state.arrayOfChoosenItems;
      prevArr.splice(index, 1);
      this.setState({
        arrayOfChoosenItems: prevArr,
      });
      localStorage.setItem("cartData", JSON.stringify(prevArr));
      this.calculateTotalPrice();
    }
  };
  calculateTotalPrice = async () => {
    let sum = 0;
    this.state.arrayOfChoosenItems.forEach(
      (data) => (sum += data.price * data.itemQuantity)
    );
    await this.setState({
      totalItemsPrice: sum,
    });
    this.saveCartToStorage();
  };
  saveCartToStorage = () => {
    localStorage.setItem(
      "cartData",
      JSON.stringify([
        ...this.state.arrayOfChoosenItems,
        this.state.totalItemsPrice,
      ])
    );
  };
  render() {
    return (
      <div className="CheckoutPageContainer">
        <h2 className="CheckoutPageTitle"> Your Cart</h2>
        <div className="choosenIemsContainer">
          {this.state.arrayOfChoosenItems.length > 0 ? (
            <>
              {this.state.arrayOfChoosenItems.map((data, index) => (
                <ChoosenItem
                  key={index}
                  itemIndex={index}
                  itemName={data.name}
                  itemPrice={data.price}
                  itemQuantity={data.itemQuantity}
                  itemImage={data.src}
                  itemPriceQuantity={data.price * data.itemQuantity}
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
