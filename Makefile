#
#? Settings and Variables (Works for windows 11)
#? CURDIR is the directory of the Makefile, even if it is called from a subdirectory with make -C
#
DOCKER_COMPOSE_FILE := $(CURDIR)/docker/docker-compose.yaml
ENV_FILE := $(CURDIR)/env/docker.env
DOCKER_FLAGS := --file $(DOCKER_COMPOSE_FILE) --env-file $(ENV_FILE)
DOCKER_COMPOSE := docker compose $(DOCKER_FLAGS)
NPX_PREFIX := npx --prefix $(CURDIR)/app

.PHONY: print
print:
	@echo "CURDIR" $(CURDIR)
	@echo "@D" $(@D)
	@echo "@F" $(@F)
	@echo "@" $(@)
	@echo "%" $(%)
	@echo "%D" $(%D)

.PHONY: .ONESHELL
.ONESHELL:

#
#? NPM local
#
.PHONY: prepare
prepare:
	npm --prefix $(CURDIR)/app install pnpm
	NPX_PREFIX pnpm add

.PHONY: server-build
server-build:
	NPX_PREFIX pnpm build

.PHONY: dev
dev:
	NPX_PREFIX pnpm dev

#
#? Docker
#
.PHONY: up
up:
	$(DOCKER_COMPOSE) up

.PHONY: build
build:
	$(DOCKER_COMPOSE) build

.PHONY: down
down:
	$(DOCKER_COMPOSE) down

.PHONY: clean
clean:
	$(DOCKER_COMPOSE) down --remove-orphans --volumes

