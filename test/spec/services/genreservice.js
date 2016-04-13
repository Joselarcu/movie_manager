'use strict';

describe('Service: genreService', function () {

  // load the service's module
  beforeEach(module('movieManagerApp'));

  // instantiate service
  var genreService;
  beforeEach(inject(function (_genreService_) {
    genreService = _genreService_;
  }));

  it('should create a genre', function () {
    genreService.createGenre("Science fiction");
    expect(genreService.getGenres()).toBeDefined();
    expect(genreService.getGenres().length).toBe(1);
  });

  it('should delete a genre',function(){
    expect(genreService.getGenres().length).toBe(1);
    expect(genreService.getGenres()[0].name).toBe("Science fiction");
    genreService.deleteGenre("Science fiction");
    expect(genreService.getGenres().length).toBe(0);
  });

  it('should create a movie',function(){
    genreService.createGenre("Science fiction");
    expect(genreService.getMovies().length).toBe(0);
    genreService.addMovie("Science fiction", "Marte");
    expect(genreService.getMovies().length).toBe(1);
  });

});
