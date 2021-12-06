import { Component } from "react";
import BillCards from "./BillCard";
import PlacedOrder from "./PlacedOrder";
import "../style/checkout.css";
export default class Checkout extends Component {
  state = {
    submitState: "",
    username: "",
    phone: "",
    msgErr: "",
    msgErr2: "",
  };
  submitted = (e) => {
    e.preventDefault();
    if (this.state.submitState === "ok") {
      this.setState({ submitState: "submitted" });
      this.placeOrder();
    }
  };
  validation = async (event, username) => {
    let i = 0;
    await this.setState({ [username]: event.target.value });
    if (this.state.username.length < 5) {
      await this.setState({
        msgErr: "Username should be larger than 6 digits",
      });
      i++;
    }
    if (this.state.username.length >= 5) {
      await this.setState({ msgErr: "" });
    }
    if (this.state.phone.length !== 9) {
      await this.setState({ msgErr2: "Phone Number should be 10 digits" });
      i++;
    }
    if (this.state.phone.length === 9) {
      await this.setState({ msgErr2: "" });
    }

    if (i === 0) {
      await this.setState({ submitState: "ok" });
    } else {
      await this.setState({ submitState: "" });
    }
  };
  placeOrder = () => {
    localStorage.setItem("cartKey", JSON.stringify([]));
  };
  render() {
    let data = [];
    data = JSON.parse(localStorage.getItem("cartKey"));
    let total = () => {
      let totalAmount = 0;
      data.forEach((element) => {
        totalAmount += Number(element.price) * element.quantity;
      });
      return totalAmount;
    };
    let values = data.map((item, index) => (
      <BillCards
        price={Number(item.price) * item.quantity}
        productName={item.title}
        quantity={item.quantity}
        index={index + 1}
        key={index}
      />
    ));
    if (this.state.submitState !== "submitted") {
      return (
        <div className="checkoutPageContainer">
          <form className="form" onSubmit={this.submitted}>
            <div className="checkCont">
              <div className="formSection">
                <h3 className="formTitle">Please fill your information</h3>
                <div>
                  <span>Personal Information:</span>
                  <input
                    onChange={(e) => this.validation(e, "username")}
                    value={this.state.username}
                    type="text"
                    placeholder="User Name"
                    className="formInputs userName"
                    required
                  ></input>
                  <h6 id="msgErr">{this.state.msgErr}</h6>
                  <input
                    type="email"
                    placeholder="Email"
                    className="formInputs email"
                    required
                  ></input>
                  <input
                    onChange={(e) => this.validation(e, "phone")}
                    value={this.state.phone}
                    type="text"
                    placeholder="Phone Number"
                    className="formInputs phoneNumber"
                    required
                  ></input>
                  <h6 id="msgErr2">{this.state.msgErr2}</h6>
                </div>
                <br />
                <div>
                  <span>Address Information:</span>
                  <input
                    type="text"
                    placeholder="Country"
                    className="formInputs address"
                    required
                  ></input>
                  <input
                    type="text"
                    placeholder="City"
                    className="formInputs address"
                    required
                  ></input>
                  <input
                    type="text"
                    placeholder="Address 2 / optional"
                    className="formInputs address"
                  ></input>
                </div>
                <div>
                  <br />
                  <h3>Payment Method</h3>
                  <div>
                    <input
                      type="checkbox"
                      value="cash"
                      name="cash"
                      id="cash"
                      placeholder="Cash"
                      required
                    ></input>
                    <label htmlFor="cash">Cash on delivery</label>
                  </div>
                  <br />
                  <input
                    type="submit"
                    value="Place your order"
                    className="formInputs checkSubmit"
                  ></input>
                </div>
              </div>
              <div className="bill">
                <div className="billCard">
                  <h3 className="billTitle">Your Order</h3>
                  <span className="products"> {values} </span>
                  <hr />
                  <span className="totalTaxes">
                    Purchase
                    <span>
                    
                      {Math.round(total()*100)/100} Jd</span>
                  </span>
                  <span className="totalTaxes">
                    Services
                    <span>4%</span>
                  </span>
                  <hr />
                  <div className="totalSection">
                    <span>Total: </span>
                    <span className="totalPrice">
                    {Math.round(Number(total() * 0.04 + total())*100)/100} Jd
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="orderMessage">
          {" "}
          <PlacedOrder />{" "}
        </div>
      );
    }
  }
}
