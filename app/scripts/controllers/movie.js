'use strict';

angular.module('movieManagerApp')
  .controller('MovieCtrl',['$scope','$rootScope','genreService', function ($scope,$rootScope,genreService) {
    
  	$scope.genres = genreService.getGenres().sort();
  	$scope.movies = genreService.getMovies();
    $scope.sortBy='title';
    $scope.inverseOrder = false;

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

 $scope.$on('deleteMovies', function (event, arg) { 
      $scope.movies = genreService.getMovies();
    });
	
}]);
