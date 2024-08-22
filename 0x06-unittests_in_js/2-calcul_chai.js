// script calculates sum of two numbers
function calculateNumber(type, a, b) {
	a = Math.round(a);
	b = Math.round(b);
	switch(type) {
		case 'SUM':
			return (a + b);
		case 'SUBTRACT':
			return (a - b);
		case 'DIVIDE':
			if (b === 0) return ('Error');
			return (Math.round((a / b) * 100) / 100);
	}
}

module.exports = calculateNumber;
