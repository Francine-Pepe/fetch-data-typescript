import React from "react";
import { useState, useEffect } from "react";
import { Weather } from "../../types/weather";

export interface DisplayWeatherProps {
  weather: Weather | undefined;
}

const DisplayWeather: React.FC<DisplayWeatherProps> = (
  props: DisplayWeatherProps
) => {
  if (props.weather === undefined) {
    return <>Kein Wetter</>;
  }

  const weather = props.weather;
  const data = props.weather.main;
  return (
    <div className="data_container">
      <h1>The Weather Today</h1>

      <div id="weather">
        <div id="id">id: {weather.id}</div>
        <p id="description">The weather today is: {weather.description}</p>
        <p id="location">City: {weather.name}</p>
        <div className="temperature_container">
          <p id="temp">Temperature: {data.temp}</p>
          <p id="temp">Maximum temperature: {data.temp_max}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayWeather;
