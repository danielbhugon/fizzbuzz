var assert = require('assert');
var fizzbuzz = require('../lib/fizzbuzz.js');

describe('fizzbuzz', function() {
	
	describe('#translate(number)', function () {
		
		var testCases = ['fizzbuzz', '1', '2', 'lucky', '4', 'buzz', 'fizz', '7', '8', 'fizz', 'buzz', '11', 'fizz', 'lucky', '14', 'fizzbuzz', '16'];
		
		testCases.forEach(function(expected, index){
			it('should return ' + expected + ' for input ' + index, function () {
				assert.equal(expected, fizzbuzz.translate(index));
			});
		});
	});
	
	describe('#message(from, to)', function() {
		
		it('should return the expected message string for the first 20 numbers', function() {
			assert.equal('1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 14 fizzbuzz 16 17 fizz 19 buzz ', fizzbuzz.createMessage(1, 20).message);
		});
		
		it('should return the expected word count for the first 20 numbers', function() {
			var expectedCount = {
				fizz : 4,
				buzz : 3,
				fizzbuzz : 1,
				lucky : 2,
				integer : 10
			}
			
			assert.deepEqual(expectedCount, fizzbuzz.createMessage(1, 20).counts);
		});
		
		it('should return the expected string for the numbers 21 through 25', function() {
			assert.equal('fizz 22 lucky fizz buzz ', fizzbuzz.createMessage(21, 25).message);
		});
		
		
		
	});
	
})
