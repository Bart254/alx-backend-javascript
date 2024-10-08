const Utils = {
	calculateNumber: (type, a, b) => {
		a = Math.round(a);
		b = Math.round(b);
		switch(type) {
			case 'SUM':
				return (a + b);
			case 'SUBTRACT':
				return (a - b);
			case 'DIVIDE':
				if (!b) return ('Error');
				return (a / b);
		}
	}
}

module.exports = Utils;
