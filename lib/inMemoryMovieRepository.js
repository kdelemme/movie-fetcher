'use strict';

module.exports = () => {
	const movies = [];

	return {
		save: (movie) => {
			movies.push(movie);
		},

		findAll: () => {
			return movies;
		},

		findbyId: (id) => {
			return movies.find((movie) => movie.id == id);
		}
	}
}