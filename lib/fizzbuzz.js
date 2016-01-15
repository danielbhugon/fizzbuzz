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
	var message = "";
	var watchWords = ['fizz','buzz','fizzbuzz','lucky'];
	var wordCounts = [0,0,0,0];
	var integerCount = 0;
	
	for (var i=from; i<=to; i++) {
		var translated = translate(i);
		var found = watchWords.indexOf(translated);
		
		if (found == -1) {
			integerCount++;
		}
		else {
			wordCounts[found]++;
		}
		
		message += translated + " ";
	}
	
	// build return object
	
	var counts = {
		integer: integerCount
	}
	
	watchWords.forEach(function(word, index){
		counts[word] = wordCounts[index];
	});
	
	var result = {
		message: message,
		counts: counts
	}
	
	return result;
}


exports.translate = translate;
exports.createMessage = createMessage;
