// test file for calculateNumber
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('SendPaymentRequestToApi', () => {
	let spy;

	beforeEach(() => {
		spy = sinon.spy(console, 'log');
	});
	it('console must log the total is: 120', () => {
		sendPaymentRequestToApi(100, 20);

		expect(spy.calledWith('The total is: 120')).to.be.true;
		spy.restore();
	});

	it('console must log the total is: 20', () => {
		sendPaymentRequestToApi(10, 10);

		expect(spy.calledWith('The total is: 20')).to.be.true;
		spy.restore();
	});
});
