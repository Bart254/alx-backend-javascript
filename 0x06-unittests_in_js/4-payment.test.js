// test file for calculateNumber
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('SendPaymentRequestToApi', () => {
	it('Should spy on Utils.calculateNumber', () => {
		const stub = sinon.stub(Utils, 'calculateNumber');
		const spy = sinon.spy(console, 'log');
		stub.returns(10);
		sendPaymentRequestToApi(100, 20);

		expect(stub.calledWith('SUM', 100, 20)).to.be.true;
		expect(spy.calledWith('The total is: 10')).to.be.true;
		spy.restore();
		stub.restore();
	});
});
