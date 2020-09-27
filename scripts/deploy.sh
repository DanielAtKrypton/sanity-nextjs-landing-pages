#!/bin/sh

git merge -s ours origin $1 # Merge branches, but use our (=staging) branch head
git checkout $1
git merge master
git commit -a -m "Machine deploy"
git remote set-url origin "https://$2@github.com/krypton-unite/website.git"
git push origin master