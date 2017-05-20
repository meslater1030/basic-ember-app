# Basic Ember App

This is a short tutorial covering the basics of [CRUD operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) within an Ember app. 
We will discuss the nature and basic usage of ember-cli, the fundamentals of how Ember interacts with your JSON API, creating Templates and
Ember Routes.

#### Difficulty Level

This tutorial may be accessible to advanced or ambitious beginners but is written for developers with some
experience in writing [MVC web applications](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) 
and who have a working knowledge of ES6.

If you have ever created an Ember app before you can probably skip this tutorial and try the next one.

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

## Getting Started: ember-cli

 You might at this point be wondering why you've installed something called ember-cli rather than just plain Ember. ember-cli
 is Ember's command line interface and it's an easy-to-use package of opinionated build tools for Ember itself.
 In future tutorials you'll cover both ember-cli and it's foundation, [Broccoli](http://broccolijs.com/). 
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

ember-cli has created the bones of your application for you. This includes your basic MVC setup as well as a couple of things
that are more specific to Ember. Notably, tests are also included.

To run the app use `ember serve`. The output should look something like this:

```
~/Projects/basic-ember-app $ ember serve
Livereload server on http://localhost:49153

Build successful (7995ms) – Serving on http://localhost:4200/



Slowest Nodes (totalTime => 5% )              | Total (avg)
----------------------------------------------+---------------------
Babel (15)                                    | 6882ms (458 ms)
```

Navigate to localhost:4200. You should see a page that says "Congratulations, you made it!":

### Routing
You'll start your app by retrieving a list of investments and displaying them on a page. In the real world
if this is all you needed to do you'd be a fool to do it with something as heavy-weight as Ember. 
As you'll see, a fair number of steps are required set up the page for such a simple task. 
However, for the purposes of learning the framework it's helpful to start with CRUD operations
and for you the first of those will be retrieval.

You can use ember-cli to generate a route:
`ember generate route investments`

output:
```
~/Projects/basic-ember-app $ ember generate route investments
installing route
  create app/routes/investments.js
  create app/templates/investments.hbs
updating router
  add route investments
installing route-test
  create tests/unit/routes/investments-test.js
```

For more information about what kinds of things you can generate with ember-cli use `ember generate help`. 
In this case the command has created a blank route and template for your investments. it has also added an investments
route to the router and created a unit test for your new route. If you navigate to localhost:4200/investments
you'll see that the page loads with the same text as the home page. In the future you'll use the new investments
route and template to retrieve and display all available investments but before you can do that you need to 
learn how data is retrieved and manipulated in Ember.

### Your API
Ember apps assume that your data will be provided via an API that follows the [JSON API specification.](http://jsonapi.org/format/)
If your API does not follow those specifications it's still possible to configure your Ember application
in another way. (TODO: link to tutorial) For this tutorial however, you'll use the JSON API provided at http://someUrl/api.

(TODO: Make an API that can be accessible publicly. Requiring the use of an addon is too much mental overhead for this tutorial.)

By default, Ember will attempt to access an API from the same origin as your Ember application. So in this case http://localhost:4200. 
It's possible to specify another API origin by creating an application-wide api adapter. 

You can use ember-cli to generate an adapter.

`ember generate adapter application`

output:
```
~/Projects/basic-ember-app $ ember generate adapter application
installing adapter
  create app/adapters/application.js
installing adapter-test
  create tests/unit/adapters/application-test.js
```

Update the `basic-ember-app/app/adapters/application.js` file as follows:

```
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:5000/api'
});
```

Now all api calls for all models will be made to `http://localhost:5000/api/whatever`.

## Ember-Data
In this application, you're going to display information about investments. Before building out templates and forms to handle that 
information you'll need a way to retrieve and manage the data itself. Ember-Data is the data persistence library that comes 
pre-packaged with any Ember app. You'll be using it to create models and retrieve information from an API.

You can use ember-cli to generate an ember-data model. 

`ember generate model investment symbol:string unitPrice:number exchange:string`

output:
```
~/Projects/basic-ember-app $ ember generate model investment symbol:string unitPrice:number exchange:string
installing model
  create app/models/investment.js
installing model-test
  create tests/unit/models/investment-test.js
```

You've generated a model called investment with two properties that are strings and one that is a number. You've
also generated a unit test for that model. If you navigate to `basic-ember-app/app/models/investment.js` You should see
the following:

```
import DS from 'ember-data';

export default DS.Model.extend({
  symbol: DS.attr('string'),
  unitPrice: DS.attr('string'),
  exchange: DS.attr('string')
});
```

Now that you have an investment model, you'll want to retrieve and 
display those investments. The DS.Model object from Ember-Data will
manage CRUD operations in the following way (for now, don't worry too much about what the 'store' is):

Create:

`this.get('store').createRecord('investment', { symbol, unitPrice, exchange })` corresponds to a POST API call to `http://www.myUrl.com/api/investments`

Retrieve:

`this.get('store').findAll('investment')` corresponds to a GET API call to `http://www.myUrl.com/api/investments`

Update:

`investment.save()` corresponds to a PUT API call to `http://www.myUrl.com/api/investments/id`

Delete:

`investment.delete()` corresponds to a DELETE API call to `http://www.myUrl.com/api/investments/id`.

For now, you'd just like to retrieve the available investments. This can be done in a variety of ways but
you'll go ahead and use the investment route you generated earlier.

## Display your investments
Go to `basic-ember-app/app/routes/investments` and update it to load your investments.

```
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
        investments: this.get('store').findAll('investment')
    });
  }
});
```
As noted above, `this.get('store').findAll('investment')` will make a GET API call to `http://www.myUrl.com/api/investments`
and will return every available investment. `findAll` is a method that returns a promise.

Once a model is defined within a route, that information will be made available to the controller
of the same name as that route and therefore also the template. In your case
it would be simple enough to just return `this.get('store').findAll('investment')` as the entire model. However, that
implementation isn't particularly flexible if more information will ultimately be required. Therefore, returning
a hash of promises provides you with the ability to load more models if necessary.

Go to `basic-ember-app/app/templates/application` and delete the `{{welcome-page}}` found there.

Go to `basic-ember-app/app/templates/investments` and update it to display your investments.

```
{{#each model.investments as |investment|}} {{!-- The investment variable can be given any name --}}
  <p>
      {{investment.symbol}} {{investment.unitPrice}} {{investment.exchange}}
  </p>
{{/each}}
```

Navigate to localhost:4200/investments and you should now see a rather boring list of
investment ticker symbols, prices and the exchanges on which they are sold.

## But what about the controller?
You may have noticed that while we've referred to Ember as an MVC framework there's no 'C' in the app as it currently exists.
You may also have noticed that the app is pretty ugly as it currently exists. 
Since you haven't required any particular display modifications it doesn't 
currently make sense to require a controller or component. More information
on customizing display options will be given in the next tutorial.


Do you really want to cover all CRUD operations? This is kind of a nice ending
place.
