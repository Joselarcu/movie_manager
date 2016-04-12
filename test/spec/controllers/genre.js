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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GenreCtrl.awesomeThings.length).toBe(3);
  });
});
