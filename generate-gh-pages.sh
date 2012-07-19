#!/usr/bin/env bash
if [ -z $(git status --porcelain) ];
then
    git checkout gh-pages
    ./build.js
    git add index.html
    git commit -m'automatically generated gh-pages'
    git push origin gh-pages
    git co master
else
    echo "PLEASE COMMIT YOUR CHANGE FIRST!!!"
    echo git status
fi