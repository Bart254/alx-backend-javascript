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

	describe('GET /cart/:id', () => {
		it('returns code 200 and message when id is a number',  (done) => {
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

		it('returns 404 status if id is not a number', (done) => {
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

	describe('GET /available_payments', () => {
		it('returns 200 as statusCode', (done) => {
			const newUrl = 'http://localhost:7865/available_payments';

			request.get(newUrl, (err, resp, body) => {
				if (err) {
					done(err);
				} else {
					expect(resp.statusCode).to.be.equal(200);
					done();
				}
			});
		});

		it('returns an object', (done) => {
			const newUrl = 'http://localhost:7865/available_payments';
			const obj = {
				payment_methods: {
					credit_cards: true,
					paypal: false
				}
			};

			request.get(newUrl, (err, resp, body) => {
				if (err) {
					done(err);
				} else {
					expect(JSON.parse(body)).to.be.deep.equal(obj);
					done();
				}
			});
		});
	});

	describe('POST /login', () => {
    it('should return 200 code when userName is provided', (done) => {
      request.post(
        `http://localhost:7865/login`,
        { json: { userName: 'Castro' } },
        (err, res, body) => {
					if (err) done(err);
          expect(res.statusCode).to.equal(200);
          done();
        }
      );
    });

    it('should return the correct welcome message', (done) => {
      request.post(
        `http://localhost:7865/login`,
        { json: { userName: 'Castro' } },
        (err, res, body) => {
					if (err) done(err);
          expect(body).to.equal('Welcome Castro');
          done();
        }
      );
    });
	});
});
