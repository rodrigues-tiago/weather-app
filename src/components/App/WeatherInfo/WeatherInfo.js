import "./WeatherInfo.scss";
import WeatherTypeAPI from "../../../services/WeatherTypeAPI";
import { useState, useEffect } from "react";

function WeatherInfo({ weatherData, selectedWeekday }) {
  const { weatherTypeData } = WeatherTypeAPI();

  const [tMax, setTMax] = useState(""),
    [tMin, setTMin] = useState(""),
    [precipitaProb, setPrecipitaProb] = useState(""),
    [predWindDir, setPredWindDir] = useState(""),
    [weatherType, setWeatherType] = useState(0);

  useEffect(() => {
    if (weatherData?.data && weatherTypeData?.data) {
      setTMax(Math.round(weatherData.data[selectedWeekday].tMax));

      setTMin(Math.round(weatherData.data[selectedWeekday].tMin));

      setPrecipitaProb(Math.round(weatherData.data[selectedWeekday].precipitaProb));

      setPredWindDir(weatherData.data[selectedWeekday].predWindDir);

      setWeatherType(
        weatherTypeData.data.find(
          (weatherType) =>
            weatherType.idWeatherType === weatherData.data[selectedWeekday].idWeatherType
        ).descWeatherTypeEN
      );
    }
  }, [weatherData, weatherTypeData, selectedWeekday]);

  return (
    <div className="weather-info">
      <div className="degrees-container">
        <p>
          <span className="degrees-arrow">↑ </span>
          {tMax}
          <span className="degrees-unit"> ºC</span>
        </p>
        <p>
          <span className="degrees-arrow">↓ </span>
          {tMin}
          <span className="degrees-unit"> ºC</span>
        </p>
      </div>

      <div class="stats-container">
        <div>
          <p className="stat">
            <label>Rain</label>
            <span>{precipitaProb}%</span>
          </p>
          <p className="stat">
            <label>Wind direction</label>
            <span>{predWindDir}</span>
          </p>
        </div>
        <p className="weather-type">{weatherType}</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
