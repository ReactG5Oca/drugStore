import React, { Component } from "react";
import "../style/UserProfile.css";
import Weather from "./Weather";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const users = JSON.parse(localStorage.getItem("users"));

    return (
      <>
        <Weather />

        <h1 className="UserProfileh1">User Profile</h1>

        <div className="image-information-containerUser">
          <div className="image-containerUser">
            <img src="../assets/images/Default.jfif" alt="Default_Image" />
          </div>
          <div className="information-containerUser">
            <h3>Personal information</h3>
            <p>First Name :{users.username} </p>
            {/* <p>Last Name:edinat </p>
            <p>Phone number:088888888888</p> */}
            <p>Email:{users.email}</p>
          </div>
        </div>
      </>
    );
  }
}

export default UserProfile;
