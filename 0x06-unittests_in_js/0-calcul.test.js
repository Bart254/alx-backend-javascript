// test file for calculateNumber
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('#calculateNumber', () => {
	it('should return a +ve number when a and b are +ve', () => {
		assert.equal(calculateNumber(23, 43), 66);
		assert.equal(calculateNumber(10, 1), 11);
	});

	it('positive decimals greater or equal to .5 rounded up', () => {
		assert.equal(calculateNumber(23.5, 23), 47);
		assert.equal(calculateNumber(23.5, 23.5), 48);
		assert.equal(calculateNumber(0, 0.5), 1);
	});

	it('positive decimals less than .5 are rounded down', () => {
		assert.equal(calculateNumber(23.2, 23), 46);
		assert.equal(calculateNumber(23.2, 23.2), 46);
		assert.equal(calculateNumber(23, 23.4), 46);
	});

	it('negative numbers correctly added', () => {
		assert.equal(calculateNumber(-1, -1), -2);
		assert.equal(calculateNumber(-1, 0), -1);
		assert.equal(calculateNumber(1, -1), 0);
	});

	it('negative decimals less than and equal to .5 are rounded up', () => {
		assert.equal(calculateNumber(-2.5, 1), -1);
		assert.equal(calculateNumber(-10.2, -3.2), -13);
		assert.equal(calculateNumber(-10.2, -10), -20);
		assert.equal(calculateNumber(-10.4, 19), 9);
	});

	it('negative decimals greater than .5 ae rounded down', () => {
		assert.equal(calculateNumber(-2.6, 1), -2);
		assert.equal(calculateNumber(-10.7, -3.9), -15);
		assert.equal(calculateNumber(-10.9, -10), -21);
		assert.equal(calculateNumber(-10.6, 19), 8);
	});
});
