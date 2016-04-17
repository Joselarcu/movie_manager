'use strict';

angular.module('movieManagerApp')
  .directive('footer', function () {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
      link: function postLink() {
       
      }
    };
  });
