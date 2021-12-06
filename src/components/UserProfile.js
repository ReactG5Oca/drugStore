import React, { Component } from "react";
import "../style/UserProfile.css";
import Weather from "./Weather";
import BillCards from "./BillCard";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const users = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : {
          userCartItems: [
            {
              description: "",
              id: 0,
              price: 0,
              quantity: 0,
              src: "",
              title: "",
            },
          ],
        };

    let data = [];
    data = users.userCartItems;
    let total = () => {
      let totalAmount = 0;
      data.forEach((element) => {
        totalAmount += Number(element.price) * element.quantity;
      });
      return totalAmount;
    };
    let values = data.map((item, index) => (
      <BillCards
        price={Math.round(Number(item.price) * item.quantity * 100) / 100}
        productName={item.title}
        quantity={item.quantity}
        index={index + 1}
        key={index}
      />
    ));
    return (
      <>
        <Weather />
        <h1 className="UserProfileh1">User Profile</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div className="image-information-containerUser">
            <div className="image-containerUser">
              <img src="../assets/images/Default.jfif" alt="Default_Image" />
            </div>
            <div className="information-containerUser">
              <h3>Personal information</h3>
              <p>First Name :{users.username} </p>
              <p>Email:{users.email}</p>
            </div>
          </div>

          <div className="bill">
            <div className="billCard">
              <h3 className="billTitle">Your previous Order</h3>
              <span className="products"> {values} </span>
              <hr />
              <span className="totalTaxes">
                Purchase
                <span>{Math.round(total() * 100) / 100} Jd</span>
              </span>
              <span className="totalTaxes">
                Taxes
                <span>4%</span>
              </span>
              <hr />
              <div className="totalSection">
                <span>Total: </span>
                <span className="totalPrice">
                  {Math.round(Number(total() * 0.04 + total()) * 100) / 100} Jd
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserProfile;
