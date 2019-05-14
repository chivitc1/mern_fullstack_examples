# mern_fullstack_examples
Mongo, Express, React, NodeJS learning

## Setup for first time

If you are using Mac OS - install realpath util (Optional)

$ brew install coreutils

Install node js dependencies fro back-end and front-end project

$ cd social-media/

$ yarn setup

Clone and update .env file after clone source code from github:

$ cp ./envs/example.env ./envs/.env

## Start DB

At project root dir:

$ docker-compose up -d

## Start in dev mode

$ yarn startServer

$ yarm startClient

## Debug backend

Start back-end in debug mode port 5858:

$ cd back-end/

$ yarn debug

Start VSCode debug process: Ctrl + Shift + D

Browse to: http://localhost:3001

## Test app

API server: http://localhost:3001/api/

$ curl -i -X POST -H "Accept: application/json" -H "Content-Type: application/json" "http://localhost:3001/api/users" -d '{"name": "user1", "email": "user1@example.com", "password": "1234567"}'

$ curl -X GET -H "Accept: application/json" "http://localhost:3001/api/users"

Front-end: http://localhost:3000
