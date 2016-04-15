'use strict';

angular.module('movieManagerApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/navbar.html',
      restrict: 'E',
      link: function postLink() {
        
      }
    };
  });
