#!/usr/bin/env bash

curl -X PUT http://127.0.0.1:5984/couchdbschool

curl -H "Content-Type: application/json" -d '{"_id": "robert", "type": "human"}' -X POST http://127.0.0.1:5984/couchdbschool 

