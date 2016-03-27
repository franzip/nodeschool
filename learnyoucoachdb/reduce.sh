#!/usr/bin/env bash

curl -H "Referer: localhost" -vX PUT http://127.0.0.1:5984/programming-languages-learn-couchdb/_design/languages -d @reduce.json
