#!/usr/bin/env bash
export $(grep -v '^#(.+)$' envs/.env | xargs)

SCRIPT_PATH=$0
function set_current_working_dir() {
  cd "$(dirname "$(realpath $SCRIPT_PATH)")/../$1";
  pwd
}

set_current_working_dir "front-end"
yarn install
cd ..

set_current_working_dir "back-end"
yarn install
cd ..