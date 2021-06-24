import React, { useEffect } from "react"
import PropTypes from "prop-types";
import Chart from 'chart.js';


const WeatherChart = ({ weatherEntries }) => {
  useEffect(() => {
    if (!!weatherEntries) {
      const temperature = weatherEntries.map(element => ({t: new Date(element.date), y: element.temperature}));
      const humidity = weatherEntries.map(element => ({t: new Date(element.date), y: element.humidity}));
      
      var ctx = document.getElementById('weather-chart').getContext('2d');
      new Chart(ctx, {
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
    }
  }, [weatherEntries]);

  return <canvas id="weather-chart"></canvas>;
}

WeatherChart.propTypes = {
  weatherEntries: PropTypes.array.isRequired
}

export default WeatherChart;