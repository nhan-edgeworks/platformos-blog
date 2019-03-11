# platformos-blog

# Local deployment

`mk deploy local -p`

# Creating new releae

1. Go to https://portal.apps.near-me.com/pos_modules/19 to get latest release version
2. Create new package with with correct version
  `cd modules; zip -r ../releases/v1.0.0.zip .; cd ..; ls releases`
3. Create new version and upload zip file
4. Create tag and push to Github
  ```
    git tag -a v1.0.4
    git push --tags
  ```
