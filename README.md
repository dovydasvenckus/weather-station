# Weather-Station

Minimal project which will collect temperature/humidity from DHT22 sensors
and display data inside web browser.

Most of other Readme files are written mainly for Raspbian OS. Depending on your OS procedure may differ.

This project consists of three parts:

- weather-grabber (Script which grabs data from sensor and writes to sqlite database)
- weather-api (REST API which returns data from DB)
- weather-ui (Frontend which displays data retrieved from weather-api)

You should configure these three services in listed order
