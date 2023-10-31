import './App.scss'
import WeatherDataAPI from '../../services/WeatherDataAPI'

import RainSketch from './RainSketch/RainSketch'
import Header from './Header/Header'
import WeatherInfo from './WeatherInfo/WeatherInfo'
import Options from './Options/Options'
import { useState } from 'react'

function App() {
  const { weatherData, globalIdLocal, setGlobalIdLocal } = WeatherDataAPI()
  const [selectedWeekday, setSelectedWeekday] = useState(0)

  return (
    <div className="App">
      <Header />

      <div className="weather-info-container">
        <WeatherInfo weatherData={weatherData} selectedWeekday={selectedWeekday} />
      </div>

      <div className="bottom-container">
        <Options
          weatherData={weatherData}
          globalIdLocal={globalIdLocal}
          setGlobalIdLocal={setGlobalIdLocal}
          selectedWeekday={selectedWeekday}
          setSelectedWeekday={setSelectedWeekday}
        />

        <p className="credits-text">Data by IPMA</p>
      </div>

      {/* <RainSketch /> */}
    </div>
  )
}

export default App
