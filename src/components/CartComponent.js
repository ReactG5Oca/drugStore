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
    if (localStorage.getItem("cartData")) {
      await this.setState({
        arrayOfChoosenItems: JSON.parse(localStorage.getItem("cartData")),
      });
      this.calculateTotalPrice();
    } else {
      localStorage.setItem("cartData", JSON.stringify([]));
    }
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
      allStorageProduct.forEach((item) => {
        if (arrayOfKeys.includes(item.id)) {
          ArrayOfNewDataObjects.push(item);
          console.log(item);
        }
      });
      console.log(ArrayOfNewDataObjects);
      localStorage.setItem("itemVariables",JSON.stringify(ArrayOfNewDataObjects))
      localStorage.setItem("cartData",JSON.stringify(ArrayOfNewDataObjects))
      this.setState({
        arrayOfChoosenItems:JSON.parse(localStorage.getItem("cartData")),
      })
      
    }
  }
  handleIncreaseQuantity = async (index) => {
    let prevObj = this.state.arrayOfChoosenItems;
    if (prevObj[index].quantity <= 8) {
      prevObj[index].quantity += 1;
      let prevArr = prevObj;
      await this.setState({
        arrayOfChoosenItems: prevArr,
      });
      localStorage.setItem("cartData", JSON.stringify(prevArr));
      localStorage.setItem("itemVariables", JSON.stringify(prevArr));
      this.calculateTotalPrice();
    }
  };
  handleDecreaseQuantity = async (index) => {
    let prevObj = this.state.arrayOfChoosenItems;
    if (prevObj[index].quantity >= 2) {
      prevObj[index].quantity -= 1;
      let prevArr = prevObj;
      localStorage.setItem("cartData", JSON.stringify(prevArr));
      this.calculateTotalPrice();
    } else {
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
      (data) => (sum += data.price * data.quantity)
    );
    await this.setState({
      totalItemsPrice: sum,
    });
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

