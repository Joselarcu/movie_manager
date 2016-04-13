'use strict';

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
