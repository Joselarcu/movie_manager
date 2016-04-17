'use strict';

describe('Controller: GenreCtrl', function () {

  // load the controller's module
  beforeEach(module('movieManagerApp'));

  var GenreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GenreCtrl = $controller('GenreCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('inverseOrder should be defined', function () {
    expect(scope.inverseOrder).toBeDefined();
    expect(scope.inverseOrder).toBe(false);
  });
   it('genreCreated should be defined', function () {
    expect(scope.genreCreated).toBeDefined();
    expect(scope.genreCreated).toBe(false);
  });

  it('genres should be defined', function () {
    expect(scope.genres).toBeDefined();
  });

  it('should create a genre with the correct name',function(){
    scope.createGenre('Science fiction');
    expect(scope.genres.length).toBe(1);
    expect(scope.genres[0].name).toBe('Science fiction');
  });

  it('should delete a genre given the name',function(){
    scope.deleteGenre('Science fiction');
     expect(scope.genres.length).toBe(0);
  });
});
