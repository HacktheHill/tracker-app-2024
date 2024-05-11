# Tracker App

<small>We are actively brainstorming a cooler name for the app :)</small>

## Development Environment Setup

The entire app has been containerized using [Docker](https://www.docker.com/). 

1. Download Docker. The following instructions are for Linux/WSL users.
    1. Run `sudo apt update`
    2. Run `sudo apt install docker.io`
    3. Run `sudo usermod $USER -aG docker`
    4. Restart your terminal
2. Download Docker-Compose. 
    1. Add steps...
    2. A common issue some Windows users face is that they have to open Docker Desktop before using docker-compose. If you are running into issues with using docker-compose, try that.
3. In your terminal, navigate to this app's directory and run the following command: `docker-compose up`. 
    - Going forward, to spin up your local development environment, just run `docker-compose up`.
4. Boom you're done! You can now access the app at: http://localhost:3000
