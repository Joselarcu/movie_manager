'use strict';

angular.module('movieManagerApp')
  .controller('GenreCtrl',['$scope','$rootScope','genreService','$filter', function ($scope,$rootScope,genreService,$filter) {


  	$scope.genres = genreService.restoreState() || [];
     //$scope.orderDirection = 'name'
     $scope.sortBy = 'name'
     $scope.sortByNum = 'movies';
     $scope.inverseOrder = false;
     $scope.genreCreated = false;
   

  	 $scope.createGenre = function(name){	
    	$scope.genreCreated = !genreService.createGenre(name);
    	$scope.genres = genreService.restoreState();
   
    }

    $scope.deleteGenre = function(name){
    	genreService.deleteGenre(name);
    	$scope.genres = genreService.restoreState();
      $rootScope.$broadcast('deleteMovies', 'update movie list');
    }
    
     $scope.$on('updateGenre', function (event, arg) { 
      $scope.genres = genreService.restoreState();
    });


  }]);
