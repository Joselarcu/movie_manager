'use strict';

/**
 * @ngdoc directive
 * @name movieManagerApp.directive:createEntity
 * @description
 * # createEntity
 */
angular.module('movieManagerApp')
  .directive('createEntity', function () {
    return {
      templateUrl: 'views/createentity.html',
      restrict: 'E',
      scope:{
        params: '='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
