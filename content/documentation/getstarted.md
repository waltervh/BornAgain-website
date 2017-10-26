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

#### Cloning our site

Our site repository contains two branches. `Master` branch contains the theme and markdown content of the site.
`gh-pages` branch contains generated html.

Clone our site.

```
$ git clone https://github.com/scgmlz/scgdoc-hugo.git
```

While being in `master` branch configure `public` directory to be a worktree for `gh-pages` branch (should be done only once).

```
$ git worktree add -B gh-pages public origin/gh-pages
```

Put `public` branch in `.gitignore`.

```
$ touch gitignore; echo '.public' >> .gitignore;  echo '.gitignore' >> .gitignore
```

#### Run Hugo, make you first changes

Run Hugo server on `master` branch.

```
$ cd <source>
$ hugo server -D
```

Open web-browser using address Hugo will tell you (most probably http://localhost:1313/scgdoc-hugo/).
Modify `<source>/content/_index.md` and see updated landing page in a browser. Commit your changes.

```
$ cd <source>; git add _index.md; git commit -m "my changes"; git push
```

#### Publishing new version of web site on GitHub

To generate new site in `public` run `hugo` without parameters.

```
$ hugo
```

Push new version of site to `gh-pages` using worktree syncronization.
```
cd public && git add --all && git commit -m "Publishing to gh-pages" && git push origin gh-pages
```
See details in [Deployment to gh-pages branch](https://discourse.gohugo.io/t/simple-deployment-to-gh-pages/5003)
