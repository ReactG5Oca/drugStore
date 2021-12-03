import React, { Component } from "react";
import "../style/saleStyle.css";

export class SaleProductItem extends Component {
  render() {
    return (
      <div>
        <div className="sale-card">
          <div className="image-container">
            <img src={this.props.src} alt="pic" />
            <div className="onSale-title">
              <p> {this.props.sale}</p>
            </div>
          </div>

          <div className="information-container">
            <div className="sale-title">{this.props.title}</div>
            <div className="card-brief-description">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </div>
            <div className="sale-price">{this.props.price}</div>
            <button className="add-to-cart-btn">
              <div className="btn-icon">
                <i className="fa-solid fa-cart-arrow-down"></i>
              </div>
              <div className="btn-text"> Add to Cart</div>
            </button>
          </div>
        </div>
        {/* <div classNameName="mainContainer">
          <img src={this.props.src} alt="pic" />
          <div classNameName="titleMostViewed"> {this.props.title}</div>
          <div classNameName="priceMostViewed"> {this.props.price}</div>
        </div> */}
        {/* jjjjjjjjjj */}
        {/*       <div>
        <div className="sale-card">
          <div className="image-container">
            <img src={this.props.src} alt="pic" />
          </div>
          <div className="information-container">
            <div className="sale-title">{this.props.title}</div>
            <div className="card-brief-description">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </div>
            <div className="sale-price">{this.props.price}</div>
            <div
              className="add-to-cart-btn"
              itemId={this.props.key}
              onClick={this.onClickHandler}
            >
              <div className="btn-icon">
                <i className="fa-solid fa-cart-arrow-down"></i>
              </div>
              <div className="btn-text"> Add to Cart</div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default SaleProductItem;
