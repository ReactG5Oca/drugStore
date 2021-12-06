import React, { Component } from "react";
import Aboutus from "../components/Aboutus";
import Testimonials from "../components/Testimonials";
import MeetOurTeam from "../components/MeetOurTeam";
import Nav from "../components/Nav";

export class AboutUsPage extends Component {
  render() {
    return (
      <>
        <Nav />
        <Aboutus />
        <Testimonials />
        <MeetOurTeam />
      </>
    );
  }
}

export default AboutUsPage;
