# Svelte kit app

This is a Svelte kit app. It is configured for local and docker development via Makefile and .env. Tested for Windows 11.


Check these links for loading data from fetch API


https://www.youtube.com/watch?v=52nXUwQWeKI

https://www.youtube.com/watch?v=EQy-AYhZIlE

## Requirements

- [Docker][docker_link]
- docker-compose (that should be included in the docker installation)
- Make
  - You can install [Make][make_link] with [Chocolatey][chocolatey_link] package mangaer on Windows.
- [NodeJS][nodejs_link] version 19.0.0 or higher
- [NPM][npm_link] version 7.0.0 or higher
- (optional) [NVM][nvm_link] for managing NodeJS versions
- If you want to add some UI components, you can use [Svelte Add][svelte_add_link]
  - Example:
    - `pnpm add -D svelte-add@latest`
  - and
    - `pnpm svelte-add tailwindcss`

## Setup

1. Clone the repository

### Local development

- 2A. Install the dependencies with `make prepare`
- 3A. Start the development server with `make dev`

### Docker development

- 2B. Install the dependencies with `make prepare`
- 3B. Start the development server with `make build` and `make up`
  - Make sure to specify `DOCKER_PRODUCTION` to `false` in the `.env` file if you want to use the development server on docker.
    Or you can set `DOCKER_PRODUCTION` to `true` to run the production server on docker.

You can preview the production build with `npm run preview` inside the /app folder.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

[make_link]: https://www.gnu.org/software/make/
[docker_link]: https://docs.docker.com/install/
[chocolatey_link]: https://chocolatey.org/install
[npm_link]: https://www.npmjs.com/get-npm
[nodejs_link]: https://nodejs.org/en/download/
[nvm_link]: https://github.com/coreybutler/nvm-windows#readme
[svelte_add_link]: https://github.com/svelte-add/svelte-add
