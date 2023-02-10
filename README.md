# Svelte kit app

[make_link]: https://www.gnu.org/software/make/
[docker_link]: https://docs.docker.com/install/
[chocolatey_link]: https://chocolatey.org/install
[npm_link]: https://www.npmjs.com/get-npm
[nodejs_link]: https://nodejs.org/en/download/
[nvm_link]: https:// 

This is a Svelte kit app. It is configured for local and docker development via Makefile and .env. Tested for Windows 11.

## Requirements

- [Docker][docker_link]
- docker-compose (that should be included in the docker installation)
- Make
  - You can install [Make][make_link] with [Chocolatey][chocolatey_link] package mangaer on Windows.
- [NodeJS][nodejs_link] version 19.0.0 or higher
- [NPM][npm_link] version 7.0.0 or higher
- (optional) [NVM][nvm_link] for managing NodeJS versions

## Setup

1. Clone the repository

  ### Local development

2A. Install the dependencies with `make prepare`
3A. Start the development server with `make dev`

  ### Docker development
  2B. Install the dependencies with `make prepare`

You can preview the production build with `npm run preview` inside the /app folder.
> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
