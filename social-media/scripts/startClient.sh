#!/usr/bin/env bash
# export $(grep -v '^#(.+)$' ./envs/.env | xargs)

echo $REACT_APP_API_PORT

SCRIPT_PATH=$0
function set_current_working_dir() {
  cd "$(dirname "$(realpath $SCRIPT_PATH)")/../$1";
}

set_current_working_dir "front-end"
yarn start
cd ..