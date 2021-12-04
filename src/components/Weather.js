import React, { Component } from "react";
import '../style/Weather.css'


class Weather extends Component{
    constructor(){
  super();
  this.state={
      City:'',
      Country:'',
      Celsius:'',
      Icon:'',
      Temp_max:'',
      Temp_min:'',
      Description:'',
  }
  this.getWeather();
    }
   

getWeather  =async ()=>{
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Jordan&units=metric&appid=ff0d4cb052ce451d0aa511db81b7d622");
    const data = await response.json();
    // console.log(data);

    this.setState({
        City:data.name,
        Celsius:Math.floor(data.main.temp),
        Description:data.weather[0].description,


    })

}
    render(){
        return(
            <div className="Weather">
                <h1>The Weather</h1>
                <div className="WeatherIcon">
                <p><i className="fas fa-city"></i>{this.state.City}</p>
                <p><i className="fas fa-thermometer-three-quarters"></i>Temperature {this.state.Celsius}°</p>
                <p><i className="fas fa-cloud"></i>{this.state.Description}</p>
                </div>
            </div>
           
        )
    }
}

export default Weather ;