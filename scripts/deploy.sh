#!/bin/sh

git checkout production
git reset --hard master
git push -f origin production