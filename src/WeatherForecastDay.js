import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

function WeatherForecastDay(props) {
  let dailyMax = Math.round(props.data.temp.max);
  let dailyMin = Math.round(props.data.temp.min);
  return (
    <div className="DisplayDailyForecast">
      <div className="row">
        <div className="col">
          <div className="dailyDay">Mon</div>
          <WeatherIcon icon="02d" size="10%" />
        </div>
        <span className="dailyMax">{dailyMax}°</span>
        <span className="dailyMin">{dailyMin}°</span>
      </div>
    </div>
  );
}

export default WeatherForecastDay;
