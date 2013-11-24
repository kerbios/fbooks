define(function(require) {
  'use strict';

  var angular = require('angular'),
      app = require('app'),

      // Screens
      HomeScreen = require('screens/home'),
      SearchScreen = require('screens/search');

  angular.bootstrap(document, [
    app.name,
    HomeScreen.name,
    SearchScreen.name
  ]);
});