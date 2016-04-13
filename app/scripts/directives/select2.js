'use strict';

angular.module('movieManagerApp')
  .directive('select2', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/select2.html',
        link: function(scope, element, attrs) {
          
            $.getScript('//cdnjs.cloudflare.com/ajax/libs/select2/3.4.8/select2.min.js',function(){
              $("#mySel").select2({
      
              });
            });
          
        }

      };
  });
