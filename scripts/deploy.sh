#!/bin/sh

git checkout $1
git reset --hard master
git push -f origin $1