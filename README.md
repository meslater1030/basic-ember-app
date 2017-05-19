# Basic Ember App

This is a short tutorial covering the basics of creating an Ember application. We will discuss the nature and basic
usage of Ember-Cli, the fundamentals of how Ember interacts with your JSON API, creating Templates and CSS,
Ember Routes and routing, Components and Controllers, and Testing.

#### Difficulty Level

This tutorial may be accessible to advanced or ambitious beginners but is written for developers with some
experience in writing [MVC web applications](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller).

#### Solution
This repository contains the end result of the tutorial. You'll be writing the application from scratch so no initial
cone of the repository is necessary.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/book/en/v1/Getting-Started-Installing-Git)
* [Node.js](https://nodejs.org/en/download/package-manager/)
  * NPM will be installed alongside Node. No additional installation will be necessary.
* [Bower](https://bower.io/#install-bower) (install with NPM)
* [Ember CLI](http://www.ember-cli.com/) (install with NPM)
* [PhantomJS](https://www.npmjs.com/package/phantomjs) (install with NPM)

## Getting Started: Ember-Cli

 You might at this point be wondering why you've installed something called Ember-Cli rather than just plain Ember. Ember-Cli
 is Ember's command line interface and it's an easy-to-use package of opinionated build tools for Ember itself.
 In future tutorials (TODO: add links here) you'll cover both Ember-Cli and it's foundation, [Broccoli](http://broccolijs.com/). 
 That said, until you know a little more about to use it don't worry too much about the specific nature of Ember-Cli.
 This will become more clear in time. For this tutorial you'll be using it to generate the bare bones of your models, routes and
 components.
 
Navigate to wherever you'd like this application to belong and run the following command:

```ember new basic-ember-app```

If you were creating your own project, you'd replace `basic-ember-app` with the name of your project. You should see command
line output that looks something like the following:  

```
~/Projects $ ember new basic-ember-app
version: 1.13.15
installing app
  create .bowerrc
  create .editorconfig
  create .ember-cli
  create .jshintrc
  create .travis.yml
  create .watchmanconfig
  create README.md
  create app/app.js
  create app/components/.gitkeep
  create app/controllers/.gitkeep
  create app/helpers/.gitkeep
  create app/index.html
  create app/models/.gitkeep
  create app/router.js
  create app/routes/.gitkeep
  create app/styles/app.css
  create app/templates/application.hbs
  create app/templates/components/.gitkeep
  create bower.json
  create config/environment.js
  create ember-cli-build.js
  create .gitignore
  create package.json
  create public/crossdomain.xml
  create public/robots.txt
  create testem.json
  create tests/.jshintrc
  create tests/helpers/destroy-app.js
  create tests/helpers/module-for-acceptance.js
  create tests/helpers/resolver.js
  create tests/helpers/start-app.js
  create tests/index.html
  create tests/integration/.gitkeep
  create tests/test-helper.js
  create tests/unit/.gitkeep
  create vendor/.gitkeep
Successfully initialized git.
Installing packages for tooling via npm.(node:92334) fs: re-evaluating native module sources is not supported. If you are using the graceful-fs module, please update it to a more recent version.
Installed packages for tooling via npm.
Installed browser packages via Bower.
```
