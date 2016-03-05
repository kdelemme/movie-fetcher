'use strict';
const expect = require('expect.js');

describe('InMemoryMovieRepository', () => {

	it('should find all movies', () => {
    	let movieRepository = require('../lib/inMemoryMovieRepository')();

		expect(movieRepository.findAll()).to.have.length(0);
    });


    it('should save a movie', () => {
    	let movieRepository = require('../lib/inMemoryMovieRepository')();

		movieRepository.save({id: 1, title: 'irrelevant'});

		expect(movieRepository.findAll()).to.have.length(1);
    });

    it('should find a movie by its id', () => {
    	let movieRepository = require('../lib/inMemoryMovieRepository')();

		movieRepository.save({id: 1, title: 'irrelevant'});

		expect(movieRepository.findbyId(1)).to.have.property('title', 'irrelevant');
    });
});