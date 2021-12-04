import React, { Component } from "react";
import "../style/UserProfile.css";
import Weather from "./Weather";

class UserProfile extends Component {
  render() {
    return (
      <>
        <Weather />

        <h1 className="UserProfileh1">UserProfile</h1>

        <div className="image-information-containerUser">
          <div className="image-containerUser">
            <img src="../assets/images/Default.jfif" alt="Default_Image" />
          </div>
          <div className="information-containerUser">
            <h1>information</h1>
            <p>First Name :haneen </p>
            <p>Last Name:edinat </p>
            <p>Phone number:088888888888</p>
            <p>Email:haneneeee@hga;dkkf</p>
          </div>
        </div>
      </>
    );
  }
}

export default UserProfile;
