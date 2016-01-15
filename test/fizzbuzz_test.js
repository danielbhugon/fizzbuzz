var assert = require('assert');
var fizzbuzz = require('../lib/fizzbuzz.js');

describe('fizzbuzz', function() {
	
	describe('#translate()', function () {
		
		var testCases = ['fizzbuzz', '1', '2', 'fizz', '4', 'buzz', 'fizz', '7', '8', 'fizz', 'buzz', '11', 'fizz', '13', '14', 'fizzbuzz', '16'];
		
		testCases.forEach(function(expected, index){
			it('should return ' + expected + ' for input ' + index, function () {
				assert.equal(expected, fizzbuzz.translate(index));
			});
		});
		
		
	});
})
