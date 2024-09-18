// test file for calculateNumber
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber', () => {
	describe('SUM', () => {
		it('+ve decimals >= .5 rounded up', () => {
			assert.equal(calculateNumber('SUM', 2.5, 2), 5);
			assert.equal(calculateNumber('SUM', 2.9, 2.5), 6);
		});

		it('+ve decimals < .5 rounded down', () => {
			assert.equal(calculateNumber('SUM', 2.4, 2), 4);
			assert.equal(calculateNumber('SUM', 2.4, 2.1), 4);
		});

		it('-ve decimals > .5 rounded down', () => {
			assert.equal(calculateNumber('SUM', -2.7, 2), -1);
			assert.equal(calculateNumber('SUM', -2.9, -2.9), -6);
		});

		it('-ve decimals <= .5 rounded up', () => {
			assert.equal(calculateNumber('SUM', -2.5, 2), 0);
			assert.equal(calculateNumber('SUM', -2.3, 2), 0);
		});
	});

	describe('SUBTRACT', () => {
		it('+ve decimals >= .5 rounded up', () => {
			assert.equal(calculateNumber('SUBTRACT', 2.5, 2), 1);
			assert.equal(calculateNumber('SUBTRACT', 2.9, 2.5), 0);
			assert.equal(calculateNumber('SUBTRACT', 3.8, 7), -3);
		});

		it('+ve decimals < .5 rounded down', () => {
			assert.equal(calculateNumber('SUBTRACT', 2.4, 2), 0);
			assert.equal(calculateNumber('SUBTRACT', 2.4, 2.1), 0);
			assert.equal(calculateNumber('SUBTRACT', 3.3, 8.1), -5);
		});

		it('-ve decimals > .5 rounded down', () => {
			assert.equal(calculateNumber('SUBTRACT', -2.7, 2), -5);
			assert.equal(calculateNumber('SUBTRACT', -2.9, -2.9), 0);
		});

		it('-ve decimals <= .5 rounded up', () => {
			assert.equal(calculateNumber('SUBTRACT', -2.5, 2), -4);
			assert.equal(calculateNumber('SUBTRACT', -2.3, 2), -4);
		});
	});

	describe('DIVIDE', () => {
		it('dividing positive numbers yield a positive result', () => {
			assert.equal(calculateNumber('DIVIDE', 4.5, 1.5), 2.5);
			assert.equal(calculateNumber('DIVIDE', 4.3, 1.2), 4);
			assert.equal(calculateNumber('DIVIDE', 4.3, 5.3), 0.8);
		});

		it('dividing a positive by a negative gives negative result', () => {
			assert.equal(calculateNumber('DIVIDE', 4.3, -1.2), -4);
			assert.equal(calculateNumber('DIVIDE', 4.5, -1.6), -2.5);
		});

		it('dividing a negative by a positive gives negative result', () => {
			assert.equal(calculateNumber('DIVIDE', -4.3, 1.2), -4);
			assert.equal(calculateNumber('DIVIDE', -4.6, 1.2), -5);
			assert.equal(calculateNumber('DIVIDE', -4.9, 1.9), -2.5);
		});

		it('dividing a negative by a negative yields a positive', () => {
			assert.equal(calculateNumber('DIVIDE', -4.3, -1.2), 4);
			assert.equal(calculateNumber('DIVIDE', -4.3, -1.6), 2);
			assert.equal(calculateNumber('DIVIDE', -4.7, -1.2), 5);
			assert.equal(calculateNumber('DIVIDE', -4.7, -1.7), 2.5);
		});

		it('dividing by zero yields error', () => {
			assert.match(calculateNumber('DIVIDE', 4.3, 0), /^Error$/);
		});
	});
});
