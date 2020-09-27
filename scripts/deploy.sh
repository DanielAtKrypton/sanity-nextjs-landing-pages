#!/bin/sh

git checkout master
git merge -s ours $1 # Merge branches, but use our (=staging) branch head
git checkout $1
git merge master
git remote set-url origin $2