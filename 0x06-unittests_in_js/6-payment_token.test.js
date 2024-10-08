const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('test promises', () => {
	it('test result of getPaymentTokenFromAPI(true)', (done) => {
		const response = {data: 'Successful response from the API'};

		getPaymentTokenFromAPI(true).then( resp => {
			expect(resp).to.deep.equal(response);
			done();
		}).catch(err => done(err));
	});

	it('function should do nothing when success is false', () => {
		expect(getPaymentTokenFromAPI(false)).to.equal(undefined);
	});
});
