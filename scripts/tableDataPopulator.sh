#!/usr/bin/env bash
#####################################################################
#@Description   Script to load the information about the feed handler
#####################################################################

#Collect script info
script_name=$( basename $0 )
dir_name=$( dirname $0  )

repo_home=~/git/speed-test-rpi

cd "${dir_name}"/../

function log() {
    currDate=$( date "+%Y%m%d-%H%M%S" )
    msg=$1
    echo "${currDate}   -   ${msg}"
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

log "TableData updater ended"