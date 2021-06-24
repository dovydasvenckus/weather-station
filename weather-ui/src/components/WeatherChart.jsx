import React, { useEffect, useState, createRef } from "react"
import PropTypes from "prop-types";
import Chart from 'chart.js';


const WeatherChart = ({ weatherEntries }) => {
  const chartRef = createRef();
  const [state, setState] = useState({chart: undefined})
  const { chart } = state;


  useEffect(() => {
    if (!!weatherEntries) {
      const temperature = weatherEntries.map(element => ({t: new Date(element.date), y: element.temperature}));
      const humidity = weatherEntries.map(element => ({t: new Date(element.date), y: element.humidity}));
      
      if (chart) {
        chart.destroy();
      }

      const myChartRef = chartRef.current.getContext("2d");
      const newChart = new Chart(myChartRef, {
        type: 'line',
        data: {

            datasets: [
              {
                label: 'Temperature',
                borderColor: 'rgb(255, 0, 0)',
                data: temperature
            },
            {
              label: 'Humidity',
              borderColor: 'rgb(0, 0, 255)',
              data: humidity
          }
          ]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'time',
            }]
          }
        }
      });
      setState({chart: newChart})
    }
  }, [weatherEntries]);

  return <canvas id="weather-chart" ref={chartRef}></canvas>;
}

WeatherChart.propTypes = {
  weatherEntries: PropTypes.array.isRequired
}

export default WeatherChart;