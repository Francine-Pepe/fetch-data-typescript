import React from "react";
import { useState, useEffect } from "react";
import { Weather } from "../../types/weather";

function FetchDataTest() {
  const [posts, setPosts] = useState<Weather[]>([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Hamburg,DE&appid=d57d4be50a45b5e38db4d8379dddb0b8&units=metric"
    );

    const data = await response.json();
    setPosts([data]);

    if (!response.ok) {
      const msg = `An error occured: ${response.status}`;
      throw new Error(msg);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="data_container">
      <h1>The Weather Today</h1>
      {/* <button onClick={fetchData}>Show Weather</button> */}

      {posts.map((weather, index) => {
        console.log(weather);

        let data = weather.main;

        return (
          // <div key={pro.id}>
          //   <h1> {pro.title} </h1>
          //   <img src={pro.url} alt="" />
          // </div>

          <div id="weather" key={index}>
            <div id="id">id: {weather.id}</div>
            <p id="description">The weather today is: {weather.description}</p>
            <p id="location">City: {weather.name}</p>
            <div className="temperature_container">
              <p id="temp">Temperature: {data.temp}</p>
              <p id="temp">Maximum temperature: {data.temp_max}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FetchDataTest;
