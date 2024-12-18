// simple express app
const express = require('express');

const app = express();

app.get('/', (req, resp) => {
	resp.send('Welcome to the payment system');
});

app.listen(7865, 'localhost', () => {
	console.log('API available on localhost port 7865');
});

module.exports = app;
