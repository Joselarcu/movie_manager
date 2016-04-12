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

    this.addMovie = function(genreName,movieTitle){
      console.log("añadiendo pelicula...", movieTitle,genreName);
      for(var x in genres){
        console.log(x);
        if(genres[x].name == genreName){
          var movies = genres[x].movies;
          console.log("peliculas",movies);
          var id = movies.length + 1;
          var found = movies.some(function (el) {
            console.log("weeei");
            return el.title === movieTitle;
          });
          if (!found && movieTitle != undefined) {
            genres[x].movies.push(movieTitle);
            console.log("pelicula añadida");
            saveState();
          }
          else{
            console.log("invalid movie!");
          }
        }
      }
    }

  

  });
