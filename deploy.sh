#!/bin/bash

source ~/.bashrc
nvm use 11.2.0
yarn install
yarn run build
