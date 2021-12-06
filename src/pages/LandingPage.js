import React, { Component } from "react";
import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import YoutubeControl from "../components/YoutubeControl";
import Nav from "../components/Nav";

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Slider />
        <FeaturedProducts />
        <YoutubeControl />
      </div>
    );
  }
}

export default LandingPage;
