import React, { Component } from "react";
import Card from "./Card";
import "../style/Filter.css";
import "../style/Products.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterState: "",
    };
  }
  render() {
    const Supplements = localStorage.getItem("itemVariables")
      ? JSON.parse(localStorage.getItem("itemVariables")).length===15? JSON.parse(localStorage.getItem("itemVariables")):JSON.parse(localStorage.getItem("itemVariables1"))
      : [];
    const filterChange = (e) => {
      let filterValue = e.target.value.toLowerCase();
      this.setState({ filterState: filterValue });
    };

    return (
      <>


<div className="filterInput">
          <div></div>
          <input
            type="text"
            className="filter"
            id="filterItem"
            placeholder="Search.."
            onChange={filterChange}
            
          />
          <i className="fas fa-search"></i>
        </div>


      <div className="ProductContainer">
      <h2 className="titleProducts"> Products</h2>
        <div className="main-containerProduct">
          {Supplements.filter(
            (sup) =>
              sup.onSale === false &&
              sup.name.toLowerCase().includes(this.state.filterState)
          ).map((item, index) => {
            return (
              <Card
                key={index}
                src={item.src}
                title={item.name}
                description={item.description}
                quantity={item.quantity}
                price={item.price}
                id={item.id}
              />
            );
          })}
        </div>
        </div>
      </>

    );
  }
}
export default Products;
