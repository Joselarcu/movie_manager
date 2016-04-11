'use strict';

/**
 * @ngdoc service
 * @name movieManagerApp.genreService
 * @description
 * # genreService
 * Service in the movieManagerApp.
 */
angular.module('movieManagerApp')
  .service('genreService', function ($window) {

    var last_genres = restoreState();
    var genres = (last_genres) ? last_genres : [];

  
    function restoreState(){
      return JSON.parse(localStorage.getItem('genres-stored'));
    }

    function saveState(){
      $window.localStorage && $window.localStorage.setItem('genres-stored', JSON.stringify($scope.cities));
    }

    var genres = restoreState();

    this.createGenre = function(name){
      console.log("Holaaaa"+ name);
      // if(genres.indexOf(name)>=0){
      //   console.log("genre already created");
      // }
      // else{
      //   genres.push(name);
      // }
    }

    this.deleteGenre = function(name){
      console.log("genre deleted");

    }

    this.getGenres = function(){
      console.log("get all genres");

    }

  });
