# Test against otel-collector running on mtlp_network
podman run --init --network mtlp_box_poc_mltp_network -e OTEL_TRACES_EXPORTER="otlp" \
           -e OTEL_EXPORTER_OTLP_ENDPOINT="http://opentelemetry-collector:4318" \
           -e OTEL_NODE_RESOURCE_DETECTORS="env,host,os" \
           -e OTEL_SERVICE_NAME="fastify-otel-poc" \
           -e NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register" \
           -p 3000:3000 docker.io/tuxtor/fastify-otel-poc:0.0.1