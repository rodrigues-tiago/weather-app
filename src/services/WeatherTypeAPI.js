import { useState, useEffect } from "react";

const WeatherTypeAPI = () => {
  const [weatherTypeData, setWeatherTypeData] = useState({});

  const baseUrl = `https://api.ipma.pt/open-data/weather-type-classe`;

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((weatherTypeData) => setWeatherTypeData(weatherTypeData));
  }, [baseUrl]);

  return {
    weatherTypeData,
  };
};

export default WeatherTypeAPI;
