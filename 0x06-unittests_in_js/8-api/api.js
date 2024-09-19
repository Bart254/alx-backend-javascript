// simple api server
const express = require('express');

const app = express();

// create index route
app.get('/', (req, resp) => {
	return resp.status(200).send('Welcome to the payment system');
});

// start the app
app.listen(7865, 'localhost', () => {
	console.log('API available on localhost port 7865');
});
