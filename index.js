'use strict';


var fizzbuzz = require('./lib/fizzbuzz.js');

var result = fizzbuzz.createMessage(1,20);
console.log(result.message);
console.log(result.counts);
