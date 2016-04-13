'use strict';

describe('Controller: MovieCtrl', function () {

  // load the controller's module
  beforeEach(module('movieManagerApp'));

  var MovieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieCtrl = $controller('MovieCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have genres, movies,inverseTitle and orderTitleDirection defined', function () {
     expect(scope.genres).toBeDefined();
     expect(scope.movies).toBeDefined();
     expect(scope.inverseTitle).toBeDefined();
     expect(scope.orderTitleDirection).toBeDefined();
  });

  it('should create a movie', function () {
      var movie = {"title":"Marte", "genre": "Science fiction"};
      scope.createMovie(movie);
      expect(scope.movies.length).toBe(1);
  });


});
