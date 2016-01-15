'use strict'

var translate = function(number) {
	
	if (number%15 == 0) {
		return 'fizzbuzz';
	}
	else if (number%3 == 0) {
		return 'fizz';
	}
	else if (number%5 == 0) {
		return 'buzz';
	}
	else {
		return number.toString();
	}
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
