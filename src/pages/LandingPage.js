import React, { Component } from "react";
import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import YoutubeControl from "../components/YoutubeControl";

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <Slider />
        <FeaturedProducts />
        <YoutubeControl />
      </div>
    );
  }
}

export default LandingPage;
