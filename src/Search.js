import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import DisplayCurrentTime from "./DisplayCurrentTime";
import Displayweather from "./Displayweather";
import DisplayDailyForecast from "./DisplayDailyForecast";
function Search() {
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState(null);
  let [weatherData, setWeatherData] = useState({});
  const apiKey = "d644b9988fe5d63076ea48bfe2d4dc1b";

  function HandleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(fetchData);
  }

  function searchLocation(position) {
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

    setWeatherData({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      coord: response.data.coord,
    });
  }
  console.log(weatherData);

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
        <h1 className="city-Name"> {weatherData.name}</h1>
        <DisplayCurrentTime />
        {form}
        <Displayweather data={weatherData} />
        <DisplayDailyForecast coord={weatherData.coord} />
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
