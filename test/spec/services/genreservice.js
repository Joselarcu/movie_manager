'use strict';

describe('Service: genreService', function () {

  // load the service's module
  beforeEach(module('movieManagerApp'));

  // instantiate service
  var genreService;
  beforeEach(inject(function (_genreService_) {
    genreService = _genreService_;
  }));

  it('should do something', function () {
    expect(!!genreService).toBe(true);
  });

});
