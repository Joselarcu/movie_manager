(function(){
	'use strict';

	angular.module('movieManagerApp')
	.directive('footer', function () {
	  var directive = {
	 		link: link,
	 		templateUrl: 'components/footer/footer.html',
	 		restrict: 'E'
	 };
	 return directive;

	 function link(scope,element,attrs){
	 }
	});
})();
