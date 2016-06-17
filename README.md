#Ruby on Rails + ReactJS App

###Why?
Getting Ruby on Rails and React to play together can be a bit troublesome. So I've saved you guys the frustration with this simple solution.

###Requirements
- [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Ruby on Rails](http://installrails.com/steps/choose_os)
- Bundler
  - `gem install bundler`
  - manages ruby gems

###Installation
Install the requirements above

Run the following into the command line to install ruby gems, node packages, and to start the server
```
$ bundle install
$ npm install
$ rails server
```

Check `localhost:3000` 

###Included
- `Rails 4.2.6` - backend 
- `React 15.0.0` - frontend
- `Browserify` and `Babelify` - needed to include node's asset pipeline with rails asset pipeline
- `bootstrap-sass` - styling

###Adding React Components

Create the component file 
`$ touch app/assets/javascripts/react/component_name.js`


Add the component to `app/assets/javascripts/component.js`

```javascript
require('');
// Component::Manifest
import App       from './react/app.js';
import Component from './react/component_name.js`

const app = window.app = global.app = {};

// Expose components to global scope
app.App = App;
app.Component = Component;
```

Don't forget to export the component in the component file 
```javascript
module.exports = Component
```

Then, when you are including your component in the render method use `app.Component` as the name
