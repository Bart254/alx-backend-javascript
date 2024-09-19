// simple express app
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, resp) => {
	resp.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, resp) => {
	const id = parseInt(req.params.id);
	resp.status(200).send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, resp) => {
	const obj = {
		payment_methods: {
			credit_cards: true,
			paypal: false
		}
	};

	return resp.status(200).json(obj);
});

app.post('/login', (req, resp) => {
	const username = req.body.userName;
	const message = `Welcome ${username}`;

	resp.status(200).send(message);
});

app.listen(7865, 'localhost', () => {
	console.log('API available on localhost port 7865');
});

module.exports = app;
