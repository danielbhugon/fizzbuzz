## Instructions for use:

The functionality is in a file fizzbuzz.js which exports functions intended for use in a node.js. To use the functions first import as an object using require, for example with the file in the /lib subfolder:

```Javascript
var fizzbuzz = require('../lib/fizzbuzz.js');
```

and then call the message function exported by that object, with the start and end number of the contiguous range (inclusive) passed as first and second parameters respectively. The return value is an object containing the message, as well as a counts object which contains the numbers of occurrences of each word in the resulting message.

```Javascript
var result = fizzbuzz.createMessage(1,20); 
console.log(result.message);
console.log(result.counts);
```

## Unit tests
Are specified in fizzbuzz_test.js under the test subfolder. Assuming mocha is installed, these can be run as

```
mocha test
```
