import React, { useState, useEffect } from "react"
import weatherApi from '../api/weatherApi'
import WeatherChart from '../components/WeatherChart'

const WeatherStation = () => {
  const [weatherData, setWeather] = useState({entries: undefined})
  useEffect(() => {
    if (weatherData.entries === undefined) {
      weatherApi.getWeather().then(response => setWeather({entries: response.data.weather}));
    }
  });

  return (
  <div>
    <h1>Weather Station</h1>
    <WeatherChart weatherEntries={weatherData.entries}/>
  </div>
  )
}

export default WeatherStation;