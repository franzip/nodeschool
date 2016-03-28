var test    = require('tape'),
    testStr = 'Hello',
    fancify = require(process.argv[2]);

test('return str wrapped in ~*~', function(t) {
    t.equal(fancify(testStr), '~*~' + testStr + '~*~');
    t.end();
});

test('second optional arg convert string into ALLCAPS', function(t) {
    t.equal(fancify(testStr, true), '~*~' + testStr.toUpperCase() + '~*~');
    t.end();
});

test('third optional arg determines the character in the middle', function(t) {
    t.equal(fancify(testStr, false, '!'), '~!~' + testStr + '~!~');
    t.end();
});
