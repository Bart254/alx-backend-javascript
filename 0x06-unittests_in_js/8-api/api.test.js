// api test file
const request = require('request');
const { expect } = require('chai');

const url = 'http://localhost:7865';

describe('Testing API service', () => {
	it('api call should return 200 status code', (done) => {
		request.get(url, (err, resp, body) => {
			if (err) {
				done(err);
			} else {
				expect(resp.statusCode).to.be.equal(200);
				done();
			}
		});
	});

	it('api call message is returned as expected', (done) => {
		request.get(url, (err, resp, body) => {
			if (err) {
				done(err);
			} else {
				expect(body).to.be.equal('Welcome to the payment system');
				done();
			}
		});
	});
});
