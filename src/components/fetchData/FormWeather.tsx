import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import ButtonFetch from "./ButtonFetch";
import { Button } from "@mui/material";
import { useState } from "react";
import { Weather } from "../../types/weather";
import { City } from "../../types/city";

// import { useState, useEffect } from "react";
// import FetchDataTest from "./FetchDataTest";

export interface FormWeatherProps {
  onWeatherChanged: (weather: Weather) => void;
}

const FormWeather: React.FC<FormWeatherProps> = (props: FormWeatherProps) => {
  const [city, setCity] = useState<string | undefined>(undefined);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},DE&appid=d57d4be50a45b5e38db4d8379dddb0b8&units=metric`
    );

    const data = await response.json();
    props.onWeatherChanged(data);
  };

  return (
    <>
      <Stack
        spacing={2}
        sx={{ width: 300, display: "flex", justifyContent: "center" }}
      >
        <input
          value={city}
          onChange={(event) => setCity(event.target.value)}
        ></input>
      </Stack>
      <Button variant="outlined" onClick={() => fetchData()}>
        Search
      </Button>
    </>
  );
};

export default FormWeather;
