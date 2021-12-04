import React, { Component } from "react";
import "../style/aboutUs.css";

export class AboutUs extends Component {
  render() {
    return (
        <div className="aboutus-container" style={{ backgroundImage: `url("../assets/images/aboutus2.jpg") `}}>
        <div className="aboutus-paragraph">
            <div className="aboutus-title">
                About Us
            </div>
            <div className="aboutus-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores eaque tenetur nostrum id quod, ipsum expedita facere voluptatum unde soluta dolore quasi vitae quas modi placeat itaque quos eligendi. Possimus eveniet corrupti voluptates porro
                architecto consequatur iusto, dolore consectetur eum sit omnis exercitationem provident tenetur fugiat quod eius consequuntur illo laborum qui! Porro hic esse libero recusandae molestiae veniam. Qui, sapiente autem assumenda id nemo animi
                temporibus labore architecto magni corporis quasi nulla. Unde corrupti error commodi delectus deleniti? Nobis nostrum molestias quisquam saepe repellendus tempora debitis accusamus fugit? </div>
        </div>
    </div>
    );
  }
}

export default AboutUs;
