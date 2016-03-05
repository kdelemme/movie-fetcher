'use strict';
const expect = require('expect.js');

describe('MovieFetcher', () => {
	const inMemoryMovieRepository = require('../lib/inMemoryMovieRepository')();

	const aMovieApiClientMock = (data) => {
		return {
			search: (title) => { 
				return Promise.resolve({ Search: data });
			}
		}
	};

	it('should save the fetched movies', (done) => {
		const movieFetcher = require('../lib/movieFetcher')(aMovieApiClientMock([{title: 'irrelevant'}]), inMemoryMovieRepository);

		movieFetcher.fetchByTitle('irrelevant')
			.then(inMemoryMovieRepository.findAll)
			.then((movies) => {
				expect(movies).to.have.length(1);
				done();
			})
	});
})