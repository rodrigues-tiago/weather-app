import "./MainInfo.scss";
import { useState, useEffect } from "react";

function MainInfo({ selectedWeekday, weatherData, weatherTypeData }) {
  const [tMax, setTMax] = useState("");
  const [tMin, setTMin] = useState("");
  const [precipitaProb, setPrecipitaProb] = useState("");
  const [predWindDir, setPredWindDir] = useState("");
  const [weatherType, setWeatherType] = useState(0);

  useEffect(() => {
    if (weatherData?.data) {
      console.log(weatherData);

      setTMax(Math.round(weatherData.data[selectedWeekday].tMax));
      setTMin(Math.round(weatherData.data[selectedWeekday].tMin));
      setPrecipitaProb(Math.round(weatherData.data[selectedWeekday].precipitaProb));
      setPredWindDir(weatherData.data[selectedWeekday].predWindDir);
      setWeatherType(weatherTypeData.find((weatherType) => weatherType.idTipoTempo === weatherData.data[selectedWeekday].idWeatherType).descidTipoTempoEN);
    }
  }, [selectedWeekday, weatherData, weatherTypeData]);

  return (
    <div className="main-info">
      <div className="main-degrees">
        <p>
          <span className="main-degrees-arrow">↑</span>
          {tMax}
          <span className="main-degrees-unit">ºC</span>
        </p>
        <p>
          <span className="main-degrees-arrow">↓</span>
          {tMin}
          <span className="main-degrees-unit">ºC</span>
        </p>
      </div>
      <div className="stats">
        <p>
          <label className="stat-label">Rain</label>
          <span className="stat-value">{precipitaProb}%</span>
        </p>
        <p>
          <label className="stat-label">Wind direction</label>
          <span className="stat-value">{predWindDir}</span>
        </p>
      </div>
      <p className="weather-description">{weatherType}</p>
    </div>
  );
}

export default MainInfo;
