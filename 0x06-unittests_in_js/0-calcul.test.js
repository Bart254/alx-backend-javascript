// Mocha test for function calculateNumber
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test for function calculateNumber', () => {
	it('positive decimals greater than .5 rounded up', () => {
		assert.equal(calculateNumber(2.5, 2.0), 5);
		assert.equal(calculateNumber(2.5, 2.7), 6);
	});

	it('positive decimals less than .5 rounded down', () => {
		assert.equal(calculateNumber(2.4, 2.2), 4);
		assert.equal(calculateNumber(2.3, 18.7), 21);
	});

	it('negative decimals less than 0.6 rounded down', () => {
		assert.equal(calculateNumber(-2.5, 2), 0);
		assert.equal(calculateNumber(-2.4, -2.4), -4);
		assert.equal(calculateNumber(-2.5, 2.7), 1);
	});

	it('negative decimals greater than 0.5 rounded up', () => {
		assert.equal(calculateNumber(-2.6, 2.6), 0);
		assert.equal(calculateNumber(-2.9, 2.4), -1);
		assert.equal(calculateNumber(-2.8, -2.5), -5);
	});
});
