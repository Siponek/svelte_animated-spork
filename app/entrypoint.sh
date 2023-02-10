#!/bin/bash

# Define a funtion that will either run the production or development server
run_server () {
    if [[ $DOCKER_PRODUCTION == true ]]; then
        echo "Running production server"
        npx pnpm pm2 start ./node_build/index.js --name svelte-compose --watch --no-daemon
    else
        echo "Running development server"
        npx pnpm dev
    fi
}
# Check if this is
if [[ ! -v DOCKER_PRODUCTION ]]; then
    echo "DOCKER_PRODUCTION is not set"
    exit 1
elif [[ -z "$DOCKER_PRODUCTION" ]]; then
    export DOCKER_PRODUCTION=false
    echo "DOCKER_PRODUCTION was set to the empty string"
    run_server
else
    echo "DOCKER_PRODUCTION has the value: $DOCKER_PRODUCTION"
    run_server
fi

