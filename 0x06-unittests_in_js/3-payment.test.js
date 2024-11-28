// test file for calculateNumber
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('SendPaymentRequestToApi', () => {
	it('Should spy on Utils.calculateNumber', () => {
		const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
		sendPaymentRequestToApi(100, 20);

		expect(calculateNumberSpy.called).to.be.true;
		expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
		expect(calculateNumberSpy.calledOnce).to.be.true;
		calculateNumberSpy.restore();
	});
});
