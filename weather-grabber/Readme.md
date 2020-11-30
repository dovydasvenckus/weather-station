# Grab weather script

Small **Python 3** script for retrieving temperature and humidity from **DH22** sensor.
It persists timestamp, temperature and humidity inside **sqlite** database.

## Running using pip

- Install pip
- Run `pip install Adafruit_DHT`
- Run `python3 grab-weather.py`

### Usage with cron

\*/5 \* \* \* \* cd <PATH_TO_SCRIPT> && /usr/bin/python3 grab-weather.py >> <PATH_TO_LOG>/weather.log 2>&1

## Running using pypenv

- Install pipenv
- Run `pipenv install`
- Run `pipenv run python3 grab-weather.py`

### Usage with cron

\*/5 \* \* \* \* cd <PATH_TO_SCRIPT> && /usr/bin/pipenv run python3 grab-weather.py >> <PATH_TO_LOG>/weather.log 2>&1
