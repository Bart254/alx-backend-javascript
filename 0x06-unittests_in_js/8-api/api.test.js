// test api
const request = require('request')
const { expect } = require('chai');

describe('8-api', () => {
	it('index page', () => {
		request('http://localhost:7865/', (err, response, body) => {
			expect(response.statusCode).to.equal(200);
			expect(body).to.equal('Welcome to the payment system');
		});
	});
});
			
