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
              in delivering medications throughout the world. Our goal is to
              provide medications at discount rates to everyone who is affected
              by expensive local prices. Our company is a professionally managed
              distributor of generic drugs. We provide high-quality service
              supplying drugs all over the world. We are aimed at supplying
              customers all over the world with medications of high quality at
              lowest prices thus helping to save their money and time. The most
              important element of any successful company is a high quality
              product. That is why we pay attention to the quality of the
              medications. We deal with the most reliable and professional
              manufactures and all the drugs are dispensed by licensed
              pharmacists. You can place an order by filling it in online. That
              is the most easy way for people who prefer the convenience of
              online ordering. Our delivery service will provide you with your
              order in the shortest possible time! Our customer service is
              opened to everyone and requires no signup. We are happy to help
              you! From pharmacy with care! Thank you!
            </p>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
