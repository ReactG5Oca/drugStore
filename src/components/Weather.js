import React, { Component } from "react";
import "../style/Weather.css";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      City: "",
      Country: "",
      Celsius: "",
      Icon: "",
      Description: "",
    };
  }
  componentDidMount() {
    this.getWeather();
  }
  getWeather = async () => {
    const response = await fetch(
      "https://api.weatherbit.io/v2.0/current?city=amman&key=9291baf6b5db48949923ac631f6eaef6"
    ).then((response) => response.json());
    this.setState({
      City: response.data[0].city_name,
      Celsius: response.data[0].temp,
      Description: response.data[0].weather.description,
    });
  };
  render() {
    return (
      <div className="Weather">
        <h1>The Weather</h1>
        <div className="WeatherIcon">
          <p>
            <i className="fas fa-city"></i>
            {this.state.City}
          </p>
          <p>
            <i className="fas fa-thermometer-three-quarters"></i>Temperature{" "}
            {this.state.Celsius}°
          </p>
          <p>
            <i className="fas fa-cloud"></i>
            {this.state.Description}
          </p>
        </div>
      </div>
    );
  }
}

export default Weather;
