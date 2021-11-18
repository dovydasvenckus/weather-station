from datetime import (datetime, timedelta)
from flask import (Flask, request, jsonify)
import sqlite3

app = Flask(__name__)
app.config["DEBUG"] = True

WEATHER_QUERY = """
SELECT rowid, * FROM weather
WHERE date > ? AND ? > date
"""

CURRENT_WEATHER_QUERY = """
SELECT rowid, * FROM weather
ORDER BY date DESC
LIMIT 1
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

def __resolve_date(date):
  if date is not None:
    return datetime.strptime(date, '%Y-%m-%d')
  else:
    return datetime.now()

def __connect_to_db():
  return sqlite3.connect('../weather-grabber/weather.db')

@app.route('/api/weather', methods=['GET'])
def weather():
  supplied_date=request.args.get('date')

  DB_CONNECTION = __connect_to_db()
  cursor = DB_CONNECTION.cursor()
  start_date = __resolve_date(supplied_date) + timedelta(days=1)
  end_date = start_date - timedelta(days=1)

  cursor.execute(WEATHER_QUERY, (end_date, start_date))
  data = cursor.fetchall()
  DB_CONNECTION.close()

  mapped_data = [WeatherData(row[0], row[1], row[2], row[3]).serialize() for row in data]

  response = jsonify({'weather': mapped_data})
  response.headers.add("Access-Control-Allow-Origin", "*")
  return response

@app.route('/api/weather/current', methods=['GET'])
def current_weather():
  DB_CONNECTION = __connect_to_db()
  cursor = DB_CONNECTION.cursor()

  cursor.execute(CURRENT_WEATHER_QUERY)

  data = cursor.fetchone()
  DB_CONNECTION.close()

  mapped_data = WeatherData(data[0], data[1], data[2], data[3]).serialize()

  response = jsonify(mapped_data)
  return response


if __name__ == "__main__":
  app.run(host='0.0.0.0')