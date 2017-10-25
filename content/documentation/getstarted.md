+++
title = "Get started"
weight = 20
+++

### How to get started

Here we explain how to start playing with [Hugo](https://gohugo.io) and 
our [Scientific Computing Group Thema](https://github.com/scgmlz/scgdoc-hugo).


#### Install Hugo

* Downloads latest hugo from [here](https://github.com/gohugoio/hugo/releases).
* Archive will contain single binary which you will have to put to your `$HOME/bin` directory, for example

#### Clone the prototype of our site, run Hugo on it

```
$ git clone https://github.com/scgmlz/scgdoc-hugo.git
$ cd <source>
$ hugo server -D
```

Open web-browser using address Hugo will tell you (most probably http://localhost:1313/scgdoc-hugo/)



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