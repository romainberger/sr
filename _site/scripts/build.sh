#!/bin/bash

timestamp() {
  date +"%s"
}

NAME="index-$(timestamp)"

rm src/index-*

cp src/index.js "src/$NAME.js"

# todo make the regex match index-[0-9]+
sed -i -e "s/index\.js/$NAME\.js/g" index.html
