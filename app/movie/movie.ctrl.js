(function(){
  'use strict';

  angular.module('movieManagerApp').controller('MovieCtrl',MovieCtrl);
  MovieCtrl.$inject = ['$scope','$rootScope','genreService'];
  function MovieCtrl($scope, $rootScope, genreService) {

    var vm = this;

  	vm.genres = genreService.getGenres().sort();
  	vm.movies = genreService.getMovies();
    vm.sortBy = 'title';
    vm.inverseOrder = false;
    // vm.movieCreated = false;

   vm.createMovie = function(movie){
   		if(movie !== undefined && JSON.stringify(movie) !== JSON.stringify({})){
        vm.movieCreated = !genreService.addMovie(movie.genre.name,movie.title);
        vm.movies = genreService.getMovies();
  	    $rootScope.$broadcast('updateGenre', 'update genre list');	
   		}
   		else{
   			vm.movieCreated = false;
   		}
   };

   vm.deleteMovie = function(movie){
   		genreService.deleteMovie(movie.genre,movie.title);
   		vm.movies = genreService.getMovies();
   		$rootScope.$broadcast('updateGenre', 'update genre list');
   };

   $scope.$on('deleteMovies', function () { 
      vm.movies = genreService.getMovies();
    });
  }
})();

