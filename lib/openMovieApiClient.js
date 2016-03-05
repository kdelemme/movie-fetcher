'use strict';

module.exports = (request) => {
	const BASE_URI = 'http://www.omdbapi.com';

	return {
		search: (title) => new Promise((resolve, reject) => {
			request({
				method: 'GET', 
				uri: BASE_URI, 
				qs: {
					s: title
				},
				json: true
			}, (err, response, body) => {
				if (err) {
					return reject(err);
				}

				resolve(body);
			});
		}),

		fetchById: (id, withTomatoes, withFullPlot) => new Promise((resolve, reject) => {
			request({
				method: 'GET', 
				uri: BASE_URI, 
				qs: {
					i: id,
					tomatoes: withTomatoes || false,
					plot: withFullPlot ? 'full' : 'short'
				},
				json: true
			}, (err, response, body) => {
				if (err) {
					return reject(err);
				}

				resolve(body);
			});
		}),
	}
}