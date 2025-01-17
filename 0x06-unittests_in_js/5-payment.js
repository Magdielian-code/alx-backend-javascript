
// 5-payment.js (same content as 4-payment.js)

const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
	const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
	console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi;
