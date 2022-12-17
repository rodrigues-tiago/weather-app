import { useState, useEffect } from "react";

const useAPICaller = () => {
  const [weatherData, setWeatherData] = useState({});
  const [globalIdLocal, setGlobalIdLocal] = useState("1110600");

  const baseUrl = `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}`;

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((weatherData) => setWeatherData(weatherData));
  }, [baseUrl]);

  return {
    weatherData,
    setGlobalIdLocal,
  };
};

export default useAPICaller;
