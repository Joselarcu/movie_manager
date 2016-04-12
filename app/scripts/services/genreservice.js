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
      $window.localStorage && $window.localStorage.setItem('genres-stored', JSON.stringify(genres));
    }

    // var genres = restoreState();

    this.createGenre = function(name){
      console.log("create Genre!");
      var genre = {};
      genre.name = name;
      genre.numMovies = 0;

      var id = genres.length + 1;
      var found = genres.some(function (el) {
        console.log("wiiiii");
        return el.name === name;
      });
      if (!found) {
        genres.push(genre);
        saveState();
      }
      else{
        console.log("genre already exists!");
      }


    }

    this.restoreState = function(){
       return restoreState();
    }

    this.deleteGenre = function(name){
      console.log("genre deleted");
      for(var i in genres){
        if(genres[i].name == name){
          genres.splice(i,1);
          console.log("eliminados", genres);
          saveState();
          break;
        }
      }
    }

    this.getGenres = function(){
      console.log("get all genres");

    }

  });
