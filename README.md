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



# Blog Setup Instructions

After installation go to http://YOUR_INSTANCE_URL/log-in and log in with email admin@example.com and password admin1234. You can now access the dashboard located under url http://YOUR_INSTANCE_URL/dashboard, and set up your blog.
