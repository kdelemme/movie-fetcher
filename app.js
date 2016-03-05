'use strict';
const request = require('request');
const movieApiClient = require('./lib/openMovieApiClient')(request);
const movieRepository = require('./lib/inMemoryMovieRepository')();
const movieFetcher = require('./lib/movieFetcher')(movieApiClient, movieRepository);

movieFetcher.fetchByTitle('titanic')
	.then(movieRepository.findAll)
	.then(console.log);