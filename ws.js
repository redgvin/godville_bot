var WebSocket = require('ws');
module.exports = exports = function(cookies, cb) {
	var ws = new WebSocket(
		'ws://ws1.godville.net:82/hero',
		undefined,
		{headers: {Cookie:cookies}}
	);

	ws.on('open', function() {
		console.log('WebSocket connected');
	});
	ws.on('message', function(message) {
		cb.apply(this, arguments);
	});
	ws.on('error', function() {
		console.log('Error!');
		console.log(arguments)
	});
}