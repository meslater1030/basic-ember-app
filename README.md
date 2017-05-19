# Basic Ember App

This is a short tutorial covering the basics of creating an Ember application. We will discuss the nature and basic
usage of ember-cli, the fundamentals of how Ember interacts with your JSON API, creating Templates and CSS,
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

## Getting Started: Ember-cli

 You might at this point be wondering why you've installed something called Ember-cli rather than just plain Ember. Ember-cli
 is Ember's command line interface and it's an easy-to-use package of opinionated build tools for Ember itself.
 In future tutorials (TODO: add links here) you'll cover both Ember-cli and it's foundation, [Broccoli](http://broccolijs.com/). 
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

Ember-cli has created the bones of your application for you. This includes your basic MVC setup as well as a couple of things
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

### Troubleshooting
(TODO: try to think of stuff that might have gone wrong)

### Routing
You'll start your app by retrieving a list of investments and displaying them on a page. In the real world
if this is all you needed to use you'd be a fool to do it with Ember. As you'll see, a fair number of steps
are required set up the page for such a simple task. However, in the world of single page web applications
retrieving a list of items is often the first step to creating much more complex pages so it's where we'll
need to begin here as well.

You can use Ember-cli to generate a route  (and plenty of other things besides):
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

For more information about what kinds of things you can generate with Ember-cli use `ember generate help`. In this case the command has created a blank route and template for your investments. it's also added an investments
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

You can use Ember-cli to generate an adapter.

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

Now all api calls will be made to `http://localhost:5000/api/whatever`.

## Ember-Data
In this application, you're going to build an investment platform. It will include Investors, Investments, Advisors
and Accounts. Before building out templates and forms to handle that information you'll need a way to retrieve
and manage the data itself. Ember-Data is the data persistence library that comes pre-packaged with any Ember app.
You'll be using it to create models and retrieve information from an API.

You can use Ember-cli to generate an Ember-Data model. 

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

...and if you'd like to run the test use `ember test`. 

```
~/Projects/basic-ember-app $ ember test
cleaning up...
Built project successfully. Stored in "/Users/mslater/Projects/basic-ember-app/tmp/class-tests_dist-qlVMcLjy.tmp".
ok 1 PhantomJS 2.1 - ESLint | app: adapters/application.js
ok 2 PhantomJS 2.1 - ESLint | app: app.js
ok 3 PhantomJS 2.1 - ESLint | app: models/investment.js
ok 4 PhantomJS 2.1 - ESLint | app: resolver.js
ok 5 PhantomJS 2.1 - ESLint | app: router.js
ok 6 PhantomJS 2.1 - ESLint | tests: helpers/destroy-app.js
ok 7 PhantomJS 2.1 - ESLint | tests: helpers/module-for-acceptance.js
ok 8 PhantomJS 2.1 - ESLint | tests: helpers/resolver.js
ok 9 PhantomJS 2.1 - ESLint | tests: helpers/start-app.js
ok 10 PhantomJS 2.1 - ESLint | tests: test-helper.js
ok 11 PhantomJS 2.1 - ESLint | tests: unit/models/investment-test.js
ok 12 PhantomJS 2.1 - Unit | Model | investment: it exists

1..12
# tests 12
# pass  12
# skip  0
# fail  0
```

Now that you have an investment model, you'll want to retrieve and 
display those investments. The DS.Model object from Ember-Data will
manage [CRUD operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
in the following way (for now, don't worry too much about what the 'store' is):

Create:
`this.get('store').createRecord('investment', { symbol, unitPrice, exchange })` corresponds to a POST API call to `http://www.myUrl.com/api/investments`
with a payload of
```
{
    investment: {
        symbol: "AAPL",
        unitPrice: 109.22,
        exchange: "NASDAQ"
        
    }
}
```

Retrieve:
`this.get('store').findAll('investment')` corresponds to a GET API call to `http://www.myUrl.com/api/investments`
with a payload of 
```
{
    investments: [
        {
            symbol: "GOOG",
            unitPrice: 300.90,
            exchange: "NYSE"
        },
        {
            symbol: "T",
            unitPrice: 14.20,
            exchange: "NYSE"
        }
    ]
}
```

Update:
`investment.save()` corresponds to a PUT API call to `http://www.myUrl.com/api/investments/id` with a payload
of 
```
{
    investment: {
        symbol: "AAPL",
        unitPrice: 109.22,
        exchange: "NYSE"
        
    }
}
```

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
    return this.get('store').findAll('investment');
  }
});
```

You've just defined the model for the route as investments. Explain things about how that data gets passed around.

Go to `basic-ember-app/app/templates/investments` and update it to display your investments.

```
{{#each model as |investment|}}
  {{investment.symbol}} {{investment.unitPrice}} {{investment.exchange}}
{{/each}}
```
