import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

function WeatherForecastDay(props) {
  let dailyMax = Math.round(props.data.temp.max);
  let dailyMin = Math.round(props.data.temp.min);

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="DisplayDailyForecast">
      <div className="row">
        <div className="col">
          <div className="dailyDay">{day()}</div>
          <WeatherIcon
            icon={props.data.weather[0].icon}
            size="50%"
            alt={props.data.weather[0].description}
          />
        </div>
        <div className="dailyTemp">
          <span className="dailyMax">{dailyMax}°</span>
          <span className="dailyMin">{dailyMin}°</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecastDay;
