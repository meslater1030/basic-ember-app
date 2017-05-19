# Basic Ember App

This is a short tutorial covering the basics of creating an Ember application. We will discuss the nature and basic
usage of Ember-Cli, the fundamentals of how Ember interacts with your JSON API, creating Templates and CSS,
Ember Routes and routing, Components and Controllers, and Testing.

#### Difficulty Level

This tutorial may be accessible to advanced or ambitious beginners but is written for developers with some
experience in writing [MVC web applications](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) 
and who have a working knowledge of ES6.

#### Solution
This repository contains the end result of the tutorial. You'll be writing the application from scratch so no initial
clone of the repository is necessary.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/book/en/v1/Getting-Started-Installing-Git)
* [Node.js](https://nodejs.org/en/download/package-manager/)
  * NPM will be installed alongside Node.
* [Bower](https://bower.io/#install-bower) (install with NPM)
* [Ember CLI](http://www.ember-cli.com/) (install with NPM)
* [PhantomJS](https://www.npmjs.com/package/phantomjs) (install with NPM)

## Getting Started: Ember-Cli

 You might at this point be wondering why you've installed something called Ember-Cli rather than just plain Ember. Ember-Cli
 is Ember's command line interface and it's an easy-to-use package of opinionated build tools for Ember itself.
 In future tutorials (TODO: add links here) you'll cover both Ember-Cli and it's foundation, [Broccoli](http://broccolijs.com/). 
 That said, until you know a little more about how to use it don't worry too much about the specific nature of Ember-Cli.
 This will become more clear in time. For this tutorial you'll be using it to generate the bare bones of your application, models, routes and
 components.
 
Navigate to wherever you'd like this application to belong and run the following command:

```ember new basic-ember-app```

If you were creating your own project, you'd replace `basic-ember-app` with the name of your project. You should see command
line output that looks something like the following (your results may vary slightly depending on the exact version of ember-cli
you've installed):  

```
~/Projects $ ember new ember-app
installing app
  create .editorconfig
  create .ember-cli
  create .eslintrc.js
  create .travis.yml
  create .watchmanconfig
  create README.md
  create app/app.js
  create app/components/.gitkeep
  create app/controllers/.gitkeep
  create app/helpers/.gitkeep
  create app/index.html
  create app/models/.gitkeep
  create app/resolver.js
  create app/router.js
  create app/routes/.gitkeep
  create app/styles/app.css
  create app/templates/application.hbs
  create app/templates/components/.gitkeep
  create config/environment.js
  create config/targets.js
  create ember-cli-build.js
  create .gitignore
  create package.json
  create public/crossdomain.xml
  create public/robots.txt
  create testem.js
  create tests/.eslintrc.js
  create tests/helpers/destroy-app.js
  create tests/helpers/module-for-acceptance.js
  create tests/helpers/resolver.js
  create tests/helpers/start-app.js
  create tests/index.html
  create tests/integration/.gitkeep
  create tests/test-helper.js
  create tests/unit/.gitkeep
  create vendor/.gitkeep
NPM: Installed dependencies
Successfully initialized git.
```

Ember-Cli has created the bones of your application for you. This includes your basic MVC setup as well as a couple of things
that are more specific to Ember. Notably, tests are also included.

To run the app use `ember serve`. The output should look something like this:

```
~/Projects/basic-ember-app $ ember serve
version: 1.13.15
Livereload server on http://localhost:49152
Serving on http://localhost:4200/

Build successful - 4915ms.

Slowest Trees                                 | Total
----------------------------------------------+---------------------
ConcatWithMaps: Concat: Vendor                | 2187ms
broccoli-persistent-filter:Babel              | 1016ms

Slowest Trees (cumulative)                    | Total (avg)
----------------------------------------------+---------------------
ConcatWithMaps: Concat: Vendor (1)            | 2187ms
broccoli-persistent-filter:Babel (4)          | 1339ms (334 ms)
broccoli-persistent-filter:Babel > [Ba... (2) | 270ms (135 ms)
```

Navigate to localhost:4200. You should see a page that says "Congratulations, you made it!":

### Troubleshooting
(TODO: try to think of stuff that might have gone wrong)

## Ember-Data
In this application, you're going to build an investment platform. It will include investors, investments, advisors
and accounts. Before building out templates and forms to handle that information you'll need a way to retrieve
and manage the data itself. Ember-Data is the data persistence library that comes pre-packaged with any Ember app.
