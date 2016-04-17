'use strict';

describe('Directive: sortColumn', function () {

  // load the directive's module
  beforeEach(module('movieManagerApp'));

  //TODO

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    // element = angular.element('<sort-column></sort-column>');
    // element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the sortColumn directive');
  }));
});
