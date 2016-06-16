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
- `Browserify` and `Babelify` - needed to include node's asset pipeline with rails assets
