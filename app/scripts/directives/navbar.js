'use strict';

/**
 * @ngdoc directive
 * @name movieManagerApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('movieManagerApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/navbar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
