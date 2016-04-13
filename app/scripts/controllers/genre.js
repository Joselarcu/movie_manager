'use strict';

angular.module('movieManagerApp')
  .controller('GenreCtrl',['$scope','$rootScope','genreService','$filter', function ($scope,$rootScope,genreService,$filter) {


  	$scope.genres = genreService.restoreState() || [];
  	$scope.inverse = true;
    $scope.orderDirection = 'name'
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

    $scope.sortByName = function(){
    	$scope.inverse = !$scope.inverse;
    	$scope.orderDirection = ($scope.inverse) ? 'name' : '-name';
    }

     $scope.$on('updateGenre', function (event, arg) { 
      $scope.genres = genreService.restoreState();
    });


  }]);
