#!/bin/bash

#  intialize a node project
npm init

# intialize a git repo
git init

# creating the files
mkdir scripts/ middlewares/ config/ controllers/ env/ utils/ models/ routes/ test/

# adding index.js file to all the folders except the env and scripts folders
for folder in $(ls -d */)
do
    case "$folder" in
        *"scripts") ;;
        *"env"*) ;;
        *) touch $folder/index.js
            echo "adding index.js to $folder"
            ;;
    esac
done

# server entrypoint
touch index.js

# creating Docekrfile and Docekrfile.test
touch Docekrfile Docekrfile.test

# my .ignores files
echo "node_modules" >> .gitignore &&
    cp .gitignore .dockerignore &&
    touch .eslintignore

# install basic dependencies
npm i --save express cors express-basic-auth eslint helmet mongoose

# generate a basic eslint config
./node_modules/.bin/eslint --init
