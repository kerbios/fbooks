define(function(require) {
  'use strict';

  var template = require('text!./templates/popular.html');

  return ['booksService', function (booksService) {
    return {
        restrict: 'A',
        replace: true,
        template: template,
        scope: { 
        },
        link: function(scope, element, attrs, controller) {
          scope.books = booksService.getTopBooks();
        }
      };
  }];
});