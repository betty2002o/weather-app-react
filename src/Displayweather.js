import React from "react";
import "./Displayweather.css";

function Displayweather(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul>
            <li>
              <img src={props.data.icon} alt={props.data.description} />
              <span className="temperature">
                {Math.round(props.data.temperature)}{" "}
                <sup className="unit">°C | F</sup>
              </span>
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
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
