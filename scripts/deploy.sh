#!/bin/sh

if [ -n "$GITHUB_API_KEY" ]; then
    cd "$TRAVIS_BUILD_DIR"
    git checkout $1
    git reset --hard master
    git add .
    git -c user.name='travis' -c user.email='travis' commit -m init
    # Make sure to make the output quiet, or else the API token will leak!
    # This works because the API key can replace your password.
    git push -f -q https://krypton-unite:$GITHUB_API_KEY@github.com/krypton-unite/website/$1 master &>/dev/null
    cd "$TRAVIS_BUILD_DIR"
fi