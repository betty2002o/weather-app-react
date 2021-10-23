import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Displayweather.css";

function Displayweather(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <WeatherIcon icon={props.data.icon} alt={props.data.description} />
          <span className="temperature">
            {Math.round(props.data.temperature)}{" "}
            <sup className="unit">°C | F</sup>
          </span>
          <div className="text-capitalize description">
            {props.data.description}
          </div>
        </div>
        <div className="col position-relative">
          <ul className="position-absolute top-50 start-50 translate-middle info-right">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Displayweather;
