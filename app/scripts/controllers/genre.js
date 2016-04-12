'use strict';

/**
 * @ngdoc function
 * @name movieManagerApp.controller:GenreCtrl
 * @description
 * # GenreCtrl
 * Controller of the movieManagerApp
 */
angular.module('movieManagerApp')
  .controller('GenreCtrl',['$scope','genreService','$filter', function ($scope,genreService,$filter) {

  	$scope.genres = genreService.restoreState() || [];
  	$scope.inverse = true;

  	 $scope.createGenre = function(name){	
    	genreService.createGenre(name);
    	$scope.genres = genreService.restoreState();
  	 	$('#myModal').modal('hide');
    }

    $scope.deleteGenre = function(name){
    	genreService.deleteGenre(name);
    	$scope.genres = genreService.restoreState();
    }

    $scope.sortByName = function(){
    	$scope.inverse = !$scope.inverse;
    	$scope.orderDirection = ($scope.inverse) ? '-name' : 'name';
    }

  }]);
