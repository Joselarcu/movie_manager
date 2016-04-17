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

  it('should have genres, movies,sortBy and inverseOrder defined', function () {
     expect(scope.genres).toBeDefined();
     expect(scope.movies).toBeDefined();
     expect(scope.sortBy).toBeDefined();
     expect(scope.inverseOrder).toBeDefined();
  });

});
