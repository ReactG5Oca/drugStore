import React, { Component } from "react";
// import Card from "./Card";
import Card from "../components/Card";
export class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterState: "",
    };
  }
  render() {
    const filterItemsArray = JSON.parse(localStorage.getItem("itemVariables"));
    console.log(filterItemsArray);

    const filterChange = (e) => {
      let filterValue = e.target.value.toLowerCase();
      this.setState({ filterState: filterValue });
    };

    return (
      <div>
        <div className="filterInput">
          <input
            type="text"
            className="filter"
            id="filterItem"
            onChange={filterChange}
          />
        </div>
        {filterItemsArray
          .filter((arr) =>
            arr.name.toLowerCase().includes(this.state.filterState)
          )
          .map((item, index) => {
            console.log(item);
            return (
              <div>
                {/* <Card
                  key={index}
                  src={item.src}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  id={item.id}
                />{" "} */}
              </div>
            );
          })}
      </div>
    );
  }
}

export default FilterComponent;
