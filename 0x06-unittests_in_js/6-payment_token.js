function getPaymentTokenFromAPI(success) {
	if (success) {
		const result = {
			data: 'Successful response from the API'
		};
		return (Promise.resolve(result));
	}
}

module.exports = getPaymentTokenFromAPI;
