import React, { Component } from "react";
import "../style/nav.css";
import { NavLink } from "react-router-dom";

export class Nav extends Component {
  state = {
    src1: "../assets/images/logoImg.png",
    status: 0,
    class1: "Nav itemList",
    class2: "Nav navList",
    class3: "Nav btns",
  };
  menu = () => {
    if (
      this.state.class1 === "Nav itemList" &&
      this.state.class2 === "Nav navList" &&
      this.state.class3 === "Nav btns"
    ) {
      this.setState({
        class1: "toggle itemList",
        class2: "toggle navList",
        class3: "toggle btns",
      });
    } else {
      this.setState({
        class1: "Nav itemList",
        class2: "Nav navList",
        class3: "Nav btns",
      });
    }
  };
  render() {
    return (
      <div>
        <div className="Nav navContainer">
          <div className="Nav logoContainer">
            <img
              className="Nav navLogo"
              src={this.state.src1}
              alt="Site Logo"
            />
            <img
              onClick={this.menu}
              className="menu"
              src="https://img.icons8.com/external-blue-wire-juicy-fish/30/4a90e2/external-bars-ui-elements-blue-wire-blue-wire-juicy-fish-2.png"
              alt="toggleBtn"
            />
            <div className="Nav logoName">Capsule</div>
          </div>
          <ul className={this.state.class2}>
            <li className={this.state.class1}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={this.state.class1}>
              <NavLink to="/store">Store</NavLink>
            </li>
            <li className={this.state.class1}>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <span className={this.state.class3}>
              <li className={this.state.class1}>
                <button className="Nav btn">
                  <NavLink to="/login">Log In</NavLink>
                </button>
              </li>
              <li className={this.state.class1}>
                <button className="Nav btn">
                  <NavLink to="/register">Register</NavLink>
                </button>
              </li>
            </span>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
