var assert       = require('assert'),
    isCoolNumber = require(process.argv[2]);

assert.equal(isCoolNumber(42), true, 'return true with 42');


