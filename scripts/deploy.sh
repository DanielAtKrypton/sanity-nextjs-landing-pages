#!/bin/sh
# Credit: https://gist.github.com/willprice/e07efd73fb7f13f917ea

# commit_website_files() {
#   git checkout -b gh-pages
#   git add . *.html
#   git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
# }

setup_git() {
  git config --global user.email "automatedtradesystem@kryptonunite.com"
  git config --global user.name "Machine At Krypton"
}

commit_website_files() {
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
  # Add new "origin" with access token in the git URL for authentication
  git remote add origin-workflow $GITHUB_REPOSITORY > /dev/null 2>&1
  git push origin --quiet --set-upstream origin-workflow production
}

setup_git
commit_website_files
upload_files