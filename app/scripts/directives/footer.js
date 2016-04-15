'use strict';

angular.module('movieManagerApp')
  .directive('footer', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'E',
      link: function postLink() {
       
      }
    };
  });
