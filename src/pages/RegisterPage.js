import React, { Component } from "react";
import Register from "../components/Register";
import Nav from "../components/Nav";

export class RegisterPage extends Component {
  render() {
    return (
      <>
        <Nav />
        <Register />
      </>
    );
  }
}

export default RegisterPage;
