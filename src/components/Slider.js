import React, { Component } from "react";
import "../style/Slider.css";
import { Link } from "react-router-dom";

export class HeroImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfImages: [
        "siderFirstImage.jpg",
        "sliderSecondImage.jpg",
      ],
      currentImgLink:
        "siderFirstImage.jpg",
      imgArrCounter:0
    };
  }

  componentDidMount() {
    setInterval(() => {
      if(this.state.imgArrCounter===this.state.arrayOfImages.length-1){
        this.setState({
          imgArrCounter:0
        })
      }
      if (this.state.currentImgLink === this.state.arrayOfImages[this.state.imgArrCounter]) {
        this.setState({
          currentImgLink: this.state.arrayOfImages[this.state.imgArrCounter+1],
          imgArrCounter:this.state.imgArrCounter+1
        });
      } else {
        this.setState({
          currentImgLink: this.state.arrayOfImages[this.state.imgArrCounter],
        });
      }
    }, 3000);
  }
  handleToggleClick=(e)=>{
      let buttonClass=e.target.className
      if(buttonClass==="toggle1"){
          this.setState({
            currentImgLink: this.state.arrayOfImages[1],
          });
        }
        else{
          this.setState({
            currentImgLink: this.state.arrayOfImages[0],
          });
      }
  }

  render() {
    return (
      <div
        className="heroImageContainer"
        style={{ backgroundImage: `url(./assets/images/${this.state.currentImgLink})` }}
      >
        <div className="buttonsArea">
          <p> Welcome to Capsule drug stores</p>
          <button className="shopNowBtn"><Link to="/store">Shop now</Link> </button>
          <div className="toggeleSlider">
            <button className="toggle1"onClick={this.handleToggleClick}></button>
            <button className="toggle2" onClick={this.handleToggleClick}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroImage;