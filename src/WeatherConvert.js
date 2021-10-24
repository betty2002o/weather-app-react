import React, { useState } from "react";
import "./WeatherConvert.css";
function WeatherConvert(props) {
  const [unit, setUnit] = useState("celsius");
  function ConverttoF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function ConverttoC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="temperature">
        {Math.round(props.celsius)}{" "}
        <sup className="unit">
          <span className="active">°C </span>
          <a href="/" className="nonactive" onClick={ConverttoF}>
            | F
          </a>
        </sup>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="temperature">
        {Math.round(fahrenheit)}{" "}
        <sup className="unit">
          <span className="active">°F </span>
          <a href="/" className="nonactive" onClick={ConverttoC}>
            | C
          </a>
        </sup>
      </span>
    );
  }
}

export default WeatherConvert;
