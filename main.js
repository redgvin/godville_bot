var cfg = require('./config.js');
var ws = require('./ws');
var Http = require('./http');

var request = require('request');

request.post(
    'http://godville.net/login/login',
    {
    	form: {
    		username:cfg.username,
    		password:cfg.password,
    		save_login:true,
			commit:'Войти!'
    	} 
	},
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
        var cookies = response
        	.headers['set-cookie']
        	.map(function(cookie){return cookie.split(';')[0];})
			.join(';');
		
		ws(cookies,Http(cookies));
    }
);