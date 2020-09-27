#!/bin/sh
# Credit: https://gist.github.com/willprice/e07efd73fb7f13f917ea

setup_git() {
  git config --global user.email "automatedtradesystem@kryptonunite.com"
  git config --global user.name "Machine At Krypton"
}

commit_country_json_files() {
  git fetch
  git checkout production
  # Current month and year, e.g: Apr 2018
  dateAndMonth=`date "+%b %Y"`
  # Stage the modified files in dist/output
  git add -f dist/output/*.json
  # Create a new commit with a custom build message
  # with "[skip ci]" to avoid a build loop
  # and Travis build number for reference
  git commit -m "Travis update: $dateAndMonth (Build $TRAVIS_BUILD_NUMBER)" -m "[skip ci]"
}

upload_files() {
  # Remove existing "origin"
  git remote rm origin
  # Add new "origin" with access token in the git URL for authentication
  git remote add origin https://krypton-unite:${GH_DEPLOY_KEY}@github.com/krypton-unite/website.git > /dev/null 2>&1
  git push origin production --quiet
}

setup_git

commit_country_json_files

# Attempt to commit to git only if "git commit" succeeded
if [ $? -eq 0 ]; then
  echo "A new commit with changed country JSON files exists. Uploading to GitHub"
  upload_files
else
  echo "No changes in country JSON files. Nothing to do"
fi