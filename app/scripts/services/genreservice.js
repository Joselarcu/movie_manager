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

    this.createGenre = function(name){
      console.log("create Genre!");
      var genre = {};
      genre.name = name;
      genre.movies = [];

      var id = genres.length + 1;
      var found = genres.some(function (el) {
        return el.name === name;
      });
      if (!found && name != undefined) {
        genres.push(genre);
        saveState();
      }
      else{
        console.log("Invalid genre");
      }
    }

    this.restoreState = function(){
       return restoreState();
    }

    this.deleteGenre = function(name){
      for(var i in genres){
        if(genres[i].name == name){
          genres.splice(i,1);
          saveState();
          break;
        }
      }
    }

    this.getGenres = function(){
      return genres;
    }

  

  });
