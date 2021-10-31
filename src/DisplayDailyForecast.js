import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

function DisplayDailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function fetchDailyData(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <WeatherForecastDay data={forecast[0]}/>
    );
  } else {
    const apiKey = "83a749915ff8adf28c051c8c3b142608";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let OneCallAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(OneCallAPI).then(fetchDailyData);
    return null;
  }
}

export default DisplayDailyForecast;
