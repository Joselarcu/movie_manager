'use strict';

/**
 * @ngdoc directive
 * @name movieManagerApp.directive:footer
 * @description
 * # footer
 */
angular.module('movieManagerApp')
  .directive('footer', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
       
      }
    };
  });
