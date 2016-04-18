(function(){

'use strict';

/**
 * @ngdoc directive
 * @name movieManagerApp.directive:sortColumn
 * @description
 * # sortColumn
 */
  angular.module('movieManagerApp')
  .directive('sortColumn', function () {
    return {
      templateUrl: 'components/sortColumn/sortcolumn.html',
      restrict: 'A',
      transclude: true,
      scope:{
        sortby: '=',
        inverse: '='

      },
      link: function postLink(scope, element, attrs) {
        scope.sortColumn = function(){
          scope.inverse = !scope.inverse;
        }
      }
    };
  });
})();
