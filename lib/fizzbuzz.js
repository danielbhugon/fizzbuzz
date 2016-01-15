'use strict'

var translate = function(number) {
	
	var translated = number.toString(); // default translation is to just covert to string
	
	if (translated.indexOf('3') > -1) {
		translated = 'lucky';
	}
	else if (number%15 == 0) {
		translated = 'fizzbuzz';
	}
	else if (number%3 == 0) {
		translated = 'fizz';
	}
	else if (number%5 == 0) {
		translated = 'buzz';
	}
	
	return translated;
};

var createMessage = function(from, to) {
	var result = "";
	for (var i=from; i<=to; i++) {
		result += translate(i) + " ";
	}
	
	return result;
}


exports.translate = translate;
exports.createMessage = createMessage;
