#!/usr/bin/env bash
#####################################################################
#@Description   Script to load the information about the feed handler
#####################################################################

#Collect script info
script_name=$( basename $0 )
dir_name=$( dirname $0  )
log_file=$(echo $script_name | cut -d'.' -f 1).log

repo_home=~/git/speed-test-rpi

cd "${dir_name}"/../

function log() {
    currDate=$( date "+%Y%m%d-%H%M%S" )
    currDay=$( date "+%Y%m%d" )
    msg=$1
    echo "${currDate}   -   ${msg}"

    mkdir -p logs
    echo "${currDate}   -   ${msg}" >> logs/${log_file}-${currDay}.log
}

log "TableData updater started"

log "Checking out project" 
git pull

log "Perform speed test"
cd node

node speedtest.js

log "Update git repo" 

git add .

git commit -m "Automated - Update speedtest table data"

git push

log "TableData updater ended"