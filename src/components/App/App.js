import './App.scss'
import Header from './Header/Header'
import WeatherDataAPI from '../../services/WeatherDataAPI'
import WeatherTypeAPI from '../../services/WeatherDataAPI'
import DistritsAPI from '../../services/DistritsAPI'

import WeatherInfo from './WeatherInfo/WeatherInfo'
import Options from './Options/Options'
import { useState, useEffect } from 'react'

function App() {
  const { weatherData, globalIdLocal, setGlobalIdLocal } = WeatherDataAPI()
  const [selectedWeekday, setSelectedWeekday] = useState(0)

  return (
    <div className="App">
      <header>
        <h1 className="title">Weather App</h1>
      </header>

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
      </div>

      {/* <Header
        weatherData={weatherData}
        globalIdLocal={globalIdLocal}
        setGlobalIdLocal={setGlobalIdLocal}
      /> */}
      {/* <main className="main">
         <WeatherInfo weatherData={weatherData} selectedWeekday={selectedWeekday} /> 
         <Weekdays weatherData={weatherData} setSelectedWeekday={setSelectedWeekday} />
        </main>*/}
    </div>
  )
}

export default App
