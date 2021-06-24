import React, { useState, useEffect } from "react";
import "./spinnerStyle.css";
import "./weatherStyle.css";
import Spinner from "react-bootstrap/Spinner";

export const Weather = () => {
  const cityName = "haridwar";
  const [weather, setWeather] = useState();
  const [data, setData] = useState();
  const [clouds, setClouds] = useState();
  const [wind, setWind] = useState();
  useEffect(() => {
    let ismounted = true;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then((response) => response.json())
      .then((resData) => {
        if (ismounted) {
          setClouds(resData.clouds.all);
          setWeather(resData.weather[0]);
          setWind(resData.wind.speed);
          setData(resData.main.temp);
        }
        return () => {
          ismounted = false;
        };
      })
      .catch((e) => {
        return console.log(e);
      });
  }, []);
  if (data == null) {
    return <Spinner animation="border" className="spinner" />;
  }
  return (
    <div className="container">
      <div>
        <i className="fa fa-cloud fa-4x"></i> <br />
        <h3 className="temperature">Temperature: {data}°C</h3> <br />
        <h3>Clouds: {clouds}</h3> <br />
        <h3>Weather Condition: {weather.main}</h3> <br />
        <h3>Weather Description: {weather.description}</h3> <br />
        <h3>Wind Speed: {wind}</h3>
      </div>
    </div>
  );
};
