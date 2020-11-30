# Grab weather script

Small **Python** script for retrieving temperature and humidity from **DH22** sensor.
It persists timestamp, temperature and humidity inside **sqlite** database.

## Usage with cron

\*/5 \* \* \* \* cd <PATH_TO_SCRIPT> && /usr/bin/pipenv run python3 grab-weather.py >> <PATH_TO_LOG>/weather.log 2>&1
