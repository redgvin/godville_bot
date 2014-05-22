var WebSocket = require('ws')
, ws = new WebSocket('ws://ws1.godville.net:82/hero');

ws.on('open', function() {
	console.log('4')
	ws.send('subscribe');
});
ws.on('message', function(message) {
	console.log('7')
	console.log(arguments)
	console.log('received: %s', message);
});
ws.on('error', function(message) {
	console.log('7')
	console.log(arguments)
});