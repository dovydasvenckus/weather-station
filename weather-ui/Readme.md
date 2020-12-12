# Weather UI

Small react app to display graph of temperature/humidity

## Running
Make sure `weather-api` is configured and running.
Then run `npm start`, to start web app.

## Building for production

### Build app

Create `.env.prod` file and add line

```
API_URL=<link-to-api>
```

Then run `npm run build` command to build the app.

### Deploy
Copy `dist` directory to `/var/www/weather-ui` directory on your server.

Change owner to `www-data` by running`sudo chown www-data:www-data -R weather-ui/`

### Configure nginx proxy
Copy `weather-station.conf` file to `/etc/nginx/sites-available/`

Link it to `sites-enabled` by running `sudo ln -s /etc/nginx/sites-available/weather-station.conf /etc/nginx/sites-enabled`
