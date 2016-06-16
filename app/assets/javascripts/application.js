// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require_self
//= require components
//= require turbolinks
//= require jquery.turbolinks
//= require react_ujs

// Setup React in global scope
var React = window.React = global.React = require('react');
var ReactDOM= window.ReactDOM = global.ReactDOM = require('react-dom');
window.$ = window.jQuery = require('jquery')
require('jquery-ujs')
