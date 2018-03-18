const Api = require('claudia-api-builder'),
	api = new Api();

api.post('/registrants', function (request) {
	console.log('received', JSON.stringify(request, null, 2));
	return Promise.resolve('');
}, { success: 201 });

api.corsMaxAge(60);

module.exports = api;
