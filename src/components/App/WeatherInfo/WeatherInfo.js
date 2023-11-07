import './WeatherInfo.scss'
import WeatherTypeAPI from '../../../services/WeatherTypeAPI'
import { useState, useEffect } from 'react'

function WeatherInfo({ weatherData, selectedWeekday }) {
  const { weatherTypeData } = WeatherTypeAPI()

  const [tMax, setTMax] = useState(''),
    [tMin, setTMin] = useState(''),
    [precipitaProb, setPrecipitaProb] = useState(''),
    [predWindDir, setPredWindDir] = useState(''),
    [weatherType, setWeatherType] = useState(0),
    [forecastDate, setForecastDate] = useState('')

  useEffect(() => {
    if (weatherData?.data && weatherTypeData?.data) {
      setTMax(Math.round(weatherData.data[selectedWeekday].tMax))

      setTMin(Math.round(weatherData.data[selectedWeekday].tMin))

      setPrecipitaProb(Math.round(weatherData.data[selectedWeekday].precipitaProb))

      setPredWindDir(weatherData.data[selectedWeekday].predWindDir)

      setWeatherType(
        weatherTypeData.data.find(
          (weatherType) =>
            weatherType.idWeatherType === weatherData.data[selectedWeekday].idWeatherType
        ).descWeatherTypeEN
      )

      const date = new Date(weatherData.data[selectedWeekday].forecastDate),
        f = new Intl.DateTimeFormat('en-us', {
          weekday: 'long',
          month: 'short',
          day: '2-digit',
        })
      setForecastDate(f.format(date).replace(',', ''))
    }
  }, [weatherData, weatherTypeData, selectedWeekday])

  const [currentTime, setCurrentTime] = useState('')
  useEffect(() => {
    function updateTime() {
      const now = new Date(),
        hours = String(now.getHours()).padStart(2, '0'),
        minutes = String(now.getMinutes()).padStart(2, '0'),
        seconds = String(now.getSeconds()).padStart(2, '0')
      setCurrentTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="stats-wrapper">
        <p className="weather-type">{weatherType}</p>
        <p className="stat">
          <label>Rain</label>
          <span>{precipitaProb}%</span>
        </p>
        <p className="stat">
          <label>Wind direction</label>
          <span>{predWindDir}</span>
        </p>
      </div>

      <div className="degrees-wrapper">
        <span>&uarr;&#xFE0E;{tMax}ºC</span>
        <span>&darr;&#xFE0E;{tMin}ºC</span>
      </div>

      <p className="date">{forecastDate}</p>

      <p className="time">{currentTime}</p>
    </>
  )
}

export default WeatherInfo
