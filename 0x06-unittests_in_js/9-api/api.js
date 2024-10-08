// simple express app
const express = require('express');

const app = express();

app.get('/', (req, resp) => {
	resp.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, resp) => {
	const id = parseInt(req.params.id);
	resp.status(200).send(`Payment methods for cart ${id}`);
});

app.listen(7865, 'localhost', () => {
	console.log('API available on localhost port 7865');
});

module.exports = app;
