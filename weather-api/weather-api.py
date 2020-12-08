from datetime import (datetime, timedelta)
from flask import (Flask, jsonify)
import sqlite3

app = Flask(__name__)
app.config["DEBUG"] = True

WEATHER_QUERY = """
SELECT rowid, * FROM weather
WHERE date > ? AND ? > date
"""

class WeatherData:
  def __init__(self, id, date, temperature, humidity):
    self.id = id
    self.date = date
    self.temperature = temperature
    self.humidity = humidity
  
  def serialize(self):
    return {
      'id': self.id,
      'date': self.date,
      'temperature': self.temperature,
      'humidity': self.humidity
    }

@app.route('/weather', methods=['GET'])
def weather():
  DB_CONNECTION = sqlite3.connect('../weather-grabber/weather.db')
  cursor = DB_CONNECTION.cursor()
  now = datetime.now()
  yesterday = now - timedelta(days=1)

  cursor.execute(WEATHER_QUERY, (yesterday, now))
  data = cursor.fetchall()
  DB_CONNECTION.close()

  mapped_data = [WeatherData(row[0], row[1], row[2], row[3]).serialize() for row in data]

  response = jsonify({'weather': mapped_data})
  response.headers.add("Access-Control-Allow-Origin", "*")
  return response

if __name__ == "__main__":
  app.run(host='0.0.0.0')