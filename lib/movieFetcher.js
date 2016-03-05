'use strict';

module.exports = (movieApiClient, movieRepository) => {
	const extractSearchResults = (results) => results['Search'];
	const saveMovie = (movie) => movieRepository.save(movie);

	return {
		fetchByTitle: (title) => {
			return movieApiClient.search(title)
				.then(extractSearchResults)
				.then((movies) => Promise.all(movies.map(saveMovie)));
		}
	}
};