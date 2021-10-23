import React from "react";
import "./Weathericon.css";
function WeatherIcon(props) {
  const iconMapping = {
    "01d": "clear-day",
    "01n": "clear-night",
    "02d": "partly-cloudy-day",
    "02n": "partly-cloudy-night",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "overcast",
    "04n": "overcast-night",
    "09d": "drizzle",
    "09n": "drizzle",
    "10d": "rain",
    "10n": "rain",
    "11d": "thunderstorms",
    "11n": "thunderstorms-night",
    "13d": "snow",
    "13n": "snow",
    "50d": "mist",
    "50n": "mist",
  };

  let icon = iconMapping[props.icon];
  let iconurl = `https://basmilius.github.io/weather-icons/production/fill/all/${icon}.svg`;

  return <img src={iconurl} alt={props.alt} className="float-left" />;
}

export default WeatherIcon;
