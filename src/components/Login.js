import React, { Component } from "react";
import "../style/Login.css";
import { Link, useNavigate } from "react-router-dom";
export default function LoginHoc() {
  const navigate = useNavigate();
  const handleLoginSubmitRedirect = (haveEmptyCart) => {
    if (haveEmptyCart === "yes") {
      navigate("/");
    } else {
      navigate("/cart");
    }
  };
  return <Login handleLoginSubmitRedirect={handleLoginSubmitRedirect} />;
}

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: "",
      password: "",
      usersStorageArr: [],
      errorMessage: "",
      cartItems: [],
    };
  }
  componentDidMount() {
    JSON.parse(localStorage.getItem("users"))
      ? this.setState({
          usersStorageArr: JSON.parse(localStorage.getItem("users")),
        })
      : localStorage.setItem(
          "users",
          JSON.stringify(this.state.usersStorageArr)
        );

    localStorage.getItem("cartKey")
      ? 
      this.setState({
          cartItems: JSON.parse(localStorage.getItem("cartKey")),
        })
      :
       console.log("hooraay");
  }

  loginsubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: "",
    });
    let userInputEmail = e.target.userEmail.value;
    let userInputPassword = e.target.password.value;
    let storageUsername = "";
    let storageUserCart = [];
    let isAuthenticated = false;
    this.state.usersStorageArr.forEach((data) => {
      if (
        userInputEmail === data.email &&
        userInputPassword === data.password
      ) {
        storageUsername = data.username;
        storageUserCart = data.userCartItems;
        isAuthenticated = true;
      }
    });
    if (isAuthenticated) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          email: userInputEmail,
          username: storageUsername,
          password: userInputPassword,
          userCartItems: storageUserCart,
        })
      );
      if (this.state.cartItems.length > 0) {
        this.props.handleLoginSubmitRedirect("no");
      } else {
        this.props.handleLoginSubmitRedirect("yes");
      }
    } else {
      this.setState({
        errorMessage: "The username or password incorrect !!",
      });
    }
  };

  render() {
    return (
      <div className="login">
        <form className="form-container" onSubmit={this.loginsubmit}>
          <h1 style={{ fontFamily: "sans-serif" ,color:"white"}}>Sign In</h1><br/>
          <h5 style={{ color: "red" }}>{this.state.errorMessage}</h5>
          <input type="email" placeholder="Email" name="userEmail" required />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <br />
          <Link to="/register" style={{color:"lightblue"}}> You Don't Have An Account ?</Link>
          {/* <br/> */}
          <button type="submit" style={{ color: "white" }}>
            login
          </button>
        </form>
      </div>
    );
  }
}

