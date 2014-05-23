var request = require('request');

function randomstring(a) {
    var b = "",
        c = function () {
            var a = Math.floor(Math.random() * 62);
            if (a < 10) return a;
            if (a < 36) return String.fromCharCode(a + 55);
            return String.fromCharCode(a + 61)
        };
    while (b.length < a) b += c();
    return b
}

var prepare_args = function (a) {
    return randomstring(5) + Gcv.encode(a) + randomstring(3)
}

var Gcv = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (a) {
        var b = "",
            c, d, e, f, g, h, i, j = 0;
        a = Gcv._utf8_encode(a);
        while (j < a.length) c = a.charCodeAt(j++), d = a.charCodeAt(j++), e = a.charCodeAt(j++), f = c >> 2, g = (c & 3) << 4 | d >> 4, h = (d & 15) << 2 | e >> 6, i = e & 63, isNaN(d) ? h = i = 64 : isNaN(e) && (i = 64), b = b + this._keyStr.charAt(f) + this._keyStr.charAt(g) + this._keyStr.charAt(h) + this._keyStr.charAt(i);
        return b
    },
    _utf8_encode: function (a) {
        a = a.replace(/\r\n/g, "\n");
        var b = "";
        for (var c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            d < 128 ? b += String.fromCharCode(d) : d > 127 && d < 2048 ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(d & 63 | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(d & 63 | 128))
        }
        return b
    }
};

var get_cmd_id = function (a) {
    keys = {
        Bja2XQ1F4t9uo9YNkrTH: "ulcZnxiDtNpgwrFSHHYC",
        "3hOqa3hA2Gjh7tEWSD5T": "9W1f6FIbcM8jgpgaKZy5",
        KztXWDej9YxdBu0LCMUf: "SO9ibG1N6FlxSvmZpUjt",
        fjQtRFHERdTEvAbY3p2m: "A33kQDcbmpBC39ocBMVU",
        m5S1KBfBxKhNWuu61EjC: "OZGK7ior8w2omUIsNhZ6",
        AJ53peA1Kl3eoRv1fnbW: "ywCvjEbxoW9YSaLT7vKD",
        agQHqM4rCoT0CaDvq44I: "2ahcM6oMrfS4DfuMyv1g",
        "54pcE5UCp82zxcEQcBwj": "Vy0FUsHs0T6sqqDFobCW",
        lvBuKwP7tQetJZNXXQx7: "9tUdvaq6kWLAKOMcadwv",
        "5JgMUahE1BYdtf7quoWz": "YFQT8EtYAQwiIgmiUA2V",
        QCFRPkOrNhNB5tAZhEy5: "pkZ8dUzy0spUvy5XyYs4",
        IPzdqJ1FIhISEEKnlYrl: "77b3f1WgtjPlNfuyUAjN",
        GJyYqhQtKRYCWFp1UwM5: "m7q8iLgRil1tzkjfG0x5",
        QfW08b8BVphsw65Adv5D: "dp9iHgnA8OonwksM1I88",
        QBx5eknHRruO94WLhxCR: "LGyLLcJCYKHurUUgtNQN",
        G4LFOuNINtvAFR1pJXTy: "GDz5mXXypczssAYGjAty",
        u2iZlzPPsST6a7jhFg4y: "jka7nYaMz1ZIhYwQ2Pge",
        ARKYteoAvq5ne3JfYpcV: "UZayz1EYe6TLXl5Xbyxa",
        bk1yXKUzxwWKvsQOtpt5: "wEUvcdWI5QM29n74dMkT",
        xAZqO7epAERoAsmUTDFj: "15d2cp5A2iv5YLX55d0Q",
        WzCGcLhzgkHj35wake2c: "OcRy0XlLkHJVL16opNws",
        z0uVDOyRiCLKIBhDnnVw: "f7dbXWvYXCCPfQLIfvmt",
        oTSzzK6ZYFu0a4N7lDu1: "PH36fkU0nUsrs0e8LiF5",
        "66LpWTKQaNrTqvRxNCvW": "bYadpk6N29nhUVojiH34",
        dg3yOKCzGwdKvsTOtdt4: "iNCaDWOi15wJs4uFJJvI",
        nYrBGlddZVxNgxJLFffQ: "MRsaFLGpTaPol6FFhAtS",
        "7Ub7bq4b4fKpsydXuVOm": "3GGcSQqPm4DC1ynsBr8l",
        VLL6RhIsTFlKlHly3rUb: "F3fmZRhSir9QJJe8PPHn",
        vS9Mnm48PCKUaKPuwod6: "KwkC3rjUcffkbpCIaxfO",
        R2jD74ywz4d7QXjcQ75r: "QPxZTriOpbZ2uQ220Y2a",
        W9jcR9yqvGlLvyfCi12v: "l3SMK7bFCCy2XnbOnFrt",
        Ce1TdUevvGbwt9TXOUqJ: "KYIBWPpDscFPF3CqYEsT",
        yYKfxTjrO3fuODiRwOOJ: "BhyjK8yaDXc6mKTI6do7",
        BDvAKtPWPV4ZM4jEeC2F: "diWmFNYwAuRpBpLhJmzL",
        NOi5hcPevRWvkbhsW5z5: "ddueG7bi41IjyeVs32vl",
        CnV5dUTEijtCky822p0Z: "ut9zkasjHvpj2xhtvg9e",
        NYysRCyzpcMWbRpShXQy: "FstZ9Z1Sg2mjgwvy92WK"
    };
    return randomstring(4) + keys[a] + randomstring(5)
};

module.exports = exports = function(cookies) {
	var get = function(form, cb){
		var s = [];
		for(var i in form){
			s.push(i+'='+form[i]);
		}
		var url = 'http://godville.net/fbh/feed' + (s.length > 0?'?'+s.join('&'):'');
		var params = {
		    url: url,
		    headers: {Cookie:cookies}
		};
		return request.get(params, cb);
	};

	var post = function(form, cb){
		var url = 'http://godville.net/fbh/feed';
		var params = {
		    url: url,
		    headers: {Cookie:cookies},
		    form: form
		};
		return request.get(params, cb);
	};

	get({a:get_cmd_id("m5S1KBfBxKhNWuu61EjC")},function(){
		var state = JSON.parse(arguments[1].body);
	});

	return function(message){
		console.log('message');
		try{
			var match = message.match(/\d+({.*})/);
			if(match && match[1]){
				message = match[1];
				message = JSON.parse(message);
			}
		}catch(e){
			console.log('Error', e.message);
		}
		if(typeof message === 'object'){
			if(message.hero.health < 500){
				post(
					{
						a:get_cmd_id('5JgMUahE1BYdtf7quoWz'),
						b:prepare_args(JSON.stringify({action: "god_phrase",god_phrase: 'Use the force'}))
					},
					function(){
						console.log('Action response',JSON.parse(arguments[1].body));
					}
				);
			}
		}
	}
}