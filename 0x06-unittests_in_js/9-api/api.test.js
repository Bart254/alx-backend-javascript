// test api
const request = require('request')
const { expect } = require('chai');

describe('8-api', () => {
	it('index page', (done) => {
		request('http://localhost:7865/', (err, response, body) => {
			expect(response.statusCode).to.equal(200);
			expect(body).to.equal('Welcome to the payment system');
		});
		done();
	});

	it('return code 200 with right message when cart is number', (done) => {
		request('http://localhost:7865/cart/:12', (err, response, body) => {
			expect(response.statusCode).to.equal(200);
			expect(response.body).to.equal('Payment methods for cart 12');
		});
		done();
	});

	it('return 404 code when cart is non-numerical', (done) => {
		request('http://localhost:7865/cart/:wer', (err, response, body) => {
			expect(response.statusCode).to.equal(404);
		});
		done();
	});
});
