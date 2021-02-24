# Scheduler API

Scheduler API is a generic scheduling REST API written in Node/Express. Some conventions that it enforces include:

1. allow an infinite number of appointments in a day but only allow a maximum of one appointment per user per day,
2. allow appointments only on the hour or half-hour
3. use UTC throughout in requests and responses

## Setup

To get the API up and running, you have the option to either run this project as a Docker image or in your own node.js environment.

### Option 1: Run as a Docker Image

- install docker on your local machine
- open a command line and type the following command

```bash
docker run --rm -p 8000:8000 mattcameron/maven_scheduler
```

### Option 2: Run on in your local node.js environment

- install the LTS version of node
- from the project root, type the following series of commands:
- ```bash
  npm install
  ```
- ```bash
  node server.js
  ```

### Verify that the app is running

_Verify that the app is up and running by navigating to localhost:8000 in your browser. You should see a message saying "Success, the API is up and running!"_

## Endpoints

The below endpoints will be prefixed by `localhost:8000`.

### _click the endpoint links for more details_

- [List Appointments for User](docs/get_endpoint.md) : `GET /appointments/:userId`
- [Schedule Appointment for User](docs/post_endpoint.md) : `POST /appointment`
