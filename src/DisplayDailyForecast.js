import React, { useState } from "react";
import Weathericon from "./WeatherIcon";
import axios from "axios";
import "./DisplayDailyForecast.css";

function DisplayDailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  const apiKey = "d644b9988fe5d63076ea48bfe2d4dc1b";
  let latitude = props.coord.lat;
  let longitude = props.coord.lon;
  let exclude = "current,minutely,hourly";
  let OneCallAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${exclude}&appid=${apiKey}&units=metric`;

  axios.get(OneCallAPI).then(fetchDailyData);

  function fetchDailyData(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="DisplayDailyForecast">
        <div className="row">
          <div className="col">
            <div className="dailyDay">Mon</div>
            <Weathericon icon="02d" size="10%" />
          </div>
          <div className="dailyTemp">
            <span className="dailyMax"> {forecast[0].temp.max}</span>
            <span className="dailyMin"> {forecast[0].temp.min} </span>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default DisplayDailyForecast;
