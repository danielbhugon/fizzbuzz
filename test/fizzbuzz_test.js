var assert = require('assert');
var fizzbuzz = require('../lib/fizzbuzz.js');

describe('fizzbuzz', function() {
	
	describe('#translate()', function () {
		
		it('should return "fizz" for the number 3', function () {
			assert.equal(fizzbuzz.translate(3), 'fizz');
		});
	});
})
