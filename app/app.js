(function(){
  'use strict';

  /**
   * @ngdoc overview
   * @name movieManagerApp
   * @description
   * # movieManagerApp
   *
   * Main module of the application.
   */
  angular
    .module('movieManagerApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ui.select'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main',
          resolve:{
            //Do something before load the view
            //resolveFunction : resolveFunction
          }
        })
        .otherwise({
          redirectTo: '/'
        });
    });

    // resolveFunction.$inject = ['genreService'];
    // function resolveFunction(genreService) {
    //   console.log("executing resolveFuction");
    // }

})();

