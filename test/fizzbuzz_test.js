var assert = require('assert');
var fizzbuzz = require('../lib/fizzbuzz.js');

describe('fizzbuzz', function() {
	
	describe('#translate(number)', function () {
		
		var testCases = ['fizzbuzz', '1', '2', 'fizz', '4', 'buzz', 'fizz', '7', '8', 'fizz', 'buzz', '11', 'fizz', '13', '14', 'fizzbuzz', '16'];
		
		testCases.forEach(function(expected, index){
			it('should return ' + expected + ' for input ' + index, function () {
				assert.equal(expected, fizzbuzz.translate(index));
			});
		});
	});
	
	describe('#message(from, to)', function() {
		
		it('should return the expected string for the first 20 numbers', function() {
			assert.equal('1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz ', fizzbuzz.createMessage(1, 20));
		});
		
		it('should return the expected string for the numbers 21 through 25', function() {
			assert.equal('fizz 22 23 fizz buzz ', fizzbuzz.createMessage(21, 25));
		});
	});
})
