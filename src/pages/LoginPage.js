import React, { Component } from "react";
import LoginHoc from "../components/Login";
import Nav from "../components/Nav";

export class LoginPage extends Component {
  render() {
    return (
      <>
        <Nav />
        <LoginHoc />
      </>
    );
  }
}

export default LoginPage;
