#!/bin/bash

docker build -t "maxwai/homepage:$1" .
docker build -t maxwai/homepage:latest .
docker push "maxwai/homepage:$1"
docker push maxwai/homepage:latest