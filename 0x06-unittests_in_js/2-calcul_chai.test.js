// test file for calculateNumber
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('#calculateNumber', () => {
	describe('SUM', () => {
		it('+ve decimals >= .5 rounded up', () => {
			expect(calculateNumber('SUM', 2.5, 2)).to.equal(5);
			expect(calculateNumber('SUM', 2.9, 2.5)).to.equal(6);
		});

		it('+ve decimals < .5 rounded down', () => {
			expect(calculateNumber('SUM', 2.4, 2)).to.equal(4);
			expect(calculateNumber('SUM', 2.4, 2.1)).to.equal(4);
		});

		it('-ve decimals > .5 rounded down', () => {
			expect(calculateNumber('SUM', -2.7, 2)).to.equal(-1);
			expect(calculateNumber('SUM', -2.9, -2.9)).to.equal(-6);
		});

		it('-ve decimals <= .5 rounded up', () => {
			expect(calculateNumber('SUM', -2.5, 2)).to.equal(0);
			expect(calculateNumber('SUM', -2.3, 2)).to.equal(0);
		});
	});

	describe('SUBTRACT', () => {
		it('+ve decimals >= .5 rounded up', () => {
			expect(calculateNumber('SUBTRACT', 2.5, 2)).to.equal(1);
			expect(calculateNumber('SUBTRACT', 2.9, 2.5)).to.equal(0);
			expect(calculateNumber('SUBTRACT', 3.8, 7)).to.equal(-3);
		});

		it('+ve decimals < .5 rounded down', () => {
			expect(calculateNumber('SUBTRACT', 2.4, 2)).to.equal(0);
			expect(calculateNumber('SUBTRACT', 2.4, 2.1)).to.equal(0);
			expect(calculateNumber('SUBTRACT', 3.3, 8.1)).to.equal(-5);
		});

		it('-ve decimals > .5 rounded down', () => {
			expect(calculateNumber('SUBTRACT', -2.7, 2)).to.equal(-5);
			expect(calculateNumber('SUBTRACT', -2.9, -2.9)).to.equal(0);
		});

		it('-ve decimals <= .5 rounded up', () => {
			expect(calculateNumber('SUBTRACT', -2.5, 2)).to.equal(-4);
			expect(calculateNumber('SUBTRACT', -2.3, 2)).to.equal(-4);
		});
	});

	describe('DIVIDE', () => {
		it('dividing positive numbers yield a positive result', () => {
			expect(calculateNumber('DIVIDE', 4.5, 1.5)).to.equal(2.5);
			expect(calculateNumber('DIVIDE', 4.3, 1.2)).to.equal(4);
			expect(calculateNumber('DIVIDE', 4.3, 5.3)).to.equal(0.8);
		});

		it('dividing a positive by a negative gives negative result', () => {
			expect(calculateNumber('DIVIDE', 4.3, -1.2)).to.equal(-4);
			expect(calculateNumber('DIVIDE', 4.5, -1.6)).to.equal(-2.5);
		});

		it('dividing a negative by a positive gives negative result', () => {
			expect(calculateNumber('DIVIDE', -4.3, 1.2)).to.equal(-4);
			expect(calculateNumber('DIVIDE', -4.6, 1.2)).to.equal(-5);
			expect(calculateNumber('DIVIDE', -4.9, 1.9)).to.equal(-2.5);
		});

		it('dividing a negative by a negative yields a positive', () => {
			expect(calculateNumber('DIVIDE', -4.3, -1.2)).to.equal(4);
			expect(calculateNumber('DIVIDE', -4.3, -1.6)).to.equal( 2);
			expect(calculateNumber('DIVIDE', -4.7, -1.2)).to.equal(5);
			expect(calculateNumber('DIVIDE', -4.7, -1.7)).to.equal(2.5);
		});

		it('dividing by zero yields error', () => {
			expect(calculateNumber('DIVIDE', 4.3, 0)).to.equal('Error');
		});
	});
});
