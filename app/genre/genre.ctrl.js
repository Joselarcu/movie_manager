'use strict';

angular.module('movieManagerApp')
  .controller('GenreCtrl',['$scope','$rootScope','genreService', function ($scope,$rootScope,genreService) {

  	$scope.genres = genreService.restoreState() || [];
     $scope.sortBy = 'name';
     $scope.inverseOrder = false;
     $scope.genreCreated = false;
   

  	 $scope.createGenre = function(name){	
    	$scope.genreCreated = !genreService.createGenre(name);
    	$scope.genres = genreService.restoreState();
   
    };

    $scope.deleteGenre = function(name){
    	genreService.deleteGenre(name);
    	$scope.genres = genreService.restoreState();
      $rootScope.$broadcast('deleteMovies', 'update movie list');
    };
    
     $scope.$on('updateGenre', function () { 
      $scope.genres = genreService.restoreState();
    });


  }]);
