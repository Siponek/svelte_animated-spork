#!/bin/bash

# Define a funtion that will either run the production or development server
run_server () {
    if [[ $DOCKER_PRODUCTION == true ]]; then
        echo "Running PRODUCTION server on port $OUTER_PORT_FRONTEND"
        cp ./package.json ./build/package.json
        cp ./pnpm-lock.yaml ./build/pnpm-lock.yaml
        # dirty fix for vite
        cp -r ./node_modules/vite/dist ./build/
        # from sveltekit docs: https://kit.svelte.dev/docs/adapter-node
        # npm ci --prefix ./build

        # node ./build
        # pm2 start ./build/index.js --name svelte-compose --watch --no-daemon
        # npx pm2 start ./build/index.js --name svelte-compose --watch --no-daemon
        pnpm pm2 start ./build/index.js --name svelte-compose --watch --no-daemon
        # npx pnpm pm2 start ./build/index.js --name svelte-compose --watch --no-daemon
    else
        echo "Running DEVELOPMENT server"
        pnpm dev
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

