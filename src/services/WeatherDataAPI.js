import { useState, useEffect } from 'react'

const WeatherDataAPI = () => {
  const [weatherData, setWeatherData] = useState({})
  const [globalIdLocal, setGlobalIdLocal] = useState('1110600')

  const baseUrl = `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}`

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((weatherData) => setWeatherData(weatherData))
    console.log(baseUrl)
  }, [baseUrl])

  return {
    weatherData,
    globalIdLocal,
    setGlobalIdLocal,
  }
}

export default WeatherDataAPI
