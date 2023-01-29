import "./App.scss";
import Header from "./Header/Header";
import WeatherDataAPI from "../../services/WeatherDataAPI";

import WeatherInfo from "./WeatherInfo/WeatherInfo";
import Weekdays from "./Weekdays/Weekdays";
import { useState, useEffect } from "react";

function App() {
  const { weatherData, globalIdLocal, setGlobalIdLocal } = WeatherDataAPI();
  const [selectedWeekday, setSelectedWeekday] = useState(0);

  return (
    <div className="App">
      <Header
        weatherData={weatherData}
        globalIdLocal={globalIdLocal}
        setGlobalIdLocal={setGlobalIdLocal}
      />
      <main className="main">
        <WeatherInfo weatherData={weatherData} selectedWeekday={selectedWeekday} />
        <hr />
        <Weekdays weatherData={weatherData} setSelectedWeekday={setSelectedWeekday} />
      </main>
    </div>
  );
}

export default App;
