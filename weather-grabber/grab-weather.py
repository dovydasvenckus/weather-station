#!/usr/bin/env python3

import Adafruit_DHT
import sqlite3
import datetime

DHT_SENSOR = Adafruit_DHT.DHT22
DHT_PIN = 4

DB_CONNECTION = sqlite3.connect('weather.db')
CREATE_TABLE_QUERY = """
CREATE TABLE IF NOT EXISTS weather (
    date DATETIME,
    temperature REAL,
    humidity REAL
)
"""
INSERT_QUERY = 'INSERT INTO weather (date, temperature, humidity) VALUES (?, ?, ?)'


now = datetime.datetime.now()
humidity, temperature = Adafruit_DHT.read_retry(DHT_SENSOR, DHT_PIN)

if humidity is not None and temperature is not None:
    DB_CONNECTION.execute(CREATE_TABLE_QUERY)
    DB_CONNECTION.execute(INSERT_QUERY, (now, round(temperature, 2), round(humidity, 2)))
    DB_CONNECTION.commit()
    DB_CONNECTION.close()
else:
    print("Failed to retrieve data from humidity sensor")