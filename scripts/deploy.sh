#!/bin/bash

git checkout origin $1
git reset --hard master
git push deploy $1