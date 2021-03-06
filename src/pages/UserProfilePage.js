import React, { Component, useEffect } from "react";
import UserProfile from "../components/UserProfile";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

export default function NewUserProfilePage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      navigate("/login");
    }
  });
  return <UserProfilePage />;
}

export class UserProfilePage extends Component {
  render() {
    return (
      <>
        <Nav />
        <UserProfile />
      </>
    );
  }
}
