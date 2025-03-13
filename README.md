# Fastify OTEL POC

This project is a proof of concept (POC) for integrating OpenTelemetry (OTEL) with a Fastify server. The server includes a simple route and a recursive Fibonacci function.

## Project Structure

- `server.js`: Main server file that sets up Fastify routes and starts the server.
- `Dockerfile`: Docker configuration to containerize the application.
- `test.sh`: Script to run the application in a container with environment variables for OTEL configuration.

## Requirements

- Node.js 22
- npm

## Setup

1. Install dependencies:
    ```sh
    npm install
    ```

2. Run the server:
    ```sh
    node server.js
    ```

## Docker

To build and run the Docker container:

1. Build the Docker image:
    ```sh
    docker build -t fastify-otel-poc .
    ```

2. Run the Docker container with environment variables, if needed adjust OTLP endpoint:
    ```sh
    docker run -e OTEL_TRACES_EXPORTER="otlp" \
               -e OTEL_EXPORTER_OTLP_ENDPOINT="http://localhost:4318" \
               -e OTEL_NODE_RESOURCE_DETECTORS="env,host,os" \
               -e OTEL_SERVICE_NAME="fastify-otel-poc" \
               -e NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register" \
               -p 3000:3000 fastify-otel-poc
    ```

## Routes

- `/`: Returns a simple "hello world" message.
- `/fibonacci/:n`: Returns the Fibonacci number for the given `n`.

## License

This project is licensed under the MIT License.