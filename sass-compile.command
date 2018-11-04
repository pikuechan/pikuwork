#!/bin/sh

cd $(dirname $0)
sass --watch scss:scss/css --style expanded --cache-location scss/.sass-cache
#sass --watch scss:scss/css --style expanded --no-cache