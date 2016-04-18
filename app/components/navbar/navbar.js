(function(){

	'use strict';

	angular.module('movieManagerApp')
	.directive('navbar', function () {
	 var directive = {
	 		link: link,
	 		templateUrl: 'components/navbar/navbar.html',
	 		restrict: 'E'
	 };
	 return directive;

	 function link(scope,element,attrs){
	 	
	 }
	});
})();
