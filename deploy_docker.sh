#!/bin/bash

# Stop existing docker
docker-compose down
docker-compose stop
echo y | docker container prune
echo y | docker image prune
echo y | docker network prune
echo y | docker volume prune
# Re-build npm on local
nvm use 11.2.0
yarn install
yarn run build

# Re-build docker container
docker-compose build --no-cache

# Run docker-compose as deamon
docker-compose up -d