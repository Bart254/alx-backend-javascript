// api test file
const request = require('request');
const { expect } = require('chai');

const url = 'http://localhost:7865';

describe('Testing API service', () => {
	describe('Test index route', () => {
		it('index call should return 200 status code', (done) => {
			request.get(url, (err, resp, body) => {
				if (err) {
					done(err);
				} else {
					expect(resp.statusCode).to.be.equal(200);
					done();
				}
			});
		});

		it('index call message is returned as expected', (done) => {
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

	describe('Test cart route', () => {
		it('calling when id is a number returns correct code, mess',  (done) => {
			const cartUrl = 'http://localhost:7865/cart/1'
			const expectedMessage = 'Payment methods for cart 1';

			request.get(cartUrl, (err, resp, body) => {
				if (err) {
					done(err);
				} else {
					expect(resp.statusCode).to.be.equal(200);
					expect(body).to.be.equal(expectedMessage);
					done();
				}
			});
		});

		it('calling when id is not a number returns not found', (done) => {
			const cartUrl = 'http://localhost:7865/cart/tyuyre'

			request.get(cartUrl, (err, resp, body) => {
				if (err) {
					done(err);
				} else {
					expect(resp.statusCode).to.be.equal(404);
					done();
				}
			});
		});
	});
});
