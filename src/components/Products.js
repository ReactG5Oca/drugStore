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
      ? JSON.parse(localStorage.getItem("itemVariables")).length==12? JSON.parse(localStorage.getItem("itemVariables")):JSON.parse(localStorage.getItem("itemVariables1"))
      : [];
    const filterChange = (e) => {
      let filterValue = e.target.value.toLowerCase();
      this.setState({ filterState: filterValue });
    };

    return (
      <>
        <div className="Productsh1">
          <h1>Products</h1>
        </div>{" "}
        <div className="filterInput">
          <div>Search: </div>
          <input
            type="text"
            className="filter"
            id="filterItem"
            onChange={filterChange}
          />
          <i class="fas fa-search"></i>
        </div>
        <div className="Products">
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
                price={item.price}
                id={item.id}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default Products;
