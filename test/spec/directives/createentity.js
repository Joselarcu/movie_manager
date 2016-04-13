'use strict';

describe('Directive: createEntity', function () {

  // load the directive's module
  beforeEach(module('movieManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    // element = angular.element('<create-entity></create-entity>');
    // element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the createEntity directive');
  }));
});
