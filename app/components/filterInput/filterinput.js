(function(){
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
      templateUrl: 'components/filterInput/filterinput.html',
      restrict: 'E',
      scope:{
        ngModel: '=',
        placeholder: '='
      },
      link: function postLink() {
      }
    };
  });
})();

/*var directive = {
      link: link,
      templateUrl: 'components/filterInput/filterinput.html',
      restrict: 'E',
      scope: scope
   };
   return directive;

   var scope: {
    ngModel: '=',
    placeholder: '=;'
  };

   function link(scope,element,attrs){
    
   }*/