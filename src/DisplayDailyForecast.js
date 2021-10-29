import React from "react";
import Weathericon from "./WeatherIcon";
import axios from "axios";
import "./DisplayDailyForecast.css";

function DisplayDailyForecast(props) {
  const apiKey = "d644b9988fe5d63076ea48bfe2d4dc1b";
  let latitude = props.coord.lat;
  let longitude = props.coord.lon;
  let exclude = "current,minutely,hourly";
  let OneCallAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${exclude}&appid=${apiKey}&units=metric`;
  axios.get(OneCallAPI).then(fetchDailyData);
  function fetchDailyData(response) {
    console.log(response);
  }
  console.log(props.coord.lon);
  return (
    <div className="DisplayDailyForecast">
      <div className="row">
        <div className="col">
          <div className="dailyDay">Mon</div>
          <Weathericon icon="02d" size="10%" />
        </div>
        <div className="dailyTemp">
          <span className="dailyMax"> 25°</span>
          <span className="dailyMin"> 5°</span>
        </div>
      </div>
    </div>
  );
}

export default DisplayDailyForecast;
