import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import DisplayCurrentTime from "./DisplayCurrentTime";

function Search() {
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState({});

  function HandleSearch(event) {
    event.preventDefault();
    let apiKey = "d644b9988fe5d63076ea48bfe2d4dc1b";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    
    axios.get(url).then(fetchData);
  }
  
  function searchLocation(position) {
    let apiKey = "d644b9988fe5d63076ea48bfe2d4dc1b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(fetchData);
  }
  
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  function updateCity(event) {
    setCity(event.target.value);
  }
  function fetchData(response) {
    setLoaded(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  let form = (
    <div className="form">
      <form onSubmit={HandleSearch}>
        <input
          type="search"
          placeholder="Enter a City"
          onChange={updateCity}
          autoFocus
          id="searchInput"
        />
        <input type="submit" value=" Search" className="buttons" />
        <button className="buttons" onClick={getCurrentLocation}>
          Current
        </button>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div className="App">
        <h1 className="city-Name"> {weather.name}</h1>
        <DisplayCurrentTime />
        {form}
        <div className="container">
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  <img src={weather.icon} alt={weather.description} />
                  <span className="temperature">
                    {Math.round(weather.temperature)}{" "}
                    <sup className="unit">°C | F</sup>
                  </span>
                </li>
                <li className="text-capitalize">{weather.description}</li>
              </ul>
            </div>
            <div className="col position-relative">
              <ul className="position-absolute top-50 start-50 translate-middle info-right">
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind}m/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1 className="city-Name">Weather Search Engine </h1>
        {form}
      </div>
    );
  }
}

export default Search;
