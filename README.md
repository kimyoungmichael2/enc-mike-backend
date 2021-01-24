## What is this?

This is the server app for the Encourage Mike app (https://michaelyoung.kim, at the time of writing this).

## Deployment

Currently this app is deployed on my Raspberry Pi at home.
It's using port 5000, and my Nginx server is reverse proxying it to michaelyoung.kim/api/, which is where my frontned is consuming it.
It's not dockerized or daemonized in any way, nor is there a cron service setup to restart this app as of writing this. 
This means if the Pi shuts down for whatever reason, I will have to manually restart the service.
If this app is down, you can restart it if you can SSH into my Pi.

I'll look into using Docker or some other solution when I feel I need to. Just can't see why I'd need it yet. 
