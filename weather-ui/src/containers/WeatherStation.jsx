import React, { useState, useEffect, useRef } from "react"
import weatherApi from '../api/weatherApi'
import WeatherChart from '../components/WeatherChart'
import DaySelector from '../components/DaySelector';
import bulma from 'bulma'


const WeatherStation = () => {
  const [state, setState] = useState({selectedDay: new Date(), entries: []})
  const prevStateRef = useRef();
  const { selectedDay } = state;

  useEffect(() => {
    if (prevStateRef?.current?.selectedDay != state.selectedDay) {
      weatherApi.getWeather(selectedDay).then(response => setState({selectedDay, entries: response.data.weather}));
    }
    prevStateRef.current = state;
  });

  return (
  <div className="container">
    <h1 className="title">Weather Station</h1>
    <DaySelector
      value={selectedDay}
      onChange={(date) => setState({selectedDay: date, entires: []})}
    />
    <WeatherChart weatherEntries={state.entries}/>
  </div>
  )
}

export default WeatherStation;