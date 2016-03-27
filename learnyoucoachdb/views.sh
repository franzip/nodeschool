#!/usr/bin/env bash

curl -H "Content-Type: application/json" -H "Referer: localhost" -vX PUT http://127.0.0.1:5984/things-learn-couchdb/_design/thingsMadeOfMetal -d @views.json
