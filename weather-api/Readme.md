# Weather api

## Prerequisites

Linux packages which can be installed on debian based systems with `sudo apt-get install <package-name>`

- python3
- python3-pip

## Install dependencies

`sudo pip3 install flask==2.0.1`
`sudo pip3 install uwsgi==2.0.19.1`

## Configure systemd service

Replace paths inside `uwsgi.ini` and `uwsgi.service` with your file system paths.
On Raspbian OS copy `uwsgi.service` to `/etc/systemd/system` directory.

Run `sudo systemctl enable uwsgi.service` and `sudo systemctl start uwsgi.service` to start uwsgi service.
To check if service is running run `sudo systemctl status uwsgi.service`.
