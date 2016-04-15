'use strict';

/**
 * @ngdoc directive
 * @name movieManagerApp.directive:filterInput
 * @description
 * # filterInput
 */
angular.module('movieManagerApp')
  .directive('filterInput', function () {
    return {
      templateUrl: 'views/filterinput.html',
      restrict: 'E',
      scope:{
        ngModel: '=',
        placeholder: '='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
