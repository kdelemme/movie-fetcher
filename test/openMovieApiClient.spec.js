'use strict';
const expect = require('expect.js');

describe('OpenMovieApiClient', () => {

	var aMockedRequest = (data) => (params, callback) => {
		callback(null, null, data)
	}
	
    it('should fetch movies by title', (done) => {
    	let client = require('../lib/openMovieApiClient')(aMockedRequest([{},{}]));

		client.search('A title')
		.then((result) => {
			expect(result).to.have.length(2);
			done();
		})
    });

    it('should fetch a movie by id', (done) => {
    	let client = require('../lib/openMovieApiClient')(aMockedRequest({
    		imdbID: 'tt0121212',
    		Title: 'A title',
    		Year: '2016'
    	}));

		client.fetchById('tt0121212')
		.then((result) => {
			expect(result).to.have.property('Title', 'A title');
			expect(result).to.have.property('Year', '2016');
			done();
		})
    });

    it('should fetch a movie by id with Rotten Tomatoes ratings', (done) => {
    	let client = require('../lib/openMovieApiClient')(aMockedRequest({
    		imdbID: 'tt0121212',
    		Title: 'A title',
    		Year: '2016',
    		tomatoRating: '7.6'
    	}));

		client.fetchById('tt0121212', true)
		.then((result) => {
			expect(result).to.have.property('Title', 'A title');
			expect(result).to.have.property('Year', '2016');
			expect(result).to.have.property('tomatoRating', '7.6');
			done();
		})
    });

});