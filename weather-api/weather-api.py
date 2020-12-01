from flask import (Flask, jsonify)
import sqlite3

app = Flask(__name__)
app.config["DEBUG"] = True

WEATHER_QUERY = "SELECT * FROM weather"

@app.route('/api/weather', methods=['GET'])
def weather():
  DB_CONNECTION = sqlite3.connect('../weather-grabber/weather.db')
  cursor = DB_CONNECTION.cursor()
  cursor.execute(WEATHER_QUERY)
  data = cursor.fetchall()
  DB_CONNECTION.close()
  return jsonify(data)

app.run()