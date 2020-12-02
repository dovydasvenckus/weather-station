from datetime import (datetime, timedelta)
from flask import (Flask, jsonify)
import sqlite3

app = Flask(__name__)
app.config["DEBUG"] = True

WEATHER_QUERY = """
SELECT * FROM weather
WHERE date > ? AND ? > date
"""

@app.route('/api/weather', methods=['GET'])
def weather():
  DB_CONNECTION = sqlite3.connect('../weather-grabber/weather.db')
  cursor = DB_CONNECTION.cursor()
  now = datetime.now()
  yesterday = now - timedelta(days=1)

  cursor.execute(WEATHER_QUERY, (yesterday, now))
  data = cursor.fetchall()
  DB_CONNECTION.close()
  return jsonify(data)

app.run()