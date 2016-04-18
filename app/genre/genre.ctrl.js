(function(){

  'use strict';

  angular.module('movieManagerApp')
    .controller('GenreCtrl',['$scope','$rootScope','genreService', function ($scope,$rootScope,genreService) {

      var vm = this;

    	this.genres = genreService.restoreState() || [];
       vm.sortBy = 'name';
       vm.inverseOrder = false;
       vm.genreCreated = false;
     

    	 vm.createGenre = function(name){	
      	vm.genreCreated = !genreService.createGenre(name);
      	vm.genres = genreService.restoreState();
     
      };

      vm.deleteGenre = function(name){
      	genreService.deleteGenre(name);
      	vm.genres = genreService.restoreState();
        $rootScope.$broadcast('deleteMovies', 'update movie list');
      };
      
       $scope.$on('updateGenre', function () { 
        vm.genres = genreService.restoreState();
      });


  }]);
})();
