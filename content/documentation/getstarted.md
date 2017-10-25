+++
title = "Get started"
weight = 20
+++

Please explain how to start.

* How to install hugo
* How to set-up gh-pages branch.
* How to modify content (i.e. add item to the documentation) and publish on gh-pages.

#### Deployment to gh-pages branch

While being in master branch

```
# remove previous publication
rm -rf public
mkdir public

# clone gh-pages branch from the local repo into a repo located within "public"
git clone .git --branch gh-pages public
  
# generate
hugo
  
# commit the changes in the clone and push them back to the local gh-pages branch    
cd public && git add --all && git commit -m "Publishing to gh-pages" && git push origin gh-pages

# publish
git push upstream gh-pages
```