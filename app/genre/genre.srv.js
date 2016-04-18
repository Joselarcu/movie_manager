(function(){

  'use strict';

  angular.module('movieManagerApp')
    .service('genreService', function ($window) {

      var last_genres = restoreState();
      var genres = (last_genres) ? last_genres : [];

      //retrieve genres from localStore
      function restoreState(){
        return JSON.parse(localStorage.getItem('genres-stored'));
      }

      //save genres in localStore
      function saveState(){
        $window.localStorage && $window.localStorage.setItem('genres-stored', JSON.stringify(genres));
      }

      //create a new genre
      this.createGenre = function(name){
        var hasError = true;
        var genre = {};
        genre.name = name;
        genre.movies = [];

        var id = genres.length + 1;
        var found = genres.some(function (el) {
          return el.name === name;
        });
        if (!found && name != undefined && name !="") {
          genres.push(genre);
          saveState();
          $('#myModal').modal('hide');
          hasError = false;
        }
        else{
          console.log("Invalid genre");
        }
        return hasError
      }

      this.restoreState = function(){
         return JSON.parse(localStorage.getItem('genres-stored'));
      
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
        var hasError = true;
        for(var x in genres){
          if(genres[x].name == genreName){
            var movies = genres[x].movies;
            var id = movies.length + 1;
            var found = movies.some(function (el) {
              return el.title === movieTitle;
            });
            if (!found && movieTitle != undefined) {
              genres[x].movies.push(movieTitle);
              saveState();
              hasError = false;
              $('#myModalMovie').modal('hide');
            }
          }
        }
        return hasError;
      }



      this.deleteMovie = function(genreName,title){
        for(var i in genres){
          if(genres[i].name == genreName){
            var genreMovies = genres[i].movies;
            for(var j in genreMovies){
              if(genreMovies[j] == title){
                genreMovies.splice(j,1);
                saveState();
                break;
              }
            }
          }
        }
      }

      this.getMovies = function(){
        var movies = [];
        for(var i in genres){
          var moviesGenre = genres[i].movies;
          if(moviesGenre.length > 0){
            for(var j in moviesGenre){
              var movie = { "title": moviesGenre[j], "genre": genres[i].name };
              movies.push(movie)
            }  
          }
        } 
        return movies;
      }
  });
})();
