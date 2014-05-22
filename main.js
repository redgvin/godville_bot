var WebSocket = require('ws');
var ws = new WebSocket(
	'ws://ws1.godville.net:82/hero',
	undefined,
	{
		headers: {
			Cookie:'god_session_id=2b5ce22933c940e78033538cf3e1a1b2; __utma=25621547.504172843.1400741251.1400741251.1400753701.2; __utmb=25621547.2.10.1400753701; __utmc=25621547; __utmz=25621547.1400741251.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)'
		}
	}
);

ws.on('open', function() {
	console.log('4')
	ws.send('/fbh/feed?a=GjZLOZGK7ior8w2omUIsNhZ6Vcqm');
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