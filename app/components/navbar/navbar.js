'use strict';

angular.module('movieManagerApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'components/navbar/navbar.html',
      restrict: 'E',
      link: function postLink() {
        
      }
    };
  });
