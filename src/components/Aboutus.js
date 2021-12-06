import React, { Component } from "react";
import "../style/aboutUs.css";

export class AboutUs extends Component {
  render() {
    return (
      <div
        className="aboutus-container"
        style={{ backgroundImage: `url("../assets/images/aboutus2.jpg") ` }}
      >
        <div className="aboutus-paragraph">
          <div className="aboutus-title">About Us</div>
          <div className="aboutus-content">
            <p>
              {" "}
              Welcome to Online Worldwide Drug Store! Our pharmacy is the leader
              in delivering medications throughout the world. You can place an
              order by filling it in online. That is the most easy way for
              people who prefer the convenience of online ordering. Our delivery
              service will provide you with your order in the shortest possible
              time! We are happy to help you! From pharmacy with care! Thank
              you!
            </p>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
