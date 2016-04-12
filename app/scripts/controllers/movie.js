'use strict';

/**
 * @ngdoc function
 * @name movieManagerApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieManagerApp
 */
angular.module('movieManagerApp')
  .controller('MovieCtrl',['$scope','genreService', function ($scope,genreService) {
    
  	$scope.genres = genreService.getGenres();

  	//select2
	// $(document).ready(function(){
 //  	$.getScript('//cdnjs.cloudflare.com/ajax/libs/select2/3.4.8/select2.min.js',function(){
 //    	$("#mySel").select2({
    	
 //    	});
 //    });
 //  });
 //  
 //  
 $scope.createMovie = function(movie){
    genreService.addMovie(movie.genre.name,movie.title);
    
    $('#myModalMovie').modal('hide');
 }
	
}]);
