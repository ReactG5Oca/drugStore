import React, { Component } from "react";
import "../style/Register.css";
import { Link, useNavigate } from "react-router-dom";

export default function NewRegister() {
  const navigate = useNavigate();
  const handleUserRegister = () => {
    navigate("/login");
  };
  return <Register handleUserRegister={handleUserRegister} />;
}
class Register extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      mssgname: "",
      mssgpas: "",
      mssglength: "",
      mssgEmail: "",
    };
  }
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("users"))) {
      this.setState({ arr: JSON.parse(localStorage.getItem("users")) });
    } else {
      localStorage.setItem("users", JSON.stringify(this.state.arr));
    }
  }
  check = async (e) => {
    e.preventDefault();
    let input1 = e.target.name.value;
    let input2 = e.target.email.value;
    let input3 = e.target.password.value;
    let input4 = e.target.confirmpass.value;
    this.setState({
      mssgname: "",
      mssgpas: "",
      mssglength: "",
      mssgEmail: "",
    });
    let enableRegister = 0;
    if (input1.length <= 5) {
      this.setState({
        mssgname: "should be more than 5 characters",
      });
      enableRegister += 1;
    }
    if (input3.length <= 5) {
      this.setState({
        mssglength: "your password is too short",
      });
      enableRegister += 1;
    }
    if (input3 !== input4) {
      this.setState({
        mssgpas: "your passwords doesn't match",
      });
      enableRegister += 1;
    }
    this.state.arr.forEach((data) => {
      if (data.email === input2) {
        this.setState({
          mssgEmail: "this email registered before",
        });
        enableRegister += 1;
      }
    });
    if (enableRegister === 0) {
      let newArr = this.state.arr;
      newArr.push({
        username: input1,
        email: input2,
        password: input3,
        userCartItems: [],
      });
      localStorage.setItem("users", JSON.stringify(newArr));
      this.props.handleUserRegister();
    }
  };

  render() {
    return (
      <div className="register">
        <form className="form1-container" onSubmit={this.check}>
          <h2 style={{ fontFamily: "sans-serif" , color:"white"}}>Sign Up</h2>
          <br />
          <input type="text" placeholder="UserName" name="name" required />
          <h6 style={{ color: "red" }}>{this.state.mssgname}</h6>
          <br />
          <input type="email" placeholder="Email" name="email" required />
          <h6 style={{ color: "red" }}>{this.state.mssgEmail}</h6>
          <br />

          <input type="password" placeholder="Password" name="password" required />
          <h6 style={{ color: "red" }}>{this.state.mssglength}</h6>
          <br />

          <input
            type="password"
            placeholder="ConfirmPass"
            name="confirmpass"
            required
          />
          <h6 style={{ color: "red" }}>{this.state.mssgpas}</h6>
          
          <Link to="/login" style={{color:"lightblue"}}> You Have An Account ?</Link>
        {/* <br/> */}
          <button type="submit" style={{ color: "white" }}>
            Register
          </button>
        </form>
      </div>
    );
  }
}
