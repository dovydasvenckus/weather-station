import React, { useState, useEffect } from "react"
import weatherApi from '../api/weatherApi'

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
  </div>
  )
}

export default WeatherStation;