import React, { Component } from "react";
import "../style/CheckoutPage.css";
import ChoosenItem from "./ChoosenItem";
import { Link } from "react-router-dom";


export class CartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfChoosenItems: [
        {
          itemName: "item1 TEST",
          itemPrice: 500,
          itemQuantity: 1,
          itemImage: "test.png",
        },
        {
          itemName: "item2",
          itemPrice: 500,
          itemQuantity: 1,
          itemImage: "test.png",
        },
        {
          itemName: "item3",
          itemPrice: 500,
          itemQuantity: 1,
          itemImage: "test.png",
        },
        {
          itemName: "item4",
          itemPrice: 500,
          itemQuantity: 1,
          itemImage: "test.png",
        },
        {
          itemName: "item5",
          itemPrice: 500,
          itemQuantity: 1,
          itemImage: "test.png",
        },
      ],
      totalItemsPrice: 0,
    };
  }
  componentDidMount() {
    this.calculateTotalPrice();
  }
  handleIncreaseQuantity = (index) => {
    let prevObj = this.state.arrayOfChoosenItems[index];
    if (prevObj.itemQuantity <= 8) {
      prevObj.itemQuantity += 1;
      let prevArr = this.state.arrayOfChoosenItems;
      prevArr.splice(index, 1, prevObj);
      this.setState({
        arrayOfChoosenItems: prevArr,
      });
      this.calculateTotalPrice();
    }
  };
  handleDecreaseQuantity = (index) => {
    let prevObj = this.state.arrayOfChoosenItems[index];
    if (prevObj.itemQuantity >= 2) {
      prevObj.itemQuantity -= 1;
      let prevArr = this.state.arrayOfChoosenItems;
      prevArr.splice(index, 1, prevObj);
      this.setState({
        arrayOfChoosenItems: prevArr,
      });
      this.calculateTotalPrice();
    } else {
      let prevArr = this.state.arrayOfChoosenItems;
      prevArr.splice(index, 1);
      this.setState({
        arrayOfChoosenItems: prevArr,
      });
      this.calculateTotalPrice();
    }
  };
  calculateTotalPrice = () => {
    let sum = 0;
    this.state.arrayOfChoosenItems.forEach(
      (data) => (sum += data.itemPrice * data.itemQuantity)
    );
    this.setState({
      totalItemsPrice: sum,
    });
    this.saveCartToStorage()
  };
  saveCartToStorage = () => {
    // console.log("yaser");
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
                  itemName={data.itemName}
                  itemPrice={data.itemPrice}
                  itemQuantity={data.itemQuantity}
                  itemImage={data.itemImage}
                  itemPriceQuantity={data.itemPrice * data.itemQuantity}
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
