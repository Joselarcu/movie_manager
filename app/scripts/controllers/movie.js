'use strict';

angular.module('movieManagerApp')
  .controller('MovieCtrl',['$scope','$rootScope','genreService', function ($scope,$rootScope,genreService) {
    
  	$scope.genres = genreService.getGenres().sort();
  	$scope.movies = genreService.getMovies();
  	$scope.inverseTitle = true;
    $scope.orderTitleDirection = 'title';

 $scope.createMovie = function(movie){
 		if(movie != undefined && JSON.stringify(movie) != JSON.stringify({})){
      $scope.movieCreated = !genreService.addMovie(movie.genre.name,movie.title);
      $scope.movies = genreService.getMovies();
	    $rootScope.$broadcast('updateGenre', 'update genre list');	
 		}
 		else{
 			$scope.movieCreated = false;
 		}
 }

 $scope.deleteMovie = function(movie){
 		genreService.deleteMovie(movie.genre,movie.title);
 		$scope.movies = genreService.getMovies();
 		$rootScope.$broadcast('updateGenre', 'update genre list');
 }

 $scope.sortByTitle = function(){
 	$scope.inverseTitle = !$scope.inverseTitle;
  $scope.orderTitleDirection = ($scope.inverseTitle) ? 'title' : '-title';
 }


 $scope.$on('deleteMovies', function (event, arg) { 
      $scope.movies = genreService.getMovies();
    });
	
}]);
