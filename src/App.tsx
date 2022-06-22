import React, { useState } from "react";

import "./App.css";
import DisplayWeather from "./components/fetchData/DisplayWeather";
import FetchDataTest from "./components/fetchData/FetchDataTest";
import FormWeather from "./components/fetchData/FormWeather";
import { Weather } from "./types/weather";

function App() {
  const [weather, setWeather] = useState<Weather | undefined>(undefined);

  return (
    <div className="App">
      <DisplayWeather weather={weather} />
      <FormWeather onWeatherChanged={(weather) => setWeather(weather)}/>
    </div>
  );
}

export default App;
