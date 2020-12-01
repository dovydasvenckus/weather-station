# Grab weather script

Small **Python 3** script for retrieving temperature and humidity from **DH22** sensor.
It persists timestamp, temperature and humidity inside **sqlite** database.

## Two ways for starting app

Using globally installed `pip` library instead of `pyenv` shaves time from script startup. On Raspberry Pi Zero startup time using `pyenv` is around 20 seconds. In projects powered by batteries `pip` should increase battery life, due lower CPU load.

### Running using pip

- Install pip
- Run `pip3 install Adafruit_DHT`
- Run `python3 grab-weather.py`

Cron example:
`*/5 \* \* \* \* cd <PATH_TO_SCRIPT> && /usr/bin/python3 grab-weather.py >> <PATH_TO_LOG>/weather.log 2>&1`

### Running using pypenv

- Install pipenv
- Run `pipenv install`
- Run `pipenv run python3 grab-weather.py`

Cron example:
`\*/5 \* \* \* \* cd <PATH_TO_SCRIPT> && /usr/bin/pipenv run python3 grab-weather.py >> <PATH_TO_LOG>/weather.log 2>&1`
