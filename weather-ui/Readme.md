# Weather UI

Small react app to display graph of temperature/humidity

## Prerequisites

- nginx

## Running

Make sure `weather-api` is configured and running.
Then run `npm start`, to start web app.

## Building for production

### Build app

If you are using Raspberry it will be faster to build it on your PC and transfer it to Raspberry.
It takes 30+ mins to install nvm and compile node from sources on PI Zero.

Create `.env.prod` file and add line

```
API_URL=http://<IP_ADDRESS>/api/weather
```

Then run `npm run build` command to build the app.

### Deploy

Create new directory `weather-ui` inside `/var/www/`.
Copy `dist` directory contents to `/var/www/weather-ui` directory on your server.

Change owner to `www-data` by running`sudo chown www-data:www-data -R weather-ui/`

### Configure nginx proxy

Remove default NGINX config file `sudo rm /etc/nginx/sites-enabled/default`.

Copy `weather-station.conf` file to `/etc/nginx/sites-available/`

Link it to `sites-enabled` by running `sudo ln -s /etc/nginx/sites-available/weather-station.conf /etc/nginx/sites-enabled`
