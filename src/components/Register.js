import React, { Component } from "react";
import "../style/Register.css";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      confirmpass: "",
      email: "",
      password: "",
      arr: JSON.parse(localStorage.getItem("users"))
        ? JSON.parse(localStorage.getItem("users"))
        : [],
      mssgname: "",
      mssgpas: "",
      mssglength: "",
    };
  }
  check = async (e) => {
    const { username, confirmpass, email, password } = this.state;
    e.preventDefault();
    await this.setState({
      username: e.target.name.value,
      confirmpass: e.target.confirmpass.value,
      email: e.target.email.value,
      password: e.target.password.value,
    });

    this.validation(e);
  };
  validation = (e) => {
    let input1 = e.target.name.value;
    let input2 = e.target.email.value;
    let input3 = e.target.password.value;
    let input4 = e.target.confirmpass.value;
    let user = this.state.arr.username;
    let em = this.state.arr.email;
    const { username, confirmpass, email, password } = this.state;

    if (input3 === input4 && input1.length >= 5 && input3.length > 5) {
      this.state.arr.forEach((element) => {
        if (input1 != user && input2 != em) {
          let obj = { username, email, password, confirmpass };
          this.state.arr.push(obj);
          localStorage.setItem("users", JSON.stringify(this.state.arr));
        } else {
          alert("you are already signed in before");
        }
      });

      this.setState({
        mssgname: "",
        mssgpas: "",
        mssglength: "",
      });
    } else if (input1.length < 5) {
      this.setState({
        mssgname: "your name is less than 5",
      });
      if (input3.length <= 5) {
        this.setState({
          mssglength: "your password is too short",
        });
      }
      if (input3 != input4) {
        this.setState({
          mssgpas: "your password doesnt match",
        });
      }
    } else if (input3.length <= 5) {
      this.setState({
        mssglength: "your password is too short",
      });
      if (input1.length > 5) {
        this.setState({
          mssgname: "",
        });
      }
    } else if (input3 != input4) {
      this.setState({
        mssgpas: "your password doesnt match",
      });
      if (input1.length > 5) {
        this.setState({
          mssgname: "",
        });
      }
      if (input3.length > 5) {
        this.setState({
          mssglength: "",
        });
      }
    } else if (input3 == input4) {
      this.setState({
        mssgpas: "",
      });
      if (input1.length > 5) {
        this.setState({
          mssgname: "",
        });
      }
      if (input3.length > 5) {
        this.setState({
          mssglength: "",
        });
      }
    }
  };

  render() {
    return (
      <div className="register">
        <form className="form-container" onSubmit={this.check}>
          <h2 style={{ fontFamily: "sans-serif" }}>Sign Up</h2>
          <br />
          <input type="text" placeholder="UserName" name="name" required />
          <h6 style={{ color: "red" }}>{this.state.mssgname}</h6>
          <br />
          <input type="email" placeholder="Email" name="email" required />
          <br />

          <input type="text" placeholder="Password" name="password" required />
          <h6 style={{ color: "red" }}>{this.state.mssglength}</h6>
          <br />

          <input
            type="text"
            placeholder="ConfirmPass"
            name="confirmpass"
            required
          />
          <h6 style={{ color: "red" }}>{this.state.mssgpas}</h6>
          <br />
          <br />
          <Link to="/login"> You Have An Account ?</Link>

          <button type="submit" style={{ color: "white" }}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
